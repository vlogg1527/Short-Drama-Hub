// src/app/drama/[id]/drama-client-page.tsx
'use client';

import type { Drama } from '@/lib/data';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { DramaCarousel } from '@/components/drama-carousel';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ThumbsUp, Bookmark, ChevronUp, ChevronDown, PlayIcon, ChevronRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);
const LineIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm56-88a55.21,55.21,0,0,0-2.3-15.1,5.2,5.2,0,0,0-4.9-3.6h-21a4.12,4.12,0,0,0-3.1,1.5,13.31,13.31,0,0,0-4.7,9.1,8.36,8.36,0,0,1-8,7.5,10.21,10.21,0,0,1-7.2-2.8,33.19,33.19,0,0,0-15.8-10,5.2,5.2,0,0,0-5.8,1.4l-11,11.3a5.2,5.2,0,0,0-.4,6.6,56,56,0,0,0,32.8,32.8,5.2,5.2,0,0,0,6.6-.4l11.3-11a5.2,5.2,0,0,0,1.4-5.8,33.19,33.19,0,0,0-10-15.8,10.21,10.21,0,0,1-2.8-7.2,8.36,8.36,0,0,1,7.5-8,13.31,13.31,0,0,0,9.1-4.7,4.12,4.12,0,0,0,1.5-3.1V92.8a5.2,5.2,0,0,0-3.6-4.9A55.21,55.21,0,0,0,128,88a40,40,0,0,0,0,80,39.23,39.23,0,0,0,28.2-11.6l.2-.3a39.46,39.46,0,0,0,11.2-28.1Z"/></svg>
);
const LinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/></svg>
);

interface DramaClientPageProps {
    drama: Drama;
    recommendedDramas: Drama[];
}

export function DramaClientPage({ drama, recommendedDramas }: DramaClientPageProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const totalEpisodes = 78;
    const episodesPerPage = 30;
    const totalPages = Math.ceil(totalEpisodes / episodesPerPage);
    const episodeChunks = Array.from({ length: totalPages }, (_, pageIndex) => 
        Array.from({ length: episodesPerPage }, (_, episodeInPageIndex) => 
            pageIndex * episodesPerPage + episodeInPageIndex + 1
        ).filter(ep => ep <= totalEpisodes)
    );

    const currentEpisode = 7;

    return (
        <div className="flex flex-col min-h-screen bg-[#141414] text-white">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8">
               <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                                <Image
                                    src={drama.coverArt.replace('300x450', '1920x1080')}
                                    alt={`Video player for ${drama.title}`}
                                    fill
                                    className="object-contain"
                                    data-ai-hint={drama.dataAiHint}
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <PlayIcon className="w-20 h-20 text-white/80" />
                                </div>
                                <div className="absolute top-2 left-2 bg-black/50 p-2 rounded">
                                    <p className='text-sm text-gray-300'>หน้าหลัก › ซีรี่ส์ › {drama.title}</p>
                                </div>
                                <div className="absolute top-2 right-2">
                                    <Button size="sm" variant={'secondary'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4"><path d="M12 17V3"/><path d="m6 11 6 6 6-6"/><path d="M19 21H5"/></svg>
                                        Download this video
                                    </Button>
                                </div>

                                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                                    <Button size="icon" variant="secondary" className="bg-black/50 text-white hover:bg-black/80 rounded-full h-10 w-10">
                                        <ChevronUp className="h-5 w-5" />
                                    </Button>
                                    <Button size="icon" variant="secondary" className="bg-black/50 text-white hover:bg-black/80 rounded-full h-10 w-10">
                                        <ChevronDown className="h-5 w-5" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#1C1C1C] rounded-lg p-6">
                            <h1 className="text-2xl font-bold mb-2">{drama.title} ตอนที่ {currentEpisode}</h1>
                            <div className="flex items-center gap-6 mb-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <ThumbsUp className="h-5 w-5 text-gray-400" />
                                    <span>3.0K</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Bookmark className="h-5 w-5 text-gray-400" />
                                    <span>2.1K</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                <Badge variant="secondary">{drama.genre}</Badge>
                            </div>
                            
                            <p className={`text-sm text-gray-300 mb-4 leading-relaxed ${!isExpanded && 'line-clamp-2'}`}>
                                {drama.description}
                            </p>
                            <Button variant="link" className="p-0 h-auto text-gray-400 -mt-3 mb-4" onClick={() => setIsExpanded(!isExpanded)}>
                                {isExpanded ? 'แสดงน้อยลง' : 'แสดงเพิ่มเติม'}
                                <ChevronDown className={`inline h-4 w-4 ml-1 transition-transform ${isExpanded ? 'rotate-180' : ''}`}/>
                            </Button>


                            <div className="flex items-center gap-3 mb-6">
                                <Button size="icon" className="rounded-full bg-blue-600 hover:bg-blue-700 h-9 w-9"><FacebookIcon className='text-white'/></Button>
                                <Button size="icon" className="rounded-full bg-black hover:bg-gray-800 h-9 w-9"><XIcon className='text-white h-5 w-5'/></Button>
                                <Button size="icon" className="rounded-full bg-green-500 hover:bg-green-600 h-9 w-9"><LineIcon className='text-white'/></Button>
                                <Button size="icon" className="rounded-full bg-gray-600 hover:bg-gray-700 h-9 w-9"><LinkIcon className='text-white h-5 w-5'/></Button>
                            </div>
                            
                            <Tabs defaultValue={`${episodeChunks[0][0]}-${episodeChunks[0][episodeChunks[0].length-1]}`} className="w-full">
                                <div className='flex justify-between items-center'>
                                    <TabsList>
                                        {episodeChunks.map((chunk, index) => (
                                            <TabsTrigger key={index} value={`${chunk[0]}-${chunk[chunk.length - 1]}`}>{`${chunk[0]}-${chunk[chunk.length - 1]}`}</TabsTrigger>
                                        ))}
                                    </TabsList>
                                    <Button variant="link" className="text-sm text-gray-400">
                                        ตอนทั้งหมด <ChevronRight className="h-4 w-4"/>
                                    </Button>
                                </div>
                                {episodeChunks.map((chunk, index) => (
                                    <TabsContent key={index} value={`${chunk[0]}-${chunk[chunk.length-1]}`}>
                                        <div className="grid grid-cols-5 gap-2 mt-4">
                                            {chunk.map(episode => (
                                                <Button 
                                                    key={episode} 
                                                    variant={episode === currentEpisode ? 'destructive' : 'secondary'}
                                                    className="aspect-square h-auto w-full p-0 text-sm font-normal relative"
                                                >
                                                    {episode === currentEpisode && <PlayIcon className="absolute w-4 h-4 text-white"/>}
                                                    <span className={`${episode === currentEpisode ? 'opacity-20' : ''}`}>{episode}</span>
                                                </Button>
                                            ))}
                                        </div>
                                    </TabsContent>
                                ))}
                            </Tabs>
                        </div>
                    </div>
                    <div className="mt-12">
                        <DramaCarousel title="แนะนำสำหรับคุณ" dramas={recommendedDramas} />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
