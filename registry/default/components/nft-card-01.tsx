import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const NFTCard01 = () => {
  return (
    <Card className="w-[300px] p-2 relative group">
      <div className="relative mb-3 w-[282px] h-[282px] rounded-lg overflow-hidden">
        {/* NFT Image */}
        <Image
          src="/images/nft-01.png"
          width={282}
          height={282}
          alt="NFT"
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />

        {/* Add To Favorite Button */}
        <Button size="icon" className="absolute top-2 right-2 rounded-full">
          <Heart />
        </Button>
      </div>

      <div className="px-2 mb-3 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            {/* NFT Title */}
            <h1 className="text-lg font-bold text-card-foreground">
              Abstract #4192
            </h1>

            {/* NFT Owner */}
            <p className="text-sm font-medium text-muted-foreground">
              By Shoaib Sayyed
            </p>
          </div>

          {/* Avatar Group */}
          <div className="flex h-8 flex-row-reverse">
            <Image
              className="rounded-full z-10 -mr-2 ring-2 ring-background object-cover"
              src="/images/avatar-01.jpg"
              width={32}
              height={32}
              alt="Avatar 01"
            />
            <Image
              className="rounded-full z-10 -mr-3 ring-2 ring-background object-cover"
              src="/images/avatar-02.jpg"
              width={32}
              height={32}
              alt="Avatar 02"
            />
            <Image
              className="rounded-full z-10 -mr-3 ring-2 ring-background object-cover"
              src="/images/avatar-03.jpg"
              width={32}
              height={32}
              alt="Avatar 03"
            />
            <Image
              className="rounded-full z-10 -mr-3 ring-2 ring-background object-cover"
              src="/images/avatar-04.jpg"
              width={32}
              height={32}
              alt="Avatar 04"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          {/* Current Bid */}
          <p className="text-sm font-bold  text-card-foreground">
            Current Bid: 0.91 <span>ETH</span>
          </p>

          {/* Place Bid Button */}
          <Button>Place Bid</Button>
        </div>
      </div>
    </Card>
  );
};

export default NFTCard01;
