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
    <section className="my-12">
      <h2 className="text-3xl font-headline font-bold mb-6 text-accent">{title}</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {dramas.map((drama) => (
            <CarouselItem key={drama.id} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
              <DramaCard drama={drama} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-foreground" />
        <CarouselNext className="text-foreground" />
      </Carousel>
    </section>
  );
}
