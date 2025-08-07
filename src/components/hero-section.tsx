
"use client"

import * as React from 'react'
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay"
import { dramas } from '@/lib/data';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { PlayIcon } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselDots } from "@/components/ui/carousel";
import Link from 'next/link';

export function HeroSection() {
    const heroDramas = dramas.slice(0, 5);

    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    )

  return (
    <>
      <Carousel
          plugins={[plugin.current]}
          className="relative w-full text-white"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
      >
          <CarouselContent>
              {heroDramas.map((drama) => (
                  <CarouselItem key={drama.id}>
                      {/* Desktop View */}
                      <div className="hidden md:block relative h-[80vh] min-h-[500px] w-full">
                          <Image
                              src={drama.coverArt.replace('300x450', '1920x1080')}
                              alt={`Background for ${drama.title}`}
                              fill
                              className="object-cover object-center"
                              data-ai-hint={drama.dataAiHint}
                              priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent opacity-80" />

                          <div className="relative z-10 flex h-full items-center">
                              <div className="container mx-auto px-4">
                                  <div className="max-w-2xl md:ml-8">
                                      <h1 className="text-4xl md:text-6xl font-headline font-bold text-white drop-shadow-lg mb-4 animate-fade-in-down">
                                          {drama.title}
                                      </h1>
                                      <div className="flex items-center gap-4 mb-6 animate-fade-in-up">
                                          <Badge variant="destructive" className="bg-primary border-none text-sm font-bold">HOT</Badge>
                                          <p className="font-semibold">{drama.genre}</p>
                                      </div>
                                      <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-md px-6 md:px-8 py-4 md:py-6 text-base md:text-lg animate-fade-in-up animation-delay-200">
                                          <Link href={drama.url}>
                                              <PlayIcon className="mr-2 h-5 w-5 fill-white" />
                                              เล่นตอนนี้
                                          </Link>
                                      </Button>
                                  </div>
                              </div>
                          </div>
                      </div>

                      {/* Mobile View */}
                      <div className="md:hidden relative w-full text-white">
                          <div className="relative h-[60vh] min-h-[450px] w-full">
                              <Image
                                  src={drama.coverArt.replace('300x450', '800x1200')}
                                  alt={`Background for ${drama.title}`}
                                  fill
                                  className="object-cover object-top"
                                  data-ai-hint={drama.dataAiHint}
                                  priority
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-background via-black/30 to-transparent" />
                              
                              <div className="absolute z-10 flex h-full items-end pb-20 w-full">
                                  <div className="container mx-auto px-4 text-center w-full">
                                      <div className="flex flex-col items-center">
                                          <div className="relative">
                                            <h1 className="text-4xl font-headline font-bold text-white drop-shadow-lg mb-2">
                                                {drama.title}
                                            </h1>
                                             <div className="absolute -top-6 -right-12">
                                                <Badge variant="secondary" className="bg-gradient-to-r from-pink-500 to-orange-400 border-none text-white text-xs px-2 py-1">EXCLUSIVE</Badge>
                                             </div>
                                          </div>
                                          
                                          <div className="flex items-center gap-2 mb-4">
                                              <p className="font-semibold text-sm">{drama.genre}</p>
                                              <Badge variant="destructive" className="bg-primary border-none text-xs font-bold h-4 px-1">HOT</Badge>
                                          </div>
                                          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-12 py-6 text-base w-full max-w-xs">
                                              <Link href={drama.url}>
                                                  <PlayIcon className="mr-2 h-5 w-5 fill-white" />
                                                  เล่นตอนนี้
                                              </Link>
                                          </Button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </CarouselItem>
              ))}
          </CarouselContent>
        <CarouselDots className="absolute bottom-10 left-1/2 -translate-x-1/2 md:right-10 md:left-auto md:translate-x-0" />
      </Carousel>
    </>
  );
}
