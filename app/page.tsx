import Link from "next/link";
import { ArrowRight } from "lucide-react";

import SuggestComponents from "@/components/suggest-components";

export default function Page() {
  return (
    <main>
      <div className="px-4 sm:px-6">
        <div className="mx-auto w-full max-w-3xl">
          <div className="mb-4">
            <p className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-background px-3 py-1 text-sm font-medium text-foreground shadow-sm shadow-black/[.12] dark:bg-accent">
              <span className="mr-2 flex shrink-0 border-r border-border pr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  fill="none"
                >
                  <path
                    className="fill-zinc-500"
                    d="M6.958.713a1 1 0 0 0-1.916 0l-.999 3.33-3.33 1a1 1 0 0 0 0 1.915l3.33.999 1 3.33a1 1 0 0 0 1.915 0l.999-3.33 3.33-1a1 1 0 0 0 0-1.915l-3.33-.999-1-3.33Z"
                  />
                </svg>
              </span>
              New releases every week
            </p>
          </div>

          <div className="mb-16">
            <h1 className="mx-auto mb-4 max-w-3xl text-4xl/[1.1] font-extrabold tracking-tight text-foreground md:text-5xl/[1.1]">
              {/* Beautiful UI components built with Tailwind CSS and Next.js. */}
              A Collection of functional, interactive web3 components
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Build dApps faster with ready-to-use Web3 components built using
              Shadcn/ui, Tailwind CSS, and Next.js. — just copy, paste, and
              integrate!
            </p>
          </div>

          <div className="mb-12">
            <h2 className="mb-5 text-muted-foreground">Components</h2>
            <nav>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="/wallet-address"
                    className="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-border bg-background p-4 font-bold shadow-sm shadow-black/5 outline-offset-2 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
                  >
                    <span className="truncate">Wallet Address</span>
                    <ArrowRight
                      size={16}
                      strokeWidth={2}
                      className="-mr-1 ml-2 shrink-0 opacity-60"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nft-cards"
                    className="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-border bg-background p-4 font-bold shadow-sm shadow-black/5 outline-offset-2 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
                  >
                    <span className="truncate">NFT Card</span>
                    <ArrowRight
                      size={16}
                      strokeWidth={2}
                      className="-mr-1 ml-2 shrink-0 opacity-60"
                    />
                  </Link>
                </li>
                <li>
                  <span className="inline-flex w-full flex-col justify-between gap-2 rounded-lg border border-border bg-background p-4 font-bold shadow-sm shadow-black/5 sm:h-14 sm:flex-row sm:items-center">
                    Swap Tokens
                    <span className="text-xs font-medium uppercase text-zinc-400 dark:text-zinc-600">
                      Coming soon
                    </span>
                  </span>
                </li>
              </ul>
            </nav>
          </div>

          <SuggestComponents />
        </div>
      </div>
    </main>
  );
}
