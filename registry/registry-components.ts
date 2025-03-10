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
  {
    name: "nft-card-01",
    type: "registry:component",
    registryDependencies: ["button", "card"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "components/nft-card-01.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "nft-card-02",
    type: "registry:component",
    registryDependencies: ["button", "card"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "components/nft-card-02.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "nft-card-03",
    type: "registry:component",
    registryDependencies: ["card"],
    files: [
      {
        path: "components/nft-card-03.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "nft-card-04",
    type: "registry:component",
    registryDependencies: ["button", "card"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "components/nft-card-04.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "nft-card-05",
    type: "registry:component",
    registryDependencies: ["avatar", "button", "card"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "components/nft-card-05.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "nft-card-06",
    type: "registry:component",
    registryDependencies: ["avatar", "button", "card"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "components/nft-card-06.tsx",
        type: "registry:component",
      },
    ],
  },
];
