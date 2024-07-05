export default function CTA() {
    return (
		<div
			className="h-64 xl:h-[480px] text-white font-heading px-24 flex flex-col justify-center items-center gap-5 xl:gap-8 text-center"
			style={{
				backgroundImage:
					"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/DSC_7818.png')",
				backgroundSize: "120%",
				backgroundPosition: "50% 15%",
			}}
		>
			<h1 className="text-2xl font-bold xl:text-[48px]">
				Kickstart your child&apos;s journey
			</h1>
			<button className="bg-[#D2A808] text-lg font-medium xl:py-[14px] xl:px-[40px] py-2 px-4 xl:text-[24px]">
				Join us
			</button>
		</div>
	);
}