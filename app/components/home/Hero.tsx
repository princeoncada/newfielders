export default function Hero() {
	return (
		<section>
			<div className="bg-hero bg-center bg-cover">
				<div className="text-white p-12 py-16 lg:px-24 xl:pl-[100px] xl:pb-[100px] xl:h-[600px] max-w-[1280px] mx-auto">
					<div className="flex flex-col gap-4 xl:gap-2 xl:w-[525px] xl:h-full xl:justify-end">
						<h1 className="font-heading font-bold text-3xl text-center xl:text-start xl:text-[48px] xl:leading-[56px]">
							The NewFields STEM School of Davao
						</h1>
						<p className="font-body text-center xl:text-start xl:text-[14px]">
							Empowering the next generation of Filipino
							innovators, we cultivate STEM skills and critical
							thinking for global readiness. Join us in shaping a
							brighter future through innovative and collaborative
							education.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
