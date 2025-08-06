// src/app/privacy/page.tsx
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'นโยบายความเป็นส่วนตัว - NetShorts',
  description: 'นโยบายความเป็นส่วนตัวของ NetShorts',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-white">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-[#1C1C1C] p-8 rounded-lg">
          <h1 className="text-3xl font-bold mb-6 text-center text-primary">นโยบายความเป็นส่วนตัว</h1>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold mb-2 text-white">1. ข้อมูลที่เรารวบรวม</h2>
              <p>เรารวบรวมข้อมูลที่คุณให้กับเราโดยตรง เช่น เมื่อคุณสร้างบัญชี, สมัครสมาชิก, หรือติดต่อเราเพื่อรับการสนับสนุน นอกจากนี้เรายังรวบรวมข้อมูลโดยอัตโนมัติเกี่ยวกับการใช้งานบริการของคุณ เช่น ประวัติการรับชม, ที่อยู่ IP, และข้อมูลอุปกรณ์</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2 text-white">2. การใช้ข้อมูลของคุณ</h2>
              <p>เราใช้ข้อมูลของคุณเพื่อให้บริการและปรับปรุงบริการของเรา, ปรับแต่งเนื้อหาและคำแนะนำ, ประมวลผลการชำระเงิน, และสื่อสารกับคุณเกี่ยวกับบริการและโปรโมชั่นต่างๆ</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-2 text-white">3. การแบ่งปันข้อมูล</h2>
              <p>เราจะไม่แบ่งปันข้อมูลส่วนบุคคลของคุณกับบุคคลที่สาม ยกเว้นในกรณีที่จำเป็นเพื่อให้บริการ (เช่น ผู้ให้บริการชำระเงิน) หรือตามที่กฎหมายกำหนด เราอาจแบ่งปันข้อมูลที่ไม่ระบุตัวตนเพื่อการวิเคราะห์และวัตถุประสงค์ทางธุรกิจ</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2 text-white">4. ความปลอดภัยของข้อมูล</h2>
              <p>เราใช้มาตรการรักษาความปลอดภัยที่เหมาะสมเพื่อปกป้องข้อมูลของคุณจากการเข้าถึง, การเปลี่ยนแปลง, การเปิดเผย, หรือการทำลายโดยไม่ได้รับอนุญาต อย่างไรก็ตาม ไม่มีระบบใดที่ปลอดภัย 100%</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-2 text-white">5. คุกกี้และเทคโนโลยีที่คล้ายกัน</h2>
              <p>เราใช้คุกกี้เพื่อปรับปรุงประสบการณ์ของคุณบนเว็บไซต์ของเรา, จดจำการตั้งค่าของคุณ, และรวบรวมข้อมูลการใช้งาน คุณสามารถควบคุมการใช้คุกกี้ได้ผ่านการตั้งค่าเบราว์เซอร์ของคุณ</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2 text-white">6. การเปลี่ยนแปลงนโยบาย</h2>
              <p>เราอาจปรับปรุงนโยบายความเป็นส่วนตัวนี้เป็นครั้งคราว เราจะแจ้งให้คุณทราบถึงการเปลี่ยนแปลงที่สำคัญโดยการโพสต์นโยบายใหม่บนหน้านี้</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
