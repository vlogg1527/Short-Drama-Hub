import Link from "next/link";
import { Clapperboard, Search, WandSparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-[#4B0082] text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Clapperboard className="h-8 w-8 text-accent" />
            <h1 className="text-2xl font-headline font-bold text-white tracking-wider">
              Short Drama Hub
            </h1>
          </Link>

          <div className="hidden md:flex items-center gap-4 flex-1 max-w-md">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for dramas..."
                className="pl-10 bg-primary-foreground/10 text-white placeholder:text-muted-foreground border-accent/50 focus:bg-primary-foreground/20"
              />
            </div>
          </div>

          <nav className="flex items-center gap-2 sm:gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex text-white hover:bg-white/10" asChild>
                <Link href="/generate">
                    <WandSparkles className="mr-2 h-4 w-4" />
                    AI Tagline Generator
                </Link>
            </Button>
             <Button variant="ghost" size="icon" className="sm:hidden text-white hover:bg-white/10" asChild>
                <Link href="/generate" aria-label="AI Tagline Generator">
                    <WandSparkles className="h-5 w-5" />
                </Link>
            </Button>
            <Button variant="ghost" size="icon" className="sm:hidden text-white hover:bg-white/10" aria-label="Search">
                <Search className="h-5 w-5" />
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
