import Image from 'next/image';

export default function Programs() {
    return (
		<section className="font-heading flex flex-col justify-center items-center xl:h-[720px] xl:px-[148px] gap-5 xl:gap-8 p-12 bg-[#F0F0F0]">
			<div className="flex flex-col gap-5">
				<h1 className="font-bold text-2xl xl:text-[56px]  xl:text-start text-[#028141]">
					Programs Offered
				</h1>
				<div className="flex flex-row gap-3 xl:hidden">
					<div className="flex flex-col gap-3 md:flex-row">
						<Image
							src="/images/Nursery.png"
							alt=""
							width="150"
							height="100"
						></Image>
						<Image
							src="/images/Kinder.png"
							alt=""
							width="150"
							height="100"
						></Image>
					</div>
					<div className="flex flex-col gap-3 mt-5 md:mt-0 md:flex-row">
						<Image
							src="/images/PreKinder.png"
							alt=""
							width="150"
							height="100"
						></Image>
						<Image
							src="/images/Elementary.png"
							alt=""
							width="150"
							height="100"
						></Image>
					</div>
				</div>

				<div className="hidden xl:flex flex-row gap-6">
					<Image
						src="/images/Nursery.png"
						alt=""
						width="287"
						height="100"
					></Image>
					<Image
						src="/images/Kinder.png"
						alt=""
						width="287"
						height="100"
					></Image>
					<Image
						src="/images/PreKinder.png"
						alt=""
						width="287"
						height="100"
					></Image>
					<Image
						src="/images/Elementary.png"
						alt=""
						width="287"
						height="100"
					></Image>
				</div>
			</div>
		</section>
	);
}