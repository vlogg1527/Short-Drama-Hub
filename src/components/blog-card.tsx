// src/components/blog-card.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, User, Calendar } from 'lucide-react';

interface BlogPost {
  id: number;
  category: string;
  title: string;
  author: string;
  date: string;
  snippet: string;
  imageUrl: string;
  dataAiHint: string;
  url: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="bg-[#1C1C1C] border-gray-800 flex flex-col overflow-hidden h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
      <CardHeader className="p-0">
        <div className="relative aspect-[16/9]">
          <Image
            src={post.imageUrl}
            alt={`Image for ${post.title}`}
            fill
            className="object-cover"
            data-ai-hint={post.dataAiHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <Badge variant="secondary" className="mb-2 bg-primary/20 text-primary border-none">{post.category}</Badge>
        <CardTitle className="text-lg font-bold text-white mb-3 line-clamp-2">
            <Link href={post.url} className="hover:text-primary transition-colors">
              {post.title}
            </Link>
        </CardTitle>
        <div className="flex items-center text-xs text-muted-foreground mb-4 space-x-4">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
        </div>
        <p className="text-sm text-gray-400 line-clamp-3">
          {post.snippet}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="link" className="p-0 text-primary">
          <Link href={post.url}>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
