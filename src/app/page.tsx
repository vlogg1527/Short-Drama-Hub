import { Header } from "@/components/header";
import { DramaCarousel } from "@/components/drama-carousel";
import { Button } from "@/components/ui/button";
import { dramas, genres } from "@/lib/data";

export default function Home() {
  const trendingDramas = dramas.slice(0, 8);
  const latestDramas = dramas.slice(8).reverse();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <DramaCarousel title="Trending Now" dramas={trendingDramas} />
        
        <section className="my-12">
          <h2 className="text-3xl font-headline font-bold mb-6 text-accent">Browse by Genre</h2>
          <div className="flex flex-wrap gap-4">
            {genres.map((genre) => (
              <Button key={genre.id} variant="secondary" size="lg">
                {genre.name}
              </Button>
            ))}
          </div>
        </section>

        <DramaCarousel title="Latest Uploads" dramas={latestDramas} />
      </main>
      <footer className="bg-[#4B0082] text-primary-foreground py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Short Drama Hub. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
