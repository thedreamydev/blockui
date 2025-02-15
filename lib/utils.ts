import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Metadata } from "next";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata(): Metadata {
  const siteName = "Block UI";
  const title = `${siteName} - A Collection of functional, interactive web3 components`;
  const description =
    "Build dApps faster with ready-to-use Web3 components built using Shadcn/ui, Tailwind CSS, and Next.js. — just copy, paste, and integrate!";
  const url = "https://blockui.xyz";
  const image = "https://blockui.xyz/og.png";

  return {
    metadataBase: new URL(url),
    title,
    description,
    authors: [{ name: "TheDreamyDev" }],
    appleWebApp: {
      title: siteName,
    },
    openGraph: {
      title: siteName,
      description,
      url,
      siteName: siteName,
      images: image,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteName,
      description,
      images: [image],
    },
  };
}
