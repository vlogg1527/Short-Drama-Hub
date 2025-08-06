import Image from "next/image";
import type { Drama } from "@/lib/data";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

interface DramaCardProps {
  drama: Drama;
}

export function DramaCard({ drama }: DramaCardProps) {
  return (
    <Link href={drama.url} target="_blank" rel="noopener noreferrer" className="block group">
      <Card className="bg-transparent border-none shadow-none rounded-lg overflow-hidden transition-all duration-300 ease-in-out">
        <div className="aspect-[2/3] relative rounded-lg overflow-hidden">
          <Image
            src={drama.coverArt}
            alt={`Cover art for ${drama.title}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={drama.dataAiHint}
          />
        </div>
        <CardContent className="p-2">
          <h3 className="font-semibold text-white truncate group-hover:text-primary">
            {drama.title}
          </h3>
          <p className="text-sm text-muted-foreground">{drama.genre}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
