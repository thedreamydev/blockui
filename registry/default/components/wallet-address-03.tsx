"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { useCopy } from "@/registry/default/hooks/use-copy";
import { useGradientColors } from "@/registry/default/hooks/use-gradient-colors";

const shortenAddress = (address: string = ""): string =>
  address.length > 9
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : address;

const WalletAddress03 = () => {
  // managing tooltip state manually for keeping tooltip open even after button click
  const [isOpen, setIsOpen] = useState(false);

  const { copied, copy } = useCopy();

  const address = "0x1F6Ac473bfE26A84AcF4e255156B7816245b17aa";
  const shortenedAddress = shortenAddress(address);

  const gradientColors = useGradientColors(address);

  return (
    <TooltipProvider delayDuration={500}>
      <Tooltip open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
        <TooltipTrigger
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(true);
            copy(address);
          }}
          asChild
        >
          <Button variant="ghost">
            <div className="flex items-center gap-2">
              <div
                className="rounded-full"
                style={{
                  width: "1.25rem",
                  height: "1.25rem",
                  boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0.1)",
                  backgroundColor: gradientColors[0],
                  backgroundImage: `
                  radial-gradient(at 66% 77%, ${gradientColors[1]} 0px, transparent 50%),
                  radial-gradient(at 29% 97%, ${gradientColors[2]} 0px, transparent 50%),
                  radial-gradient(at 99% 86%, ${gradientColors[3]} 0px, transparent 50%),
                  radial-gradient(at 29% 88%, ${gradientColors[4]} 0px, transparent 50%)
                `,
                }}
              />
              <p className="flex items-center text-base">{shortenedAddress}</p>
            </div>
          </Button>
        </TooltipTrigger>
        <TooltipContent className="pointer-events-none px-2 py-1 text-xs">
          <p>{copied ? "Copied!" : "Copy"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default WalletAddress03;
