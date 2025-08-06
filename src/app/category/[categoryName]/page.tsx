// src/app/category/[categoryName]/page.tsx
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DramaCard } from "@/components/drama-card";
import { dramas } from "@/lib/data";
import { ChevronRight } from "lucide-react";
import type { Metadata } from 'next';

type CategoryPageProps = {
  params: { categoryName: string };
};

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categoryName = decodeURIComponent(params.categoryName);
  return {
    title: `ซีรีส์: ${categoryName} - NetShorts`,
    description: `รับชมละครสั้นในหมวดหมู่ ${categoryName}`,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = decodeURIComponent(params.categoryName);
  
  const filteredDramas = dramas.filter(drama => 
    categoryName === 'เรื่องย่อทั้งหมด' || drama.genre === categoryName
  );

  return (
    <div className="flex flex-col min-h-screen bg-background text-white">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-8">
          <div className="text-sm text-muted-foreground mb-4">
            <span>หน้าหลัก</span>
            <ChevronRight className="inline-block mx-1 h-4 w-4" />
            <span>ซีรีส์</span>
            <ChevronRight className="inline-block mx-1 h-4 w-4" />
            <span>{categoryName}</span>
          </div>
          <h1 className="text-3xl font-bold mb-6">ซีรีส์: {categoryName}</h1>

          {filteredDramas.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-8">
              {filteredDramas.map((drama, index) => (
                <DramaCard key={`${drama.id}-${index}`} drama={drama} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground mt-12">ไม่พบซีรีส์ในหมวดหมู่นี้</p>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
