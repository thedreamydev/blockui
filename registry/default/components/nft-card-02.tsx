import React from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const NFTCard02 = () => {
  return (
    <Card className="w-[300px] p-2 relative group mx-auto">
      <div className="relative mb-3 w-[282px] h-[282px] rounded-lg overflow-hidden">
        {/* NFT Image */}
        <Image
          src="/images/nft-02.png"
          width={282}
          height={282}
          alt="NFT"
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Add To Cart & Buy Now Buttons */}
        <div className="absolute inset-0 flex items-end justify-end gap-2 p-2 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <Button className="" size="icon">
            <ShoppingCart className="w-4 h-4" />
          </Button>

          <Button className="flex-1 font-medium">Buy Now</Button>
        </div>
      </div>

      <div className="px-2 mb-3 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            {/* NFT Title */}
            <h1 className="text-lg font-bold text-card-foreground">
              Cyborg #1937
            </h1>

            {/* NFT Owner */}
            <p className="text-sm font-medium text-muted-foreground">
              By Shoaib Sayyed
            </p>
          </div>

          {/* Current Bid */}
          <div>
            <h1 className="text-lg font-bold text-card-foreground">1.17 ETH</h1>
            <p className="text-sm font-medium text-muted-foreground">
              Current Bid
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NFTCard02;
