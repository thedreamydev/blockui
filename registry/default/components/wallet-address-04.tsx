"use client";

import Link from "next/link";
import {
  Check,
  Copy,
  ExternalLink,
  LogOut,
  MessageCircle,
  Settings2,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/registry/default/lib/utils";
import { useCopy } from "@/registry/default/hooks/use-copy";
import { useGradientColors } from "@/registry/default/hooks/use-gradient-colors";

const shortenAddress = (address: string = ""): string =>
  address.length > 9
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : address;

const WalletAddress03 = () => {
  const { copied, copy } = useCopy();

  const address = "0x1F6Ac473bfE26A84AcF4e255156B7816245b17aa";
  const shortenedAddress = shortenAddress(address);

  const gradientColors = useGradientColors(address);

  const renderGradientAvatar = () => (
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
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          {renderGradientAvatar()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="end">
        <DropdownMenuLabel className="flex items-center gap-4 py-3">
          <div className="flex items-center gap-2">
            {renderGradientAvatar()}

            <p className="flex items-center text-sm">{shortenedAddress}</p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="p-0 size-5 hover:bg-transparent text-muted-foreground"
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

            <Button
              variant="link"
              size="icon"
              className="p-0 size-5 hover:bg-transparent text-muted-foreground hover:text-foreground"
              asChild
            >
              <Link
                href={`https://etherscan.io/address/${address}`}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink />
              </Link>
            </Button>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <UserRound />
          <span>Accounts</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Settings2 />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <MessageCircle />
          <span>Community</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <LogOut />
          <span>Disconnect</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WalletAddress03;
