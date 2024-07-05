import Link from "next/link";
import Image from "next/image";

export default function News() {
    return (
		<section className="p-12 xl:px-[96px] xl:py-[80px] font-heading bg-[#F0F0F0]">
			<div className="flex flex-col gap-8">
				<h1 className="text-2xl font-bold mb-2 text-[#028141] xl:text-[48px] xl:mb-1">
					News & Updates
				</h1>

				<div className="flex flex-col md:flex-row gap-4">
					<div>
						<Link href={`*`}>
							<Image
								src={`/images/welbac.png`}
								alt=""
								height={1000}
								width={1000}
							></Image>
						</Link>
					</div>
					<div>
						<Link href={`*`}>
							<Image
								src={`/images/julact.png`}
								alt=""
								height={1000}
								width={1000}
							></Image>
						</Link>
					</div>
				</div>

				<Link href={`*`} className="flex flex-row gap-2 h-auto">
					<div className="hidden md:flex w-[250px] bg-b-workshop bg-cover h-[250px] bg-center rounded-tr-md rounded-bl-md"></div>
					<div className="flex flex-col bg-gradient-to-r from-white w-full gap-1 p-4 lg:px-8 justify-center">
						<div className="flex flex-row items-end gap-2">
							<div className="font-heading text-xl text-[#028141] lg:font-semibold lg:text-3xl">
								Teacher&apos;s Summer <br /> Seminars and
								Workshops
							</div>
						</div>
						<div className="font-body text-xs lg:text-lg text-[#333333]">
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Dicta quae iure porro alias minima eaque sunt
							exercitationem, minus ullam corporis assumenda
							accusantium, tempora quos consequatur, aliquid
							incidunt fugit iusto quam.
						</div>
					</div>
				</Link>
			</div>
		</section>
	);
}