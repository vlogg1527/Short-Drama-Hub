"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12.52.02C13.84 0 15.14.01 16.44 0a5 5 0 0 1 4.33 4.51c.02 1.25.02 2.5.02 3.75v.02c0 2.87-.27 5.66-1.65 8.12a9 9 0 1 1-11.23-9.52v5.77a.26.26 0 0 0 .26.26c.2 0 .4-.02.6-.02a2.89 2.89 0 0 0 2.89-2.89V6.74a2.92 2.92 0 0 0-2.92-2.92h-.24a.27.27 0 0 0-.25.26c-.01.81-.01 1.63-.01 2.45v.02c0 2.08.33 4.1.92 6.02a11.83 11.83 0 0 0 10.56-1.12 7.74 7.74 0 0 0 3.9-6.38c.08-1.74.1-3.48.1-5.22V5.5a7.7 7.7 0 0 0-7.7-7.7c-2.18 0-4.36 0-6.54.01a.26.26 0 0 0-.26.26v5.27a.26.26 0 0 0 .26.26c.83 0 1.66-.02 2.49-.02Z"/>
    </svg>
  );

export function Footer() {
    return (
        <footer className="bg-[#1C1C1C] text-muted-foreground py-12">
            <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative">
                <div className="col-span-1">
                <h3 className="font-bold text-white mb-4">เกี่ยวกับ</h3>
                <ul className="space-y-2 text-sm">
                    <li><Link href="/terms" className="hover:text-primary transition-colors">เงื่อนไขการให้บริการ</Link></li>
                    <li><Link href="/privacy" className="hover:text-primary transition-colors">นโยบายความเป็นส่วนตัว</Link></li>
                    <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                </ul>
                </div>
                <div className="col-span-1">
                <h3 className="font-bold text-white mb-4">ติดต่อเรา</h3>
                <ul className="space-y-2 text-sm">
                    <li><a href="mailto:support@netshort.com" className="hover:text-primary transition-colors">support@netshort.com</a></li>
                    <li><a href="mailto:business@netshort.com" className="hover:text-primary transition-colors">business@netshort.com</a></li>
                </ul>
                </div>
                <div className="col-span-1">
                    <h3 className="font-bold text-white mb-4">ชุมชน</h3>
                    <div className="flex space-x-4">
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={24} /></Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={24} /></Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Youtube size={24} /></Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><TikTokIcon className="h-6 w-6" /></Link>
                    </div>
                </div>
                <div className="col-span-1">
                <h3 className="font-bold text-white mb-4">ซีรีส์</h3>
                <ul className="space-y-2 text-sm">
                    <li><Link href="#" className="hover:text-primary transition-colors">ซีรีส์</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">ชาติ</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">เข้าใจผิด</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">ตามหาญาติ</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">คืนดี</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">ดราม่าสุดฮอต</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">ซีรีส์ยอดนิยม</Link></li>
                </ul>
                </div>
                <div className="col-span-2 lg:col-span-2 flex flex-col items-start lg:items-center">
                <h3 className="font-bold text-white mb-4">ดาวน์โหลดแอป</h3>
                <div className="flex items-center gap-4">
                    <Image src="https://placehold.co/128x128.png" alt="QR Code" width={110} height={110} className="rounded-lg" data-ai-hint="qr code"/>
                </div>
                </div>
                <div className="absolute -top-4 right-0">
                    <Button size="icon" className="rounded-full bg-primary h-12 w-12" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <ArrowUp className="h-6 w-6"/>
                    </Button>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm">
                <p>NetShort | All Rights Reserved | 2024 NETSTORY PTE. LTD.</p>
            </div>
            </div>
      </footer>
    );
}
