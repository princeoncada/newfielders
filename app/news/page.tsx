/* eslint-disable react/no-unescaped-entities */
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import Article from "../components/Article";
import SubArticle from "../components/SubArticle";
import Gallery from "./components/Gallery";
import Image from "next/image";
import Link from "next/link";

export default function News() {
	return (
		<div className="bg-[#F0F0F0]">
			<Hero title="News" />

			<div className="flex flex-row px-8 lg:px-28 h-auto relative bottom-16 gap-5 max-w-[1280px] mx-auto">
				<section className="hidden lg:block w-1/3">
					<div className="flex flex-col gap-5 sticky top-28">
						<Link href={`/contact`} className="w-full">
							<Image
								src={`/svg/Contact Us.svg`}
								width={1000}
								height={1000}
								alt="contact-us-cta"
							/>
						</Link>
						<Link href={`/admission`} className="w-full">
							<Image
								src={`/svg/Admission.svg`}
								width={1000}
								height={1000}
								alt="admission-cta"
							/>
						</Link>
						<div className="flex flex-col gap-3.5 w-full">
							<h1 className="font-heading text-[#00582C] text-[28px] font-medium">
								Contents
							</h1>
							<div className="flex flex-col gap-2 font-body text-[#333333] text-[18px]">
								<Link href={`#ann-section`}>Announcements</Link>
								<Link href={`#high-section`}>
									Highlights and Milestones
								</Link>
								<Link href={`#learn-section`}>
									Learning the NewField&apos;s Way
								</Link>
							</div>
						</div>
					</div>
				</section>

				<section className="bg-white w-full lg:2/3 p-8 flex flex-col gap-5 lg:gap-8 lg:py-14">
					<article
						id="ann-section"
						className="flex flex-col gap-1 lg:gap-5 lg:mx-12 max-w-full"
					>
						<h1 className="text-2xl font-semibold font-heading text-[#00582C] lg:text-4xl lg:font-bold lg:mb-1">
							Announcements
						</h1>
						<div
							className={`text-sm font-body text-[#333333] text-justify flex flex-col gap-1.5 lg:text-lg lg:gap-4`}
						>
							Welcome to the official announcements and updates
							page of The Newfield's STEM School of Davao! Here,
							you'll find the latest news, important dates, and
							crucial information to keep students, parents, and
							staff in the loop.
						</div>
					</article>

					<div className="flex flex-col lg:flex-row gap-4">
						<div>
							<Image
								className="rounded-md shadow-lg"
								src="/images/welbac.png"
								width={1000}
								height={100}
								alt="placeholder"
							></Image>
						</div>
						<div>
							<Image
								className="rounded-md shadow-lg"
								src="/images/julact.png"
								width={1000}
								height={100}
								alt="placeholder"
							></Image>
						</div>
					</div>

					<article
						id="high-section"
						className="flex flex-col gap-1 lg:gap-5 lg:mx-12 max-w-full"
					>
						<h1 className="text-2xl font-semibold font-heading text-[#00582C] lg:text-4xl lg:font-bold lg:mb-1">
							Highlights and Milestones
						</h1>
						<div
							className={`text-sm font-body text-[#333333] text-justify flex flex-col gap-1.5 lg:text-lg lg:gap-4`}
						>
							<SubArticle title="A Year of Vibrant Achievements">
								The 2023-2024 school year at NewFields STEM
								School of Davao was packed with exciting and
								enriching activities. Our community enjoyed
								regular monthly events like Buwan ng Wika,
								celebrating Filipino language and culture, and
								the festive UN Day and Christmas events that
								brought students and staff together in joyful
								celebration.
							</SubArticle>
							<SubArticle title="Special Events and Competitions">
								We had special highlights such as the BSP
								Camporee, where students developed leadership
								and survival skills, and STEM Day, showcasing
								innovative projects and experiments.
								Intellectual challenges like the Brain Boost
								Math and Science Quiz Bowl and the Spelling Bee
								pushed our students to excel, while the Literary
								Festival fostered public speaking and self
								esteem. Our Foundation Day marked the school's
								growth and achievements, and the first ever
								Parents and Teachers Sports Fest promoted
								camaraderie and fitness.
							</SubArticle>
							<SubArticle title="Special Events and Competitions">
								Our students excelled in interschool
								competitions, winning the Grade School Modern
								Dance and securing 1st place in the Grade School
								Cheerdance. We also earned top spots in the
								Literary Festival, Spelling Bee, and DEPED
								Literary Festival, underscoring our dedication
								to academic excellence.
							</SubArticle>
							<p>
								Relive these memorable moments by watching our
								event recaps:
							</p>
							<Gallery />
						</div>
					</article>

					<article
						id="learn-section"
						className="flex flex-col gap-1 lg:gap-5 lg:mx-12 max-w-full"
					>
						<h1 className="text-2xl font-semibold font-heading text-[#00582C] lg:text-4xl lg:font-bold lg:mb-1">
							Learning the NewField&apos;s Way
						</h1>
						<div
							className={`text-sm font-body text-[#333333] text-justify flex flex-col gap-1.5 lg:text-lg lg:gap-4`}
						>
							At ACCESSEDU, INC. (The NewFields STEM School of
							Davao), we make education an exciting journey of
							discovery. Our innovative approach, from Nursery to
							Grade 6, aligns with the DEPED curriculum and
							incorporates our unique STEM (Science, Technology,
							Engineering, and Mathematics) focus. Our dedicated
							teachers design interactive activities to ignite a
							lifelong passion for learning.
							<SubArticle title="Hands-On Learning">
								Hands on experimentation is a cornerstone of the
								NewFields experience. Students engage in
								practical activities like mixing household
								chemicals in chemistry or building simple
								machines in engineering projects, reinforcing
								theoretical knowledge and fostering critical
								thinking.
							</SubArticle>
							<SubArticle title="First-Hand Observations">
								Students explore plant life cycles in our garden
								or observe insects in their habitats, making
								science come alive beyond textbooks.
							</SubArticle>
							<SubArticle title="Beyond the Classroom">
								Community walks, tours, and field trips connect
								classroom learning to the real world. Visits to
								local markets, communities, and parks provide
								educational opportunities that enhance the DEPED
								curriculum.
							</SubArticle>
						</div>
					</article>

					<video
						src="/videos/vid-news.mp4"
						autoPlay
						muted
						loop
						controls
						width="100%"
					/>
				</section>
			</div>
			<CTA />
		</div>
	);
}
