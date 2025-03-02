import Image from "next/image";
import { Clock, DollarSign } from "lucide-react";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const NFTCard05 = () => {
  return (
    <Card className="overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg max-w-[300px] mx-auto w-full">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src="/images/nft-05.jpg"
          alt="NFT"
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute bottom-3 left-3 rounded-lg bg-background/80 px-2 py-1 backdrop-blur-sm">
          <div className="flex items-center gap-1 text-sm font-medium">
            <DollarSign className="h-3.5 w-3.5" />
            <span>0.0025 ETH</span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-card-foreground">
          Grinch Ape
        </h3>

        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
          Grumpies are a limited collection of 10 grumpy looking cute face with
          different themes and colors.
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <Image
                src="/images/avatar-04.jpg"
                alt="Shoaib Sayyed"
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
            </Avatar>
            <div>
              <p className="text-xs text-muted-foreground">Creator</p>
              <p className="text-sm font-medium text-card-foreground">
                Shoaib Sayyed
              </p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-xs text-muted-foreground">Followers</p>
            <p className="text-sm font-medium text-card-foreground">2.2k</p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1 rounded-lg bg-gray-100 px-3 py-2">
            <Clock className="h-4 w-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">
              3h 26m 45s
            </span>
          </div>

          <Button className="ml-auto rounded-lg bg-pink-500 px-4 py-2 text-white hover:bg-pink-600">
            Place a Bid
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default NFTCard05;
