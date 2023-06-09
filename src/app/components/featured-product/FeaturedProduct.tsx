"use client";
import Image from "next/image";
import React, { useTransition } from "react";
import { useRouter } from "next/navigation";

import { addToCart } from "@/firebase/cartFunctions";

import { Button } from "@/app/components";
import { Details } from "./details";

const FeaturedProduct = ({ product }: any) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { name, image, details } = product;

  const addToCartHandler = () => {
    addToCart(product).then(() =>
      startTransition(() => {
        router.refresh();
      })
    );
  };

  return (
    <section className="border-b-2 group flex flex-col gap-[35px] mt-[18px]">
      <h3 className="font-bold text-3xl">{name}</h3>
      <figure className="relative">
        <Image
          src={image.src}
          alt={image.alt}
          width={details.dimensions.width}
          height={details.dimensions.height}
          className="h-fit md:h-[553px] object-cover"
          priority
        />
        <figcaption className="absolute bottom-0 left-0 px-10 py-5 bg-white text-base font-bold">
          Photo of the day
        </figcaption>
      </figure>
      <Button
        type="primary"
        title="Add to cart"
        onClick={() => addToCartHandler()}
        isLoading={isPending}
        loadingContent="ADDING"
      />
      <Details
        name={name}
        description={details.description}
        recommendations={details.recommendations}
        dimensions={details.dimensions}
        size={details.size}
      />
    </section>
  );
};

export default FeaturedProduct;
