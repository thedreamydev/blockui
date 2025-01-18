"use client";

import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCopy } from "@/registry/default/hooks/use-copy";
import { shortenAddress } from "@/registry/default/lib/utils";

const WalletAddress01 = () => {
  const { copied, copy } = useCopy();

  const address = "0x1F6Ac473bfE26A84AcF4e255156B7816245b17aa";
  const shortenedAddress = shortenAddress(address);

  return (
    <div>
      {shortenedAddress}

      <Button variant="ghost" onClick={() => copy(address)}>
        {copied ? <Check /> : <Copy />}
      </Button>
    </div>
  );
};

export default WalletAddress01;
