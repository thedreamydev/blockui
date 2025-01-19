import { useMemo } from "react";

/**
 * Custom hook to generate an array of gradient colors based on the given address.
 * Each color is derived by hashing segments of the address string.
 *
 * @param {string} address - The input string used to generate the colors.
 * @returns {string[]} An array of RGB color strings.
 */
export function useGradientColors(address: string): string[] {
  if (!address) {
    throw new Error("Address is required to generate colors.");
  }

  // Memoize the gradient colors for performance optimization
  return useMemo(() => {
    // Extract up to 5 seed strings from the address
    const seedArr = address.match(/.{1,7}/g)?.slice(0, 5);

    if (!seedArr || seedArr.length < 5) {
      throw new Error(
        "Address must be long enough to generate sufficient gradient colors."
      );
    }

    // Generate an array of colors based on the seed array
    return seedArr.map((seed) => {
      let hash = 0;

      // Create a hash from the seed string
      for (let i = 0; i < seed.length; i++) {
        hash = seed.charCodeAt(i) + ((hash << 5) - hash);
        hash &= hash; // Convert to a 32-bit integer
      }

      // Generate RGB values from the hash
      const rgb = Array.from({ length: 3 }, (_, i) => (hash >> (i * 8)) & 255);
      return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    });
  }, [address]); // Dependencies array ensures the colors are recalculated only when the address changes
}
