import Hero from "../components/Hero";
import CTA from "../components/CTA";
import Article from "../components/Article";
import SubArticle from "../components/SubArticle";
import QuickLinks from "../components/QuickLinks";
import Image from "next/image";

export default function Contact() {
	return (
		<div className="bg-[#F0F0F0]">
			<Hero title="Contact Us" />

			<div className="flex flex-row px-8 lg:px-28 h-auto relative bottom-16 gap-5">
				<QuickLinks currentPage="contact" />

				<section className="bg-white w-full lg:2/3 p-8 flex flex-col gap-5 lg:gap-8 lg:py-14">
					<Article>
						<h1 className="text-2xl font-semibold font-heading text-[#00582C] text-start lg:text-4xl lg:font-bold lg:mb-1 leading-8">
							We&apos;ve been <br className="lg:hidden" />
							waiting for you!
						</h1>
						<SubArticle title="Send us a Message">
							<form className="flex flex-col mt-1 gap-1 lg:gap-2 items-start">
								<label className="relative text-gray-400 focus-within:text-gray-600 flex flex-row justify-start w-full">
									<Image
										className="pointer-events-none w-6 h-6 text-red-300 absolute top-[6px] left-[6px] lg:top-[11px] lg:left-[11px]"
										src={`/svg/user.svg`}
										alt=""
										width={100}
										height={100}
									/>

									<input
										name="email"
										id="email"
										placeholder="Name"
										className="w-full rounded-[6px] form-input border border-b-2 lg:border-b-[3px] border-gray-900 py-2 bg-white placeholder:text-[#555555] text-black appearance-none block pl-[32px] lg:pl-[40px] focus:outline-none text-[16px]"
									/>
								</label>
								<label className="relative text-gray-400 focus-within:text-gray-600 flex flex-row justify-start w-full">
									<Image
										className="pointer-events-none w-6 h-6 text-red-300 absolute top-[6px] left-[6px] lg:top-[11px] lg:left-[11px]"
										src={`/svg/mail.svg`}
										alt=""
										width={100}
										height={100}
									/>

									<input
										name="email"
										id="email"
										placeholder="Email"
										className="w-full rounded-[6px] form-input border border-b-2 lg:border-b-[3px] border-gray-900 py-2 bg-white placeholder:text-[#555555] text-black appearance-none block pl-[32px] lg:pl-[40px] focus:outline-none text-[16px]"
									/>
								</label>
								<label className="relative text-gray-400 focus-within:text-gray-600 flex flex-row justify-start w-full">
									<Image
										className="pointer-events-none w-6 h-6 text-red-300 absolute top-[6px] left-[6px] lg:top-[11px] lg:left-[11px]"
										src={`/svg/phone.svg`}
										alt=""
										width={100}
										height={100}
									/>

									<input
										name="email"
										id="email"
										placeholder="Phone Number"
										className="w-full rounded-[6px] form-input border border-b-2 lg:border-b-[3px] border-gray-900 py-2 bg-white placeholder:text-[#555555] text-black appearance-none block pl-[32px] lg:pl-[40px] focus:outline-none text-[16px]"
									/>
								</label>
								<label className="relative text-gray-400 focus-within:text-gray-600 flex flex-row justify-start w-full">
									<Image
										className="pointer-events-none w-6 h-6 text-red-300 absolute top-[6px] left-[6px] lg:top-[11px] lg:left-[11px]"
										src={`/svg/book.svg`}
										alt=""
										width={100}
										height={100}
									/>

									<input
										name="email"
										id="email"
										placeholder="Subject"
										className="w-full rounded-[6px] form-input border border-b-2 lg:border-b-[3px] border-gray-900 py-2 bg-white placeholder:text-[#555555] text-black appearance-none block pl-[32px] lg:pl-[40px] focus:outline-none text-[16px]"
									/>
								</label>
								<label className="relative text-gray-400 focus-within:text-gray-600 flex flex-row justify-start w-full">
									<Image
										className="pointer-events-none w-6 h-6 text-red-300 absolute top-[6px] left-[6px] lg:top-[11px] lg:left-[11px]"
										src={`/svg/book-open.svg`}
										alt=""
										width={100}
										height={100}
									/>

									<textarea
										name="email"
										id="email"
										placeholder="Message"
										rows={10}
										className="w-full rounded-[6px] form-input border border-b-2 lg:border-b-[3px] border-gray-900 py-2 bg-white placeholder:text-[#555555] text-black appearance-none block pl-[32px] pr-[12px] lg:pl-[40px] focus:outline-none text-[16px]"
									></textarea>
								</label>
                                <button className="bg-[#017E3F] text-white p-2.5 px-8 mt-1 lg:text-lg font-bold lg:py-3 lg:px-16">Submit</button>
							</form>
						</SubArticle>

                        <div></div>

						<SubArticle title="Contact Us Directly">
							<div className="pt-2">
								<ul>
									<li>
										<span className="font-bold">
											Landline:{" "}
										</span>
										(082) 291 5036
									</li>
									<li>
										<span className="font-bold">
											Mobile:{" "}
										</span>
										0995 269 1712
									</li>
									<li>
										<span className="font-bold">
											Email:
										</span>
										<ul className="italic">
											<li>
												Admin -
												<span className="font-medium">
													{" "}
													thenewfields.school@yahoo.com
												</span>
											</li>
											<li>
												Cashier -
												<span className="font-medium">
													{" "}
													thenewfields.cashier@gmail.com
												</span>
											</li>
											<li>
												Registrar -
												<span className="font-medium">
													{" "}
													thenewfields.registrar@gmail.com
												</span>
											</li>
										</ul>
									</li>
								</ul>
								<br />
							</div>
							<p className="font-bold">Visit Us:</p>

							<div className="italic">
								<p>P9B, BLK 44, LOTS 7-16, DECA Homes</p>
								<p>Tacunan, Davao City, Davao del Sur, 8000</p>
							</div>
						</SubArticle>

					</Article>
					<Image
						className="py-2"
						src="/images/placeholder.png"
						width={1000}
						height={100}
						alt="placeholder"
					></Image>
				</section>
			</div>
			<CTA />
		</div>
	);
}
