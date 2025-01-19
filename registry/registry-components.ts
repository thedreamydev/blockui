import { Registry } from "@/registry/schema";

export const components: Registry = [
  {
    name: "wallet-address-01",
    type: "registry:component",
    registryDependencies: ["button", "tooltip"],
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
  {
    name: "wallet-address-02",
    type: "registry:component",
    registryDependencies: ["button"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "components/wallet-address-02.tsx",
        type: "registry:component",
      },
      {
        path: "hooks/use-copy.ts",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "wallet-address-03",
    type: "registry:component",
    registryDependencies: ["button", "tooltip"],
    files: [
      {
        path: "components/wallet-address-03.tsx",
        type: "registry:component",
      },
      {
        path: "hooks/use-copy.ts",
        type: "registry:hook",
      },
      {
        path: "hooks/use-gradient-colors.ts",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "wallet-address-04",
    type: "registry:component",
    registryDependencies: ["button", "dropdown-menu"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "components/wallet-address-04.tsx",
        type: "registry:component",
      },
      {
        path: "hooks/use-copy.ts",
        type: "registry:hook",
      },
      {
        path: "hooks/use-gradient-colors.ts",
        type: "registry:hook",
      },
    ],
  },
];
