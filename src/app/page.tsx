import { Header } from "@/components/header";
import { DramaCarousel } from "@/components/drama-carousel";
import { dramas } from "@/lib/data";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  const trendingDramas = dramas.slice(0, 8);
  const latestDramas = dramas.slice(8).reverse();
  const chosenForYouDramas = [...dramas].sort(() => 0.5 - Math.random()).slice(0, 8);
  const specialOriginalDramas = dramas.slice(2, 10);
  const notToBeMissedDramas = dramas.slice(4, 12);


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <div className="container mx-auto px-4 py-8">
          <DramaCarousel title="มาแรงตอนนี้" dramas={trendingDramas} />
          <DramaCarousel title="อัปใหม่ล่าสุด" dramas={latestDramas} />
          <DramaCarousel title="เลือกให้แล้ว" dramas={chosenForYouDramas} />
          <DramaCarousel title="ต้นฉบับพิเศษ" dramas={specialOriginalDramas} />
          <DramaCarousel title="ห้ามพลาด!" dramas={notToBeMissedDramas} />
        </div>
      </main>
      <footer className="py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} NetShorts. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
