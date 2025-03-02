import Image from "next/image";

import { Card } from "@/components/ui/card";

const NFTCard03 = () => {
  return (
    <Card className="w-[224px] border relative group mx-auto overflow-hidden">
      <div className="w-[224px] h-[224px] rounded-lg overflow-hidden">
        {/* NFT Image */}
        <Image
          src="/images/nft-03.jpg"
          width={224}
          height={224}
          alt="NFT"
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      <div className="p-3 flex flex-col gap-2 relative overflow-hidden">
        {/* NFT Title */}
        <h1 className="text-base font-bold text-card-foreground">Ape #5642</h1>

        {/* NFT Price */}
        <div className="flex flex-col">
          <h1 className="text-sm font-bold text-card-foreground">0.947 ETH</h1>
          <p className="text-xs font-medium text-muted-foreground">
            Last sale 1.249 ETH
          </p>
        </div>

        {/* Buy Now Button */}
        <button className="absolute bottom-0 left-0 right-0 flex justify-between bg-primary text-primary-foreground rounded-b-lg px-4 p-3 text-sm font-medium transform translate-y-full transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
          <span>Buy now</span>
          <span>0.947 ETH</span>
        </button>
      </div>
    </Card>
  );
};

export default NFTCard03;
