import Image from 'next/image';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { PlayIcon } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative h-[80vh] min-h-[500px] w-full text-white">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Hero background"
        fill
        className="object-cover object-center"
        data-ai-hint="woman elegant dress"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent opacity-80" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl ml-8">
            <h1 className="text-6xl font-headline font-bold text-white drop-shadow-lg mb-4">
              ฟื้นชีพ ราชินีเอาคืน
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <Badge variant="destructive" className="bg-primary border-none text-sm font-bold">HOT</Badge>
              <p className="font-semibold">ฟื้นชีพ ราชินีเอาคืน</p>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-md px-8 py-6 text-lg">
              <PlayIcon className="mr-2 h-5 w-5 fill-white" />
              เล่นตอนนี้
            </Button>
          </div>
        </div>
      </div>
       <div className="absolute bottom-10 right-10 flex items-center gap-2">
            <span className="h-1 w-8 rounded-full bg-white"></span>
            <span className="h-1 w-3 rounded-full bg-white/50"></span>
            <span className="h-1 w-3 rounded-full bg-white/50"></span>
            <span className="h-1 w-3 rounded-full bg-white/50"></span>
            <span className="h-1 w-3 rounded-full bg-white/50"></span>
       </div>
    </div>
  );
}
