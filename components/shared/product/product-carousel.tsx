"use client"

import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import Link from "next/link"

import { Product } from "@/types"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const ProductCarousel = ({ data }: { data: Product[] }) => {
  return (
    <Carousel
      className="mb-12 w-full"
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent>
        {data.map((product: Product) => (
          <CarouselItem key={product.id}>
            <Link href="/search" title="See products">
              <div className="relative mx-auto">
                <Image
                  src={product.banner!}
                  alt={product.name}
                  height="0"
                  width="0"
                  sizes="100vw"
                  className="h-40 w-full object-cover object-center md:h-80"
                />
                <div className="absolute inset-0 flex items-end justify-end p-2">
                  <h2 className="bg-opacity-50 rounded bg-gray-900 px-2 text-sm font-bold text-white md:text-lg lg:text-xl">
                    {product.name}
                  </h2>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:flex" />
      <CarouselNext className="hidden lg:flex" />
    </Carousel>
  )
}

export default ProductCarousel
