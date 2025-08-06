// src/app/blog/page.tsx
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BlogCard } from "@/components/blog-card";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - NetShorts',
  description: 'Latest news and updates from the world of short dramas.',
};

const blogPosts = [
  {
    id: 1,
    category: "Industry News",
    title: "The Rise of Short Dramas in Southeast Asia",
    author: "Jane Doe",
    date: "July 26, 2024",
    snippet: "Short dramas are quickly becoming the go-to entertainment for millions. Let's explore why this format is capturing hearts across the region.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "mobile phone screen",
    url: "/blog/1",
  },
  {
    id: 2,
    category: "Behind the Scenes",
    title: "Crafting Compelling Stories in Under 5 Minutes",
    author: "John Smith",
    date: "July 22, 2024",
    snippet: "Our top writers share their secrets on how to create impactful narratives that resonate with viewers in just a few minutes.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "writing screenplay",
    url: "/blog/2",
  },
  {
    id: 3,
    category: "Spotlight",
    title: "Director Spotlight: The Visionary Behind 'Echoes of Eternity'",
    author: "Emily White",
    date: "July 18, 2024",
    snippet: "An exclusive interview with the director of the hit short drama, discussing the challenges and triumphs of bringing the story to life.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "film director chair",
    url: "/blog/3",
  },
   {
    id: 4,
    category: "Tech",
    title: "How AI is Revolutionizing Short Drama Production",
    author: "Alex Johnson",
    date: "July 15, 2024",
    snippet: "From script generation to automated editing, AI is changing the game for content creators. We dive into the latest technologies.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "artificial intelligence brain",
    url: "/blog/4",
  },
  {
    id: 5,
    category: "Community",
    title: "Top 5 Fan Favorite Dramas of the Month",
    author: "Chris Lee",
    date: "July 12, 2024",
    snippet: "The votes are in! Find out which short dramas topped the charts this month and what makes them so special, according to our viewers.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "movie award",
    url: "/blog/5",
  },
  {
    id: 6,
    category: "Tips & Tricks",
    title: "How to Get Started with Your First Short Drama",
    author: "Maria Garcia",
    date: "July 8, 2024",
    snippet: "Dreaming of creating your own short drama? Our guide for beginners will walk you through everything you need to know.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "video camera",
    url: "/blog/6",
  },
];


export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-white">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-2">Our Blog</h1>
            <p className="text-lg text-muted-foreground">Latest news and updates</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
