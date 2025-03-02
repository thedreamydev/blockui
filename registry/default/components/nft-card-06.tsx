import Image from "next/image";
import { Clock, Heart } from "lucide-react";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const NFTCard06 = () => {
  return (
    <Card className="group relative overflow-hidden rounded-3xl max-w-[300px] w-full mx-auto border-0 transition-all duration-300 hover:shadow-xl">
      {/* Frosted Glass Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 z-0"></div>

      {/* NFT Image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src="/images/nft-04.jpg"
          alt="NFT"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110 z-0"
        />
      </div>

      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 z-10">
        <div className="flex h-8 items-center gap-2 rounded-full bg-white/20 px-3 backdrop-blur-md">
          <Clock className="h-4 w-4 text-white/70" />
          <span className="text-xs font-medium text-white">3d 12h 24m</span>
        </div>

        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-colors hover:bg-white/30">
          <Heart className="h-4 w-4 text-white" />
        </button>
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <div className="mt-3 rounded-2xl bg-white/20 p-3 backdrop-blur-md flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold text-white">Ape #9839</h3>
            <p className="text-xs font-medium text-white/80">
              By Shoaib Sayyed
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-lg font-bold text-white">12.75 ETH</p>
            <p className="text-xs font-medium text-white/80">Current Price</p>
          </div>
        </div>

        {/* Sliding Action Panel - visible on hover */}
        <div className="absolute -bottom-full left-0 right-0 flex flex-col gap-3 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 backdrop-blur-md transition-all duration-300 group-hover:bottom-0 z-20">
          <Button className="w-full rounded-xl bg-white py-2.5 text-black hover:bg-white/90">
            Place a Bid
          </Button>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8 border border-white/20">
                <Image
                  src="/images/avatar-04.jpg"
                  alt="Shoaib Sayyed"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
              </Avatar>
              <div>
                <p className="text-xs text-white/70">Creator</p>
                <p className="text-sm font-medium text-white">Shoaib Sayyed</p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-xs text-white/70">Followers</p>
              <p className="text-sm font-medium text-white">12k</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default NFTCard06;
