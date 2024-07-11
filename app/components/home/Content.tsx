import Link from 'next/link';

export default function Content() {
    return (
		<section>
			<div className="flex flex-col md:flex-row max-w-[1280px] mx-auto">
				<div
					className="w-full h-[100vw] md:h-auto md:w-1/2 bg-cover bg-center"
					style={{
						backgroundImage: "url('/images/Image.png')",
					}}
				></div>
				<div className="font-heading px-12 pt-8 pb-12 xl:p-[107px] md:w-1/2 md:flex flex-col justify-center lg:pl-14">
					<div>
						<h1 className="font-bold text-2xl xl:text-[48px] w-2/3 mb-2 xl:w-auto xl:leading-[64px] text-[#028141]">
							The{" "}
							<span className="text-[#D2A808] underline">
								NewFields
							</span>{" "}
							<div>STEM School</div>
						</h1>
						<h2 className="font-medium text-sm xl:text-[19px] mb-3 xl:mb-10 xl:w-auto text-[#333333] md:w-9/12">
							Empowering Filipino Youth Through STEM
						</h2>
						<p className="text-xs xl:text-[18px] xl:leading-[25px] font-body mb-10 md:w-4/5 xl:w-auto text-[#555555]">
							At The NewFields STEM School of Davao, we are
							dedicated to nurturing critical thinking and
							problem-solving skills in Filipino youth. Our
							innovative approach prepares students to become
							future leaders and innovators, equipped for global
							competitiveness.
						</p>
						<Link
							href="/newfielders"
							className="text-sm xl:text-[14px] bg-[#028141] text-white px-4 xl:px-6 py-2 xl:py-3"
						>
							Read more
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}