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

const shortenAddress = (address: string = ""): string =>
  address.length > 9
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : address;

const WalletAddress01 = () => {
  // managing tooltip state manually for keeping tooltip open even after button click
  const [isOpen, setIsOpen] = useState(false);

  const { copied, copy } = useCopy();

  const address = "0x1F6Ac473bfE26A84AcF4e255156B7816245b17aa";
  const shortenedAddress = shortenAddress(address);

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
          <Button variant="ghost">{shortenedAddress}</Button>
        </TooltipTrigger>
        <TooltipContent className="pointer-events-none px-2 py-1 text-xs">
          <p>{copied ? "Copied!" : "Copy"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default WalletAddress01;
