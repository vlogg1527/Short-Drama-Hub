// src/app/series/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DramaCard } from "@/components/drama-card";
import { dramas } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const genres = [
    "เรื่องย่อทั้งหมด", "ซีอีโอ", "ซาตานและมาโซคิสม์", "เข้าใจกันผิด", "ตัวละครน่าทึ่งที่แข็งแกร่ง",
    "ซาตานผู้ยิ่งใหญ่", "แต่งงานสายฟ้าแลบ", "พลิกชีวิตจากศูนย์", "ตัวเอกชายเดียวดาย", "สั้น",
    "รักประชดประชัน", "ละครเศร้าน้ำตา", "เจ้าแห่งสงคราม", "เติบโต", "พลังพิเศษ", "เกิดใหม่", "กีฬา",
    "ผู้หญิงแกร่ง", "เด็กน่ารัก", "พบกันใหม่", "คนจน", "นคร", "รักต่างวัย", "เศรษฐี", "ความรักที่แสนหวาน",
    "นักเลง", "ตัวตนลับ", "สามีแต่งเข้า", "ได้กลับ", "หย่าแล้วค่อยตามง้อ", "ครอบครัว", "เยียวยาหัวใจ",
    "นางอ่อนโยน", "รักข้ามคืน", "สามีสายเปย์", "สมัยใหม่", "โชคชะตา", "วันสิ้นโลก", "แต่งก่อนรักทีหลัง",
    "เชฟ", "นอกใจ", "เทพการแพทย์", "ผู้ชายอบอุ่น", "ตั้งครรภ์", "การสมรสของตระกูลใหญ่", "ความจำเสื่อm",
    "รักบังคับ", "แก้แค้นคนเลว", "Romance", "Action", "Comedy", "Thriller", "Fantasy", "Historical"
];

const INITIAL_GENRES_COUNT = 27;
const DRAMAS_PER_PAGE = 18; // 3 items per row, 6 rows

export default function SeriesPage() {
  const allDramas = [...dramas, ...dramas, ...dramas.slice(0, 6)]; // Total 12 + 12 + 6 = 30 dramas for demo
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('เรื่องย่อทั้งหมด');
  const [currentPage, setCurrentPage] = useState(1);

  const displayedGenres = isExpanded ? genres : genres.slice(0, INITIAL_GENRES_COUNT);
  
  const handleGenreClick = (genre: string) => {
    setSelectedGenre(genre);
    setCurrentPage(1); // Reset to first page on genre change
  };

  const filteredDramas = allDramas.filter(drama => 
    selectedGenre === 'เรื่องย่อทั้งหมด' || drama.genre === selectedGenre
  );

  const totalPages = Math.ceil(filteredDramas.length / DRAMAS_PER_PAGE);
  const paginatedDramas = filteredDramas.slice(
    (currentPage - 1) * DRAMAS_PER_PAGE,
    currentPage * DRAMAS_PER_PAGE
  );

  const renderPagination = () => {
    const pageNumbers = [];
    const maxPagesToShow = 6;
    
    if (totalPages <= maxPagesToShow + 1) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      let startPage, endPage;
      if (currentPage <= 4) {
        startPage = 1;
        endPage = maxPagesToShow;
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - (maxPagesToShow - 1);
        endPage = totalPages;
      } else {
        startPage = currentPage - 3;
        endPage = currentPage + 2;
      }

      if (startPage > 1) {
          pageNumbers.push(1);
          if(startPage > 2) pageNumbers.push('...');
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages) {
         if(endPage < totalPages-1) pageNumbers.push('...');
         pageNumbers.push(totalPages);
      }
    }


    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(p => Math.max(1, p - 1))}} />
          </PaginationItem>
           {pageNumbers.map((num, index) => (
             <PaginationItem key={index}>
               {typeof num === 'number' ? (
                <PaginationLink href="#" isActive={currentPage === num} onClick={(e) => { e.preventDefault(); setCurrentPage(num)}}>
                  {num}
                </PaginationLink>
               ) : (
                <PaginationEllipsis />
               )}
            </PaginationItem>
           ))}
          <PaginationItem>
            <PaginationNext href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(p => Math.min(totalPages, p + 1))}}/>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  };


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
            {displayedGenres.map((genre) => (
                <Button 
                    key={genre} 
                    variant={selectedGenre === genre ? 'destructive' : 'secondary'}
                    size="sm"
                    className="rounded-full text-xs font-normal h-auto px-3 py-1.5"
                    onClick={() => handleGenreClick(genre)}
                >
                  {genre}
                </Button>
            ))}
             <Button variant="secondary" size="icon" className="rounded-full h-8 w-8" onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-8">
            {paginatedDramas.map((drama, index) => (
              <DramaCard key={`${drama.id}-${index}`} drama={drama} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            {renderPagination()}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
