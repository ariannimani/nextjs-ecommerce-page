import Image from "next/image";
import React, { FC } from "react";

import { kilobytesToMegabytes } from "@/utils/utils";

import { Dimensions, Recommendation } from "@/types";

interface DetailsProps {
  name: string;
  description: string;
  recommendations: Recommendation[];
  dimensions: Dimensions;
  size: number;
}
const Details: FC<DetailsProps> = ({
  name,
  description,
  recommendations,
  dimensions,
  size,
}) => {
  return (
    <div className="md:flex justify-between">
      <div className="md:w-1/2">
        <div className="font-bold text-[22px]">About {name}</div>
        <div className="text text-stone-500 max-w-[1290px] mt-8">
          {description}
        </div>
      </div>
      <div>
        <div className="md:w-fit">
          <div className="font-bold	text-[22px] md:text-right md:mb-5">
            People also buy
          </div>
          <div className="flex gap-3 md:gap-6">
            {recommendations.map((item: any) => (
              <Image
                key={item.src}
                src={item.src}
                alt={item.alt}
                width={750}
                height={1260}
                className="w-24 h-auto object-cover"
              />
            ))}
          </div>
        </div>
        <div>
          <div className="font-bold	text-[22px] md:text-right md:mt-5">
            Details
          </div>
          <div className="text-stone-500 md:text-right">
            <div className="md:mt-2">
              Size: {dimensions?.width} x {dimensions?.height} pixel
            </div>
            <div className="md:mt-2">Size: {kilobytesToMegabytes(size)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;