import type { Metadata } from "next";

import PageHeader from "@/components/page-header";
import DemoComponent from "@/components/demo-component";
import SuggestComponents from "@/components/suggest-components";

export const metadata: Metadata = {
  title: "Token Selector Components - Block UI",
  description:
    "A searchable popup UI for selecting tokens with logos and symbols. Ideal for swap forms, staking interfaces, and dashboards, built with Shadcn/ui, Tailwind CSS, and Next.js.",
};

type Component = {
  name: string;
  className?: string;
};

const center = "flex justify-center align-center";
const components: Component[] = [
  { name: "token-selector-01", className: center },
];

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Token Selector">
            A searchable popup UI for selecting tokens with logos and symbols.
            Ideal for swap forms, staking interfaces, and dashboards, built with
            Shadcn/ui, Tailwind CSS, and Next.js.
          </PageHeader>

          <div className="grid max-w-6xl grid-cols-1 overflow-hidden [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
            {components.map((component) => {
              return (
                <DemoComponent
                  key={component.name}
                  componentName={component.name}
                  className={component.className}
                />
              );
            })}
          </div>

          <SuggestComponents />
        </div>
      </div>
    </main>
  );
}
