import Link from "next/link";
import Image from "next/image";

export default function QuickLinks({ currentPage }: { currentPage?: string }) {
  return (
    <section className="hidden w-1/3 lg:flex flex-col gap-5">
        {currentPage !== "contact" && (
      <Link href={`/contact`} className="w-full">
        <Image
          src={`/svg/Contact Us.svg`}
          width={1000}
          height={1000}
          alt="contact-us-cta"
        />
      </Link>
        )}
      {currentPage !== "admission" && (
        <Link href={`/admission`} className="w-full">
          <Image
            src={`/svg/Admission.svg`}
            width={1000}
            height={1000}
            alt="admission-cta"
          />
        </Link>
      )}
      <div className="flex flex-col gap-4 w-full">
        <h1 className="font-heading text-[#00582C] text-[28px] font-medium">
          Quick Links
        </h1>
        <div className="flex flex-col gap-2 font-body text-[#333333] text-[18px]">
          <Link href={`#`}>Home</Link>
          <Link href={`#`}>About Us</Link>
          <Link href={`#`}>Admission</Link>
          <Link href={`#`}>Events</Link>
          <Link href={`#`}>NewFielders Life</Link>
          <Link href={`#`}>Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
