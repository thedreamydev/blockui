import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Shortens a wallet address to a more readable format.
 *
 * @param {string} address - The wallet address to shorten. Defaults to an empty string if not provided.
 * @returns {string} - The shortened address or the original address if it's 9 characters or fewer.
 *
 * Example:
 *   shortenAddress("0x1234567890abcdef1234567890abcdef12345678")
 *   returns "0x1234...678"
 */
export function shortenAddress(address: string = ""): string {
  return address.length > 9
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : address;
}
