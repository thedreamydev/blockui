"use client";

import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/registry/default/lib/utils";
import { useCopy } from "@/registry/default/hooks/use-copy";

const shortenAddress = (address: string = ""): string =>
  address.length > 9
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : address;

const WalletAddress02 = () => {
  const { copied, copy } = useCopy();

  const address = "0x1F6Ac473bfE26A84AcF4e255156B7816245b17aa";
  const shortenedAddress = shortenAddress(address);

  return (
    <div className="flex items-center gap-2">
      <p className="text-sm font-medium">{shortenedAddress}</p>

      <Button
        variant="ghost"
        size="icon"
        className="size-5 p-1 hover:bg-transparent text-muted-foreground"
        onClick={() => copy(address)}
      >
        <div
          className={cn(
            "transition-all",
            copied ? "scale-100 opacity-100" : "scale-0 opacity-0"
          )}
        >
          <Check color="#10B981" />
        </div>
        <div
          className={cn(
            "absolute transition-all",
            copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
          )}
        >
          <Copy />
        </div>
      </Button>
    </div>
  );
};

export default WalletAddress02;
