import type { Metadata } from "next";

import PageHeader from "@/components/page-header";
import DemoComponent from "@/components/demo-component";
import SuggestComponents from "@/components/suggest-components";

export const metadata: Metadata = {
  title: "Transaction History Components - Block UI",
  description:
    "A clean and compact UI component to display transaction history details. Ideal for wallet dashboards and activity feeds, built with Shadcn/ui, Tailwind CSS, and Next.js.",
};

type Component = {
  name: string;
  className?: string;
};

const center = "flex justify-center align-center";
const components: Component[] = [
  { name: "transaction-history-01", className: center },
  { name: "transaction-history-02", className: center },
];

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <PageHeader title="Transaction Card">
            A clean and compact UI component to display transaction details.
            Ideal for wallet dashboards and activity feeds, built with
            Shadcn/ui, Tailwind CSS, and Next.js.
          </PageHeader>

          <div className="grid max-w-6xl grid-cols-1 lg:grid-cols-2 overflow-hidden [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
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
