import Link from "next/link";
import Image from "next/image";

export default function Gallery() {
    return (
        <section className="font-heading lg:-mt-2">
            <div className="flex flex-col gap-2">
                <div className="flex flex-col md:flex-row gap-2 xl:gap-6">
                    <Link href="https://www.youtube.com/watch?v=x7Op3VT6Ezs&ab_channel=TheNewFieldsSTEMSchoolofDavao">
                        <h1 className="mb-0.5 xl:my-2 xl:text-[16px] text-xs text-[#333333]">
                            First Quarter Activities
                        </h1>
                        <Image
                            src="/images/first q.jpg"
                            alt=""
                            width="1000"
                            height="900"
                        ></Image>
                    </Link>
                    <Link href="https://www.youtube.com/watch?v=ia1cSZCSbCU&ab_channel=TheNewFieldsSTEMSchoolofDavao">
                        <h1 className="mb-0.5 xl:my-2 xl:text-[16px] text-xs text-[#333333]">
                            Second Quarter Activities
                        </h1>
                        <Image
                            src="/images/second q.jpg"
                            alt=""
                            width="1000"
                            height="600"
                        ></Image>
                    </Link>
                </div>
                <div className="flex flex-col md:flex-row gap-2 xl:gap-6">
                    <Link href="https://www.youtube.com/watch?v=KzHPmdXXO2U&ab_channel=TheNewFieldsSTEMSchoolofDavao">
                        <h1 className="mb-0.5 xl:my-2 xl:text-[16px] text-xs text-[#333333]">
                            Third & Fourth Quarter Activities
                        </h1>
                        <Image
                            src="/images/third q.jpg"
                            alt=""
                            width="1000"
                            height="900"
                        ></Image>
                    </Link>
                    <Link href="https://www.youtube.com/watch?v=D6JjEId-Fo8&ab_channel=TheNewFieldsSTEMSchoolofDavao">
                        <h1 className="mb-0.5 xl:my-2 xl:text-[16px] text-xs text-[#333333]">
                            Academic Interschool Activities
                        </h1>
                        <Image
                            src="/images/fourth q.jpg"
                            alt=""
                            width="1000"
                            height="600"
                        ></Image>
                    </Link>
                </div>
            </div>
        </section>
    );
}
