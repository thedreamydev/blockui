import path from "path";
import { z } from "zod";
import { tmpdir } from "os";
import { promises as fs } from "fs";
import { Project, ScriptKind } from "ts-morph";

import { registry } from "../registry";
import {
  Registry,
  registryItemSchema,
  registryItemTypeSchema,
  registrySchema,
} from "../registry/schema";

const REGISTRY_PATH = path.join(process.cwd(), "public/r");

const REGISTRY_INDEX_WHITELIST: z.infer<typeof registryItemTypeSchema>[] = [
  "registry:ui",
  "registry:component",
  "registry:lib",
  "registry:hook",
];

const project = new Project({
  compilerOptions: {},
});

async function createTempSourceFile(filename: string) {
  const dir = await fs.mkdtemp(path.join(tmpdir(), "shadcn-"));
  return path.join(dir, filename);
}

// ----------------------------------------------------------------------------
// Build r/[name].json.
// ----------------------------------------------------------------------------
async function buildStyles(registry: Registry) {
  const targetPath = REGISTRY_PATH;

  for (const item of registry) {
    if (!REGISTRY_INDEX_WHITELIST.includes(item.type)) {
      continue;
    }

    let files;
    if (item.files) {
      files = await Promise.all(
        item.files.map(async (_file) => {
          const file =
            typeof _file === "string"
              ? {
                  path: _file,
                  type: item.type,
                  content: "",
                  target: "",
                }
              : _file;

          let content: string;
          try {
            content = await fs.readFile(
              path.join(process.cwd(), "registry", file.path),
              "utf8"
            );
          } catch (error) {
            console.error(`Build styles error: ${error}`);
            return;
          }

          const tempFile = await createTempSourceFile(file.path);
          const sourceFile = project.createSourceFile(tempFile, content, {
            scriptKind: ScriptKind.TSX,
          });

          sourceFile.getVariableDeclaration("iframeHeight")?.remove();
          sourceFile.getVariableDeclaration("containerClassName")?.remove();
          sourceFile.getVariableDeclaration("description")?.remove();

          const target = file.target || "";

          return {
            path: file.path,
            type: file.type,
            content: sourceFile.getText(),
            target,
          };
        })
      );
    }

    const payload = registryItemSchema.safeParse({
      ...item,
      files,
    });

    if (payload.success) {
      await fs.writeFile(
        path.join(targetPath, `${item.name}.json`),
        JSON.stringify(payload.data, null, 2),
        "utf8"
      );
    }
  }
}

try {
  console.log("💽 Building registry...");
  const result = registrySchema.safeParse(registry);

  if (!result.success) {
    console.error(result.error);
    process.exit(1);
  }

  await buildStyles(result.data);

  console.log("✅ Done!");
} catch (error) {
  console.error(error);
  process.exit(1);
}
