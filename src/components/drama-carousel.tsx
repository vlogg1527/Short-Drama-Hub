import type { Drama } from "@/lib/data";
import { DramaCard } from "./drama-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface DramaCarouselProps {
  title: string;
  dramas: Drama[];
}

export function DramaCarousel({ title, dramas }: DramaCarouselProps) {
  return (
    <section className="my-8">
      <h2 className="text-xl font-bold mb-4 text-white">{title}</h2>
      <Carousel
        opts={{
          align: "start",
          dragFree: true,
          slidesToScroll: 'auto',
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {dramas.map((drama) => (
            <CarouselItem key={drama.id} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/7 2xl:basis-1/8">
              <DramaCard drama={drama} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-white bg-black/50 hover:bg-primary -left-4" />
        <CarouselNext className="text-white bg-black/50 hover:bg-primary -right-4" />
      </Carousel>
    </section>
  );
}
