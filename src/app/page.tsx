import { Header } from "@/components/header";
import { DramaCarousel } from "@/components/drama-carousel";
import { dramas } from "@/lib/data";
import { HeroSection } from "@/components/hero-section";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function AppBanner() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#252525] p-2.5 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="https://placehold.co/40x40.png" alt="App Icon" width={40} height={40} className="rounded-lg" data-ai-hint="logo icon" />
          <span className="text-white text-sm font-medium">เปิดแอป NetShort เพื่อปลดล็อกละครยอดนิยมเพิ่มเติม!</span>
        </div>
        <Button size="sm" className="bg-primary text-white rounded-md px-4">Get</Button>
      </div>
    </div>
  )
}

export default function Home() {
  const trendingDramas = dramas.slice(0, 8);
  const latestDramas = dramas.slice(8).reverse();
  const chosenForYouDramas = [...dramas].sort(() => 0.5 - Math.random()).slice(0, 8);
  const specialOriginalDramas = dramas.slice(2, 10);
  const notToBeMissedDramas = dramas.slice(4, 12);


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pb-20 md:pb-0">
        <HeroSection />
        <div className="container mx-auto px-4 py-8">
          <DramaCarousel title="มาแรงตอนนี้" dramas={trendingDramas} />
          <DramaCarousel title="อัปใหม่ล่าสุด" dramas={latestDramas} />
          <DramaCarousel title="เลือกให้แล้ว" dramas={chosenForYouDramas} />
          <DramaCarousel title="ต้นฉบับพิเศษ" dramas={specialOriginalDramas} />
          <DramaCarousel title="ห้ามพลาด!" dramas={notToBeMissedDramas} />
        </div>
      </main>
      <Footer className="hidden md:block" />
      <AppBanner />
    </div>
  );
}
