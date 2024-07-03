export default function CTA() {
    return (
		<div
			className="bg-cta h-64 xl:h-[480px] text-white font-heading px-24 flex flex-col justify-center items-center gap-5 xl:gap-8 text-center"
			style={{
				backgroundSize: "120%",
				backgroundPosition: "50% 15%",
			}}
		>
			<h1 className="text-2xl font-bold xl:text-[56px]">
				Kickstart your child&apos;s journey
			</h1>
			<button className="bg-[#D2A808] text-lg font-medium xl:py-[18px] xl:px-[48px] py-2 px-4 xl:text-[32px]">
				Join us
			</button>
		</div>
	);
}