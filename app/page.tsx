import CTA from "./components/CTA";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="text-white p-12 bg-center bg-cover py-16 lg:px-24 xl:pl-[151px] xl:pb-[148px] xl:h-[720px]" 
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/DSC_7807.jpg')",
      }}>
        <div className="flex flex-col gap-4 xl:w-[620px] xl:h-full xl:justify-end">
          <h1 className="font-heading font-bold text-3xl text-center xl:text-start xl:text-[56px] xl:leading-[64px]">The NewFields STEM School of Davao</h1>
          <p className="font-body text-center xl:text-start xl:text-[18px]">Empowering the next generation of Filipino innovators, we cultivate STEM skills and critical thinking for global readiness. Join us in shaping a brighter future through innovative and collaborative education.</p>
        </div>
      </section>

      <section className="font-heading flex flex-col justify-center items-center xl:h-[720px] xl:px-[148px] gap-5 xl:gap-8 p-12 bg-[#F0F0F0]">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-2xl xl:text-[56px]  xl:text-start text-[#028141]">Programs Offered</h1>
          <div className="flex flex-row gap-3 xl:hidden">
            <div className="flex flex-col gap-3 md:flex-row">
              <Image src="/images/Nursery.png" alt="" width="150" height="100"></Image>
              <Image src="/images/Kinder.png" alt="" width="150" height="100"></Image>
            </div>
            <div className="flex flex-col gap-3 mt-5 md:mt-0 md:flex-row">
              <Image src="/images/PreKinder.png" alt="" width="150" height="100"></Image>
              <Image src="/images/Elementary.png" alt="" width="150" height="100"></Image>
            </div>
          </div>

          <div className="hidden xl:flex flex-row gap-6">
              <Image src="/images/Nursery.png" alt="" width="287" height="100"></Image>
              <Image src="/images/Kinder.png" alt="" width="287" height="100"></Image>
              <Image src="/images/PreKinder.png" alt="" width="287" height="100"></Image>
              <Image src="/images/Elementary.png" alt="" width="287" height="100"></Image>
          </div>
        </div>
      </section>
        
      <section>
        <div className="flex flex-col md:flex-row">
          <div className="w-full h-[100vw] md:h-[50vw] md:w-1/2 bg-cover bg-center" style={{
              backgroundImage: "url('/images/Image.png')",
            }}>
          </div>
          <div className="font-heading p-12 xl:p-[107px] md:w-1/2 md:flex flex-col justify-center">
            <div>
              <h1 className="font-bold text-2xl xl:text-[56px] w-2/3 xl:w-auto xl:leading-[64px] text-[#028141]">The <span className="text-[#D2A808] underline">NewFields</span> STEM School</h1>
              <h2 className="font-medium text-sm xl:text-[20px] mb-3 xl:mb-6 xl:w-auto text-[#333333]">Empowering Filipino Youth Through STEM</h2>
              <p className="text-xs xl:text-[14px] font-body mb-10 md:w-4/5 xl:w-11/12 text-[#555555]">At The NewFields STEM School of Davao, we are dedicated to nurturing critical thinking and problem-solving skills in Filipino youth. Our innovative approach prepares students to become future leaders and innovators, equipped for global competitiveness.</p>
              <Link href="#" className="text-sm xl:text-[18px] bg-[#028141] text-white px-4 xl:px- py-2 xl:py-4">Read more</Link>
            </div>
          </div>
        </div>
      </section>

      <section>
            <div>
              
            </div>
      </section>

      <section>

      </section>

      <section>

      </section>
      <CTA />
    </>
  );
}
