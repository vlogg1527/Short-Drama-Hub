import Link from "next/link";
import { PlayCircle, Search, Menu, X, Home, Film, Download, Info, ChevronDown, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";


export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm text-primary-foreground sticky top-0 z-50 border-b border-gray-800">
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
              <Link href="/" className="text-white hover:text-primary transition-colors">หน้าหลัก</Link>
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
             <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hidden md:flex items-center gap-2 text-white">
                  <User className="h-5 w-5"/>
                  บัญชีไทย
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>โปรไฟล์</DropdownMenuItem>
                <DropdownMenuItem>การตั้งค่า</DropdownMenuItem>
                <DropdownMenuItem>ออกจากระบบ</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-background border-l border-secondary w-[250px] p-0">
                    <div className="p-4 flex justify-between items-center border-b border-secondary">
                        <Link href="/" className="flex items-center gap-2">
                            <PlayCircle className="h-8 w-8 text-primary" />
                            <h1 className="text-xl font-headline font-bold text-white tracking-wider">
                                NetShorts
                            </h1>
                        </Link>
                        <SheetClose asChild>
                             <Button variant="ghost" size="icon">
                                <X className="h-6 w-6" />
                            </Button>
                        </SheetClose>
                    </div>
                    <nav className="flex flex-col p-4 gap-2">
                         <SheetClose asChild>
                            <Button asChild variant="ghost" className="justify-start text-lg gap-4">
                               <Link href="#"><Home /> หน้าหลัก</Link>
                            </Button>
                        </SheetClose>
                        <SheetClose asChild>
                            <Button asChild variant="ghost" className="justify-start text-lg gap-4">
                                <Link href="#"><Film /> ซีรีส์</Link>
                            </Button>
                        </SheetClose>
                        <SheetClose asChild>
                            <Button asChild variant="ghost" className="justify-start text-lg gap-4">
                               <Link href="#"><Download /> ดาวน์โหลด</Link>
                            </Button>
                        </SheetClose>
                        <SheetClose asChild>
                            <Button asChild variant="ghost" className="justify-start text-lg gap-4">
                                <Link href="#"><Info /> ข้อมูล</Link>
                            </Button>
                        </SheetClose>
                    </nav>
                    <div className="p-4 absolute bottom-0 w-full">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="ค้นหา"
                                className="pl-10 w-full bg-secondary text-white placeholder:text-muted-foreground rounded-full border-transparent focus:bg-secondary/80 focus:ring-primary/50"
                            />
                        </div>
                    </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
