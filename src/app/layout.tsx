import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Noto_Sans_Thai, Noto_Serif_Thai } from 'next/font/google';

const notoSerifThai = Noto_Serif_Thai({
  subsets: ['thai'],
  weight: ['400', '700'],
  variable: '--font-headline',
});

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['400', '700'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'NetShort',
  description: 'Discover and enjoy trending short dramas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="dark">
      <body className={`${notoSerifThai.variable} ${notoSansThai.variable} font-body antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
