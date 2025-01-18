import { components } from "@/registry/registry-components";
import { hooks } from "@/registry/registry-hooks";
import { lib } from "@/registry/registry-lib";
import { Registry } from "@/registry/schema";

export const registry: Registry = [...lib, ...hooks, ...components];
