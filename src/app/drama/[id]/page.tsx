// src/app/drama/[id]/page.tsx
import { dramas } from '@/lib/data';
import { DramaClientPage } from './drama-client-page';

export default function DramaPage({ params }: { params: { id: string } }) {
    const drama = dramas.find(d => d.id === parseInt(params.id));

    if (!drama) {
        return <div className="text-white text-center py-20">ไม่พบละครเรื่องนี้</div>;
    }

    const recommendedDramas = [...dramas].sort(() => 0.5 - Math.random()).slice(0, 6);

    return <DramaClientPage drama={drama} recommendedDramas={recommendedDramas} />;
}
