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
  {
    name: "use-gradient-colors",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-gradient-colors.ts",
        type: "registry:hook",
      },
    ],
  },
];
