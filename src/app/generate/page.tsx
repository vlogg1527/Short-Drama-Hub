import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GeneratePage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">Page not available</h1>
        <p className="text-muted-foreground mb-8">This page was removed in the new design.</p>
        <Button asChild>
            <Link href="/">Return to Home</Link>
        </Button>
    </div>
  );
}
