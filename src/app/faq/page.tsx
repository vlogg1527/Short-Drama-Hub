// src/app/faq/page.tsx
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'คำถามที่พบบ่อย (FAQ) - NetShorts',
  description: 'ค้นหาคำตอบสำหรับคำถามที่พบบ่อยเกี่ยวกับ NetShorts',
};

const faqs = [
  {
    question: "NetShorts คืออะไร?",
    answer: "NetShorts คือแพลตฟอร์มสตรีมมิ่งที่เน้นละครสั้นและซีรีส์ขนาดสั้นจากทั่วโลก ออกแบบมาเพื่อการรับชมที่รวดเร็วและสนุกสนานบนทุกอุปกรณ์",
  },
  {
    question: "ฉันสามารถรับชม NetShorts บนอุปกรณ์ใดได้บ้าง?",
    answer: "คุณสามารถรับชม NetShorts ได้บนสมาร์ทโฟน, แท็บเล็ต, และคอมพิวเตอร์ผ่านทางเว็บไซต์ของเรา นอกจากนี้เรายังมีแอปพลิเคชันสำหรับ iOS และ Android",
  },
  {
    question: "มีค่าใช้จ่ายในการใช้บริการหรือไม่?",
    answer: "NetShorts มีทั้งเนื้อหาที่รับชมได้ฟรีและแพ็คเกจสมาชิกแบบพรีเมียม ซึ่งจะให้คุณเข้าถึงเนื้อหาทั้งหมดโดยไม่มีโฆษณาคั่น",
  },
  {
    question: "ฉันจะยกเลิกการเป็นสมาชิกได้อย่างไร?",
    answer: "คุณสามารถยกเลิกการเป็นสมาชิกได้ตลอดเวลาโดยไปที่หน้า 'บัญชีของฉัน' และเลือก 'จัดการการสมัครสมาชิก' การยกเลิกจะมีผลในรอบบิลถัดไป",
  },
  {
    question: "ฉันจะติดต่อฝ่ายบริการลูกค้าได้อย่างไร?",
    answer: "หากคุณมีคำถามหรือต้องการความช่วยเหลือเพิ่มเติม สามารถติดต่อเราได้ทางอีเมลที่ support@netshort.com หรือผ่านหน้า 'ติดต่อเรา' บนเว็บไซต์",
  },
];

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-white">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center text-primary">คำถามที่พบบ่อย (FAQ)</h1>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-[#1C1C1C] px-6 rounded-lg mb-4 border-b-0">
                <AccordionTrigger className="text-lg font-semibold text-left text-white hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
}
