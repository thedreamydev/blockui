import Link from "next/link";

import ThemeToggle from "@/components/theme-toggle";

export default function Header() {
  return (
    <header>
      <div className="px-4 sm:px-6">
        <div className="mx-auto mb-16 flex h-[72px] w-full max-w-6xl items-center justify-between gap-3 border-b border-border/70">
          <Link
            href="/"
            aria-label="Home"
            className="rounded-full outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/20"
          >
            <span className="sr-only">Block UI</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-zinc-800 dark:stroke-zinc-100"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <a
              className="relative inline-flex size-9 cursor-pointer items-center justify-center rounded-full text-zinc-500 hover:text-foreground hover:bg-accent outline-offset-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
              href="https://x.com/intent/follow?screen_name=thedreamydev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
              >
                <path d="M14 12.25H9.68L6.297 7.97l-3.873 4.28H.276L5.295 6.7 0 0h4.43l3.06 3.916L11.025 0h2.147L8.485 5.19 14 12.25Zm-3.727-1.244h1.189L3.783 1.18H2.507l7.766 9.827Z" />
              </svg>
            </a>

            <a
              className="inline-flex h-8 items-center justify-center whitespace-nowrap rounded-full bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-sm shadow-black/5 outline-offset-2 transition-colors hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50"
              href="https://github.com/thedreamydev/ui"
              target="_blank"
            >
              <svg
                className="-ms-0.5 me-2 fill-current text-zinc-500"
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                aria-hidden="true"
                role="presentation"
              >
                <path d="M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6C16 3.6 12.4 0 8 0Z" />
              </svg>
              <span className="flex items-baseline gap-1">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
