import { Registry } from "@/registry/schema";

export const components: Registry = [
  {
    name: "wallet-address-01",
    type: "registry:component",
    registryDependencies: ["button"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "components/wallet-address-01.tsx",
        type: "registry:component",
      },
      {
        path: "hooks/use-copy.ts",
        type: "registry:hook",
      },
    ],
  },
];
