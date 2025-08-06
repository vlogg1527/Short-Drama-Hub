// src/app/terms/page.tsx
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'เงื่อนไขการให้บริการ - NetShorts',
  description: 'ข้อกำหนดและเงื่อนไขการให้บริการของ NetShorts',
};

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-white">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-[#1C1C1C] p-8 rounded-lg">
          <h1 className="text-3xl font-bold mb-6 text-center text-primary">เงื่อนไขการให้บริการ</h1>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold mb-2 text-white">1. บทนำ</h2>
              <p>ยินดีต้อนรับสู่ NetShorts! เงื่อนไขการให้บริการนี้ ("ข้อกำหนด") ควบคุมการใช้งานเว็บไซต์, บริการ, และแอปพลิเคชันของเรา (รวมเรียกว่า "บริการ") โดยการเข้าถึงหรือใช้บริการของเรา, คุณตกลงที่จะผูกพันตามข้อกำหนดเหล่านี้</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2 text-white">2. การใช้บริการ</h2>
              <p>คุณตกลงที่จะใช้บริการของเราเพื่อวัตถุประสงค์ที่ถูกกฎหมายเท่านั้น และจะไม่ละเมิดสิทธิ์ของผู้อื่นหรือจำกัดการใช้งานและความเพลิดเพลินของบริการโดยผู้อื่น พฤติกรรมที่ไม่ได้รับอนุญาต รวมถึงการก่อกวน, การสร้างความเดือดร้อน, การส่งเนื้อหาที่ไม่เหมาะสม หรือการรบกวนการทำงานปกติของบริการ</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-2 text-white">3. ทรัพย์สินทางปัญญา</h2>
              <p>เนื้อหาทั้งหมดที่มีในบริการ เช่น ข้อความ, กราฟิก, โลโก้, รูปภาพ, และคลิปวิดีโอ เป็นทรัพย์สินของ NetShorts หรือผู้ให้บริการเนื้อหาและได้รับการคุ้มครองโดยกฎหมายลิขสิทธิ์ระหว่างประเทศ คุณไม่สามารถทำซ้ำ, แจกจ่าย, แก้ไข, หรือสร้างผลงานลอกเลียนแบบจากเนื้อหาใดๆ โดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษรจากเรา</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2 text-white">4. บัญชีผู้ใช้</h2>
              <p>หากคุณสร้างบัญชีกับเรา, คุณต้องรับผิดชอบในการรักษาความลับของข้อมูลบัญชีของคุณ รวมถึงรหัสผ่าน และสำหรับกิจกรรมทั้งหมดที่เกิดขึ้นภายใต้บัญชีของคุณ คุณตกลงที่จะแจ้งให้เราทราบทันทีเมื่อมีการใช้งานบัญชีของคุณโดยไม่ได้รับอนุญาต</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-2 text-white">5. การจำกัดความรับผิด</h2>
              <p>บริการของเรามีให้ "ตามที่เป็น" และ "ตามที่มี" NetShorts ไม่รับประกันว่าบริการจะไม่มีการหยุดชะงัก, ปลอดภัย, หรือปราศจากข้อผิดพลาด เราจะไม่รับผิดชอบต่อความเสียหายใดๆ ที่เกิดขึ้นจากการใช้บริการของเรา</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2 text-white">6. การเปลี่ยนแปลงข้อกำหนด</h2>
              <p>เราขอสงวนสิทธิ์ในการแก้ไขข้อกำหนดเหล่านี้ได้ตลอดเวลา การเปลี่ยนแปลงจะมีผลทันทีเมื่อมีการโพสต์บนหน้านี้ การใช้งานบริการต่อไปหลังจากการเปลี่ยนแปลงถือว่าคุณยอมรับข้อกำหนดใหม่</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2 text-white">7. ติดต่อเรา</h2>
              <p>หากคุณมีคำถามเกี่ยวกับข้อกำหนดเหล่านี้, โปรดติดต่อเราที่ <a href="mailto:support@netshort.com" className="text-primary hover:underline">support@netshort.com</a></p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
