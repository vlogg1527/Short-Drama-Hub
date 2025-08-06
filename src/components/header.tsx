import Link from "next/link";
import { PlayCircle, Search, ChevronDown, Globe } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm text-primary-foreground sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <PlayCircle className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-headline font-bold text-white tracking-wider">
                NetShorts
              </h1>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link href="#" className="text-white hover:text-primary transition-colors">หน้าหลัก</Link>
              <Link href="#" className="text-white hover:text-primary transition-colors">ซีรีส์</Link>
              <Link href="#" className="text-white hover:text-primary transition-colors">ดาวน์โหลด</Link>
              <Link href="#" className="text-white hover:text-primary transition-colors">ข้อมูล</Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="ค้นหา"
                className="pl-10 w-64 bg-secondary text-white placeholder:text-muted-foreground rounded-full border-transparent focus:bg-secondary/80 focus:ring-primary/50"
              />
            </div>
             <Button variant="ghost" className="hidden sm:inline-flex text-white hover:bg-secondary/80 hover:text-white">
                <Globe className="mr-2 h-4 w-4" />
                ภาษาไทย
                <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
