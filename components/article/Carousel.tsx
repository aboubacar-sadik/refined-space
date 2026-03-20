"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Progress } from "../ui/progress";
import { GET_RECENT_ARTICLES_QUERYResult } from "@/sanity.types";

interface CarouselImageProps {
  images: ({
    alt: string | null;
    url: string | null;
  } | null)[];
}
export default function CarouselWithProgress({ images }: CarouselImageProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const validImages = (images ?? []).filter(Boolean) as {
    alt: string | null;
    url: string | null;
  }[];

  const showControls = validImages.length > 1;
  const progress = count > 0 ? (current * 100) / count : 0;

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto py-4">
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          {validImages.map((image, index) => (
            <CarouselItem key={`${image?.url ?? ""}-${index}`}>
              <div className="mt-8 md:mt-12">
                <figure className="relative">
                  <Image
                    src={`${image?.url}`}
                    alt={`${image?.alt || "Article feature image"}`}
                    width={3741} /* Add the actual original width here */
                    height={2498} /* Add the actual original height here */
                    loading="lazy"
                    className="w-full h-auto max-h-150 object-cover rounded-sm"
                  />
                </figure>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {showControls && (
          <>
            <CarouselPrevious className="top-[calc(100%+0.5rem)] left-0 translate-y-0" />
            <CarouselNext className="top-[calc(100%+0.5rem)] left-2 translate-x-full translate-y-0" />
          </>
        )}
      </Carousel>
      {showControls && (
        <Progress className="mt-5 ml-auto w-24" value={progress} />
      )}
    </div>
  );
}
