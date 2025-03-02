import Image from "next/image";
import { Plus, BadgeCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const NFTCard04 = () => {
  return (
    <Card className="w-[300px] p-2 relative group mx-auto">
      <div className="relative mb-3 w-[282px] h-[282px] rounded-lg overflow-hidden">
        {/* NFT Image */}
        <Image
          src="/images/nft-06.jpg"
          width={282}
          height={282}
          alt="NFT"
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Add To Cart & Buy Now Buttons */}
        <div className="absolute inset-0 flex items-end justify-center gap-2 p-2 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <Button className="font-medium rounded-xl">Buy Now</Button>
          <Button className="rounded-xl" size="icon">
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="flex flex-col gap-1 px-2">
            {/* NFT Owner */}
            <h3 className="text-sm text-muted-foreground font-medium flex items-center gap-1">
              <span>Shoaib</span>
              <BadgeCheck
                size={18}
                className="text-background"
                fill="rgb(254, 218, 3)"
              />
            </h3>

            {/* NFT Title */}
            <h1 className="text-base font-bold text-card-foreground">
              Ape #8306
            </h1>
          </div>
        </div>

        <div className="p-3 flex items-center gap-2 rounded-lg bg-accent h-[68px]">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-1 font-medium">
              Price
            </p>
            <p className="text-sm font-medium">2.8 ETH</p>
          </div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-1 font-medium">
              Highest bid
            </p>
            <p className="text-sm font-medium">No bids yet</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NFTCard04;
