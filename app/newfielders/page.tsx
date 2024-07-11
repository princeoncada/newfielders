/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import Groups from "./components/Groups";
import Modals from "./components/Modals";
import Image from "next/image";
import Link from "next/link";
import CarouselOne from "./components/CarouselAlumni";
import CarouselTwo from "./components/CarouselUpdates";

export default function NewFielders() {
	return (
		<div className="bg-[#F0F0F0]">
			<Hero title="NewFielder's Life" />

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
								<Link href={`#act-section`}>
									School Activities
								</Link>
								<Link href={`#gallery-section`}>
									Photo Gallery
								</Link>
								<Link href={`#group-section`}>
									Interest Groups
								</Link>
								<Link href={`#sng-section`}>
									NewField&apos;s Government
								</Link>
								<Link href={`#alumni-section`}>
									TNFSSD Alumni
								</Link>
								<Link href={`#update-section`}>
									Achievements
								</Link>
							</div>
						</div>
					</div>
				</section>

				<section className="bg-white w-full lg:2/3 p-8 flex flex-col gap-5 lg:gap-8 lg:py-14">
					<article
						id="act-section"
						className="flex flex-col gap-1 lg:gap-5 lg:mx-12 max-w-full"
					>
						<h1 className="text-2xl font-semibold font-heading text-[#00582C] lg:text-4xl lg:font-bold lg:mb-1">
							School Activities
						</h1>
						<div
							className={`text-sm font-body text-[#333333] text-justify flex flex-col gap-1.5 lg:text-lg lg:gap-4`}
						>
							Welcome to the NFSSD&apos;s Photo Gallery, a vibrant
							collection of snapshots capturing the essence of our
							educational community. Here, you'll discover a
							treasure trove of images showcasing our diverse
							school and className activities, each filled with
							the energy, creativity, and enthusiasm of our
							students and staff. From spirited classroom projects
							to exciting extracurricular events, our gallery
							offers a glimpse into the dynamic experiences that
							make our school a special place to learn and grow.
							Explore these moments and witness the joy,
							collaboration, and achievements that define our
							school spirit.
						</div>
					</article>

					<article
						id="gallery-section"
						className="flex flex-col gap-1 lg:gap-5 lg:mx-12 max-w-full"
					>
						<h1 className="text-2xl font-semibold font-heading text-[#00582C] lg:text-4xl lg:font-bold lg:mb-1">
							Photo Gallery
						</h1>
						<div
							className={`text-sm font-body text-[#333333] text-justify flex flex-col gap-1.5 lg:text-lg lg:gap-4`}
						>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
								<div className="flex flex-col gap-4">
									<div>
										<Image
											className="h-auto max-w-full rounded-md"
											src="/images/add-pre-1.jpg"
											alt=""
											width={1000}
											height={1000}
										/>
									</div>
									<div>
										<Image
											className="h-auto-w-full rounded-md"
											src="/images/add-pre-2.jpg"
											alt=""
											width={1000}
											height={1000}
										/>
									</div>
									<div>
										<Image
											className="h-auto max-w-full rounded-md"
											src="/images/add-pre-3.jpg"
											alt=""
											width={1000}
											height={1000}
										/>
									</div>
								</div>
								<div className="flex flex-col gap-4">
									<div>
										<Image
											className="h-auto max-w-full rounded-md"
											src="/images/add-pre-4.jpg"
											alt=""
											width={1000}
											height={1000}
										/>
									</div>
									<div>
										<Image
											className="h-auto-w-full rounded-md"
											src="/images/add-gra-1.jpg"
											alt=""
											width={1000}
											height={1000}
										/>
									</div>
									<div>
										<Image
											className="h-auto max-w-full rounded-md"
											src="/images/add-gra-2.jpg"
											alt=""
											width={1000}
											height={1000}
										/>
									</div>
								</div>
								<div className="hidden md:flex flex-col gap-4">
									<div>
										<Image
											className="h-auto max-w-full rounded-md"
											src="/images/add-gra-3.jpg"
											alt=""
											width={1000}
											height={1000}
										/>
									</div>
									<div>
										<Image
											className="h-auto-w-full rounded-md"
											src="/images/add-gra-4.jpg"
											alt=""
											width={1000}
											height={1000}
										/>
									</div>
									<div>
										<Image
											className="h-auto max-w-full rounded-md"
											src="/images/DSC_7818.png"
											alt=""
											width={1000}
											height={1000}
										/>
									</div>
								</div>
							</div>
						</div>
					</article>

					<article
						id="group-section"
						className="flex flex-col gap-1 lg:gap-5 lg:mx-12 max-w-full"
					>
						<h1 className="text-2xl font-semibold font-heading text-[#00582C] lg:text-4xl lg:font-bold lg:mb-1">
							Interest Groups
						</h1>
						<div
							className={`text-sm font-body text-[#333333] text-justify flex flex-col gap-1.5 lg:text-lg lg:gap-4`}
						>
							Welcome to an exciting school year with The
							NewFields STEM School of Davao&apos;s Interest
							groups! We have a diverse range of interest
							groups/clubs tailored to spark your passions and
							foster a sense of community. Whether you're a
							budding artist, a tech enthusiast, or a star dancer,
							there's something for everyone. Join and make this
							school year unforgettable!
							<Groups />
						</div>
					</article>

					<Modals />

					<article
						id="sng-section"
						className="flex flex-col gap-1 lg:gap-5 lg:mx-12 max-w-full"
					>
						<h1 className="text-2xl font-semibold font-heading text-[#00582C] lg:text-4xl lg:font-bold lg:mb-1">
							Supreme NewField&apos;s Government
						</h1>
						<div
							className={`text-sm font-body text-[#333333] text-justify flex flex-col gap-1.5 lg:text-lg lg:gap-4`}
						>
							The NewFields STEM School of Davao is excited to
							introduce the Supreme NewFields Government (SNG), a
							student council aimed at enhancing the school's
							academic and social environment. This council will
							represent the student body, advocate for their
							needs, organize activities, and foster community and
							collaboration. The SNG election will be held in the
							first month of the school year, allowing candidates
							to campaign and share their visions for the school.
							This process ensures students can choose
							representatives who will best serve their interests.
							The NewFields STEM School of Davao believes the SNG
							will play a key role in creating a vibrant school
							year, empowering students to excel academically and
							socially.
						</div>
					</article>

					<article
						id="alumni-section"
						className="flex flex-col gap-1 lg:gap-5 lg:mx-12 max-w-full"
					>
						<h1 className="text-2xl font-semibold font-heading text-[#00582C] lg:text-4xl lg:font-bold lg:mb-1">
							TNFSSD Alumni
						</h1>
						<div
							className={`text-sm font-body text-[#333333] text-justify flex flex-col gap-1.5 lg:text-lg lg:gap-4`}
						>
							The NewFields STEM School of Davao is renowned for
							producing exceptional students who excel in various
							fields. Among its alumni are several individuals who
							have made significant achievements since graduating
							in grade 6. These alumni exemplify the high
							standards and quality education provided by The
							NewFields STEM School of Davao, showcasing the
							school's commitment to nurturing the next generation
							of leaders in science, technology, engineering, and
							mathematics.
						</div>
					</article>
					<CarouselOne />

					<article
						id="update-section"
						className="flex flex-col gap-1 lg:gap-5 lg:mx-12 max-w-full"
					>
						<h1 className="text-2xl font-semibold font-heading text-[#00582C] lg:text-4xl lg:font-bold lg:mb-1">
							Updates on their Achievements
						</h1>
						<div
							className={`text-sm font-body text-[#333333] text-justify flex flex-col gap-1.5 lg:text-lg lg:gap-4`}
						>
							<p>
								Our innovative NewFielders are continuously
								pushing boundaries in exploration, achieving
								remarkable feats such as earning honors, taking
								up leadership roles, and actively engaging in a
								variety of extracurricular activities. Building
								on these achievements, our NewFielders
								consistently excel in both academic and personal
								realms. Here are some key points showcasing
								their exceptional accomplishments:
							</p>

							<ul className="list-disc pl-4 text-[14px] lg:text-[18px] flex flex-col gap-1">
								<li>
									NewFielders consistently excel academically,
									earning spots on the honors list and
									demonstrating a commitment to learning and
									intellectual growth.
								</li>
								<li>
									Many students assume leadership positions
									within the school community, highlighting
									their strong communication, teamwork, and
									decision-making abilities.
								</li>
								<li>
									Participation in diverse extracurricular
									activities not only enhances students'
									overall experiences but also cultivates a
									well-rounded skill set that extends beyond
									academics.
								</li>
							</ul>

							<p>
								Through their outstanding achievements,
								NewFielders inspire and motivate their peers to
								strive for excellence in all facets of life,
								fostering a culture of success and innovation in
								our school community.
							</p>
						</div>
					</article>
					<CarouselTwo />
				</section>
			</div>
			<CTA />
		</div>
	);
}
