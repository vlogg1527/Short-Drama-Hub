import { Header } from "@/components/header";
import { GeneratorForm } from "./form";

export default function GeneratePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-headline font-bold text-accent">AI Tagline Generator</h1>
            <p className="text-muted-foreground mt-2">
              Paste in a drama summary to generate a short, catchy tagline with the power of AI.
            </p>
          </div>
          <GeneratorForm />
        </div>
      </main>
    </div>
  );
}
