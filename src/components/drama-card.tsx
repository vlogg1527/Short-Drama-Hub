import Image from "next/image";
import type { Drama } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

interface DramaCardProps {
  drama: Drama;
}

export function DramaCard({ drama }: DramaCardProps) {
  return (
    <Link href={drama.url} target="_blank" rel="noopener noreferrer" className="block group">
      <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-accent/20 hover:border-accent/50 hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="aspect-[2/3] relative">
            <Image
              src={drama.coverArt}
              alt={`Cover art for ${drama.title}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={drama.dataAiHint}
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="font-headline text-lg text-accent mb-2 truncate group-hover:text-primary">
            {drama.title}
          </CardTitle>
          <CardDescription className="line-clamp-3 text-sm">
            {drama.description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
