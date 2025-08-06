// src/app/series/page.tsx
'use client';

import { useState } from 'react';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DramaCard } from "@/components/drama-card";
import { dramas } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";

const genres = [
    "เรื่องย่อทั้งหมด", "ซีอีโอ", "ซาตานและมาโซคิสม์", "เข้าใจกันผิด", "ตัวละครน่าทึ่งที่แข็งแกร่ง",
    "ซาตานผู้ยิ่งใหญ่", "แต่งงานสายฟ้าแลบ", "พลิกชีวิตจากศูนย์", "ตัวเอกชายเดียวดาย", "สั้น",
    "รักประชดประชัน", "ละครเศร้าน้ำตา", "เจ้าแห่งสงคราม", "เติบโต", "พลังพิเศษ", "เกิดใหม่", "กีฬา",
    "ผู้หญิงแกร่ง", "เด็กน่ารัก", "พบกันใหม่", "คนจน", "นคร", "รักต่างวัย", "เศรษฐี", "ความรักที่แสนหวาน",
    "นักเลง", "ตัวตนลับ", "สามีแต่งเข้า", "ได้กลับ", "หย่าแล้วค่อยตามง้อ", "ครอบครัว", "เยียวยาหัวใจ",
    "นางอ่อนโยน", "รักข้ามคืน", "สามีสายเปย์", "สมัยใหม่", "โชคชะตา", "วันสิ้นโลก", "แต่งก่อนรักทีหลัง",
    "เชฟ", "นอกใจ", "เทพการแพทย์", "ผู้ชายอบอุ่น", "ตั้งครรภ์", "การสมรสของตระกูลใหญ่", "ความจำเสื่อม",
    "รักบังคับ", "แก้แค้นคนเลว"
];

const INITIAL_GENRES_COUNT = 27;

export default function SeriesPage() {
  const allDramas = [...dramas, ...dramas, ...dramas.slice(0, 6)];
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedGenres = isExpanded ? genres : genres.slice(0, INITIAL_GENRES_COUNT);

  return (
    <div className="flex flex-col min-h-screen bg-background text-white">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-8">
          <div className="text-sm text-muted-foreground mb-4">
            <span>หน้าหลัก</span>
            <ChevronRight className="inline-block mx-1 h-4 w-4" />
            <span>ซีรีส์</span>
          </div>
          <h1 className="text-3xl font-bold mb-6">ซีรีส์ทั้งหมด</h1>
          
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {displayedGenres.map((genre, index) => (
              <Button 
                key={genre} 
                variant={index === 0 ? 'destructive' : 'secondary'}
                className="rounded-full text-sm font-normal"
              >
                {genre}
              </Button>
            ))}
             <Button variant="secondary" size="icon" className="rounded-full" onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-8">
            {allDramas.map((drama, index) => (
              <DramaCard key={`${drama.id}-${index}`} drama={drama} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
