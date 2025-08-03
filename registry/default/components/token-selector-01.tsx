"use client";

import { useState } from "react";
import { TokenIcon } from "@web3icons/react";
import { ChevronDown, Search, TrendingUp } from "lucide-react";

import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { cn } from "@/lib/utils";

interface Token {
  symbol: string;
  name: string;
  address?: string;
}

const popularTokens: Token[] = [
  { symbol: "ETH", name: "Ethereum" },
  { symbol: "USDC", name: "USDC" },
  { symbol: "USDT", name: "Tether" },
  { symbol: "DAI", name: "Dai" },
];

const allTokens: Token[] = [
  { symbol: "ETH", name: "Ethereum" },
  { symbol: "USDC", name: "USDC", address: "0xW6a0...eB98" },
  { symbol: "USDT", name: "Tether", address: "0xdAX9...1vf7" },
  { symbol: "DAI", name: "Dai" },
  { symbol: "WBTC", name: "Wrapped Bitcoin" },
  { symbol: "UNI", name: "Uniswap" },
  { symbol: "LINK", name: "Chainlink" },
  { symbol: "MKR", name: "Maker" },
  { symbol: "AAVE", name: "Aave", address: "0xW6a0...eB98" },
  { symbol: "COMP", name: "Compound" },
  { symbol: "SNX", name: "Synthetix" },
  { symbol: "CRV", name: "Curve DAO Token" },
  { symbol: "SUSHI", name: "Sushi" },
  { symbol: "YFI", name: "yearn.finance" },
  { symbol: "BAT", name: "Basic Attention Token" },
  { symbol: "MATIC", name: "Polygon", address: "0xdAX9...1vf7" },
  { symbol: "1INCH", name: "1inch" },
  { symbol: "GRT", name: "The Graph" },
  { symbol: "ENJ", name: "Enjin Coin" },
  { symbol: "ZRX", name: "0x", address: "0xW6a0...eB98" },
  { symbol: "BNT", name: "Bancor" },
  { symbol: "LRC", name: "Loopring" },
  { symbol: "REN", name: "Ren", address: "0xdAX9...1vf7" },
];

type TokenSelectorModalProps = {
  children: React.ReactNode;
  onSelectToken: (token: string) => void;
};

const TokenSelectorModal = ({
  children,
  onSelectToken,
}: TokenSelectorModalProps) => {
  const [open, setOpen] = useState(false);

  const handleSelectToken = (token: string) => {
    onSelectToken(token);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="!rounded-lg max-w-[400px] p-0 gap-2">
        <DialogHeader className="px-4 pt-4">
          <DialogTitle>Select a token</DialogTitle>
        </DialogHeader>

        <div className="px-4">
          <div className="flex items-center h-10 px-4 my-1 bg-accent rounded-full">
            <div className="flex items-center justify-between flex-shrink-0 text-muted-foreground">
              <Search className="size-5" />
            </div>
            <Input
              className="flex-1 h-full px-2 bg-transparent border-none focus:ring-0 focus-visible:ring-0"
              placeholder="Search a token"
            />
          </div>
        </div>

        <ScrollArea className="h-[586px] relative">
          <div className="px-5 py-2 flex items-center gap-2">
            {popularTokens.map((token) => (
              <button
                key={token.symbol}
                className="px-4 py-3 flex flex-col justify-center items-center flex-1 gap-1 bg-accent rounded-lg cursor-pointer"
                onClick={() => handleSelectToken(token.symbol)}
              >
                <div className="flex-shrink-0 size-6">
                  <TokenIcon
                    symbol={token.symbol.toLowerCase()}
                    className="size-6 rounded-full"
                    variant="background"
                  />
                </div>
                <span className="text-sm">{token.symbol}</span>
              </button>
            ))}
          </div>

          <div className="px-5 py-2 flex items-center gap-2 text-base text-muted-foreground bg-background sticky top-0">
            <div className="flex-shrink-0">
              <TrendingUp className="size-4" />
            </div>
            <p className="font-medium text-sm">Tokens by 24H volume</p>
          </div>

          <div className="px-3 pb-3 flex flex-col gap-2">
            {allTokens.map((token) => (
              <button
                key={token.symbol}
                className={cn(
                  "flex items-center gap-2 p-2 rounded-lg",
                  "hover:bg-accent cursor-pointer"
                )}
                onClick={() => handleSelectToken(token.symbol)}
              >
                <div className="flex-shrink-0 size-10">
                  <TokenIcon
                    symbol={token.symbol.toLowerCase()}
                    className="size-10 rounded-full"
                    variant="background"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <h1 className="font-lg font-medium">{token.name}</h1>
                  <div className="flex gap-2 text-muted-foreground text-sm">
                    <p>{token.symbol}</p>
                    <p className="text-muted-foreground/80">{token.address}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

const TokenSelector = () => {
  const [selectedToken, setSelectedToken] = useState("ZRX");

  return (
    <div className="flex justify-center items-center">
      <TokenSelectorModal onSelectToken={setSelectedToken}>
        <button className="flex items-center gap-2 px-3 py-2 bg-transparent border rounded-xl">
          <TokenIcon
            symbol={selectedToken.toLowerCase()}
            className="size-6 rounded-full"
            variant="background"
          />
          <span className="text-sm">{selectedToken}</span>
          <ChevronDown className="size-4 opacity-60" />
        </button>
      </TokenSelectorModal>
    </div>
  );
};

export default TokenSelector;
