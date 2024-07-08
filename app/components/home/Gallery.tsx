import Link from "next/link";
import Image from "next/image";

export default function Gallery() {
	return (
		<section className="p-12 xl:px-[96px] xl:py-[80px] font-heading">
			<div>
				<h1 className="text-2xl font-bold mb-2 text-[#028141] xl:text-[48px] xl:mb-5">
					Gallery
				</h1>
				<div className="flex flex-col gap-2">
					<div className="flex flex-col md:flex-row gap-2 xl:gap-6">
						<Link href="https://www.youtube.com/watch?v=x7Op3VT6Ezs&ab_channel=TheNewFieldsSTEMSchoolofDavao">
							<h1 className="mb-0.5 xl:my-2 xl:text-[16px] text-sm text-[#333333]">
								First Quarter Activities
							</h1>
							<Image
								className="rounded-md shadow-lg"
								src="/images/first q.jpg"
								alt=""
								width="1000"
								height="800"
							></Image>
						</Link>
						<Link href="https://www.youtube.com/watch?v=ia1cSZCSbCU&ab_channel=TheNewFieldsSTEMSchoolofDavao">
							<h1 className="mb-0.5 xl:my-2 xl:text-[16px] text-sm text-[#333333]">
								Second Quarter Activities
							</h1>
							<Image
								className="rounded-md shadow-lg"
								src="/images/second q.jpg"
								alt=""
								width="1000"
								height="600"
							></Image>
						</Link>
					</div>
					<div className="flex flex-col md:flex-row gap-2 xl:gap-6">
						<Link href="https://www.youtube.com/watch?v=KzHPmdXXO2U&ab_channel=TheNewFieldsSTEMSchoolofDavao">
							<h1 className="mb-0.5 xl:my-2 xl:text-[16px] text-sm text-[#333333]">
								Third & Fourth Quarter Activities
							</h1>
							<Image
								className="rounded-md shadow-lg"
								src="/images/third q.jpg"
								alt=""
								width="1000"
								height="900"
							></Image>
						</Link>
						<Link href="https://www.youtube.com/watch?v=D6JjEId-Fo8&ab_channel=TheNewFieldsSTEMSchoolofDavao">
							<h1 className="mb-0.5 xl:my-2 xl:text-[16px] text-sm text-[#333333]">
								Academic Interschool Activities
							</h1>
							<Image
								className="rounded-md shadow-lg"
								src="/images/fourth q.jpg"
								alt=""
								width="1000"
								height="600"
							></Image>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
