import Image from 'next/image';
import type {Drama} from '@/lib/data';
import Link from 'next/link';
import {Card, CardContent} from '@/components/ui/card';
import {Button} from './ui/button';
import {PlayIcon, Share2} from 'lucide-react';

interface DramaCardProps {
  drama: Drama;
}

export function DramaCard({drama}: DramaCardProps) {
  return (
    <Link href={drama.url} className="block group">
      <Card className="bg-transparent border-none shadow-none rounded-lg overflow-hidden transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-2xl">
        <div className="aspect-[2/3] relative rounded-lg overflow-hidden">
          <Image
            src={drama.coverArt}
            alt={`Cover art for ${drama.title}`}
            fill
            className="object-cover transition-transform duration-300"
            data-ai-hint={drama.dataAiHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2">
            <h3 className="font-bold text-white text-lg truncate">
              {drama.title}
            </h3>
            <div className="flex items-center gap-2">
              <Button
                asChild
                size="sm"
                className="flex-1 bg-primary hover:bg-primary/90 rounded-md text-sm"
              >
                <Link href={drama.url}>
                  <PlayIcon className="mr-2 h-4 w-4" />
                  เล่นตอนนี้
                </Link>
              </Button>
              <Button
                size="icon"
                variant="secondary"
                className="bg-white/20 hover:bg-white/30 text-white rounded-md h-9 w-9"
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <CardContent className="p-2 group-hover:opacity-0 transition-opacity duration-300">
          <h3 className="font-semibold text-white truncate">{drama.title}</h3>
          <p className="text-sm text-muted-foreground">{drama.genre}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
