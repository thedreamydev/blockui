import { Registry } from "@/registry/schema";

export const hooks: Registry = [
  {
    name: "use-copy",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-copy.ts",
        type: "registry:hook",
      },
    ],
  },
];
