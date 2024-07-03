export default function Hero() {
    return (
		<section
			className="text-white p-12 bg-center bg-cover py-16 lg:px-24 xl:pl-[151px] xl:pb-[148px] xl:h-[720px]"
			style={{
				backgroundImage:
					"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/DSC_7807.png')",
			}}
		>
			<div className="flex flex-col gap-4 xl:w-[620px] xl:h-full xl:justify-end">
				<h1 className="font-heading font-bold text-3xl text-center xl:text-start xl:text-[56px] xl:leading-[64px]">
					The NewFields STEM School of Davao
				</h1>
				<p className="font-body text-center xl:text-start xl:text-[18px]">
					Empowering the next generation of Filipino innovators, we
					cultivate STEM skills and critical thinking for global
					readiness. Join us in shaping a brighter future through
					innovative and collaborative education.
				</p>
			</div>
		</section>
	);
}