import { Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";

import "./globals.css";

import Header from "@/components/header";
import ThemeProvider from "@/components/theme-provider";
import Illustration from "@/components/illustration";

const fontSans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Block UI - A Collection of functional, interactive web3 components",
  description:
    "Build dApps faster with ready-to-use Web3 components built using Shadcn/ui, Tailwind CSS, and Next.js. — just copy, paste, and integrate!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-background overflow-x-hidden antialiased ${fontSans.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Illustration />

          <div className="relative flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
