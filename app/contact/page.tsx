"use client"

import Hero from "../components/Hero";
import CTA from "../components/CTA";
import SubArticle from "../components/SubArticle";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});

	const handleChange = (e: { target: { name: any; value: any } }) => {
	setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: { preventDefault: () => void }) => {
	e.preventDefault();

	try {
		const response = await fetch("/contact/api/send", {
		// Adjust the API route as necessary
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(formData),
		});
		const data = await response.json();

		if (data.message) {
		alert("Email sent successfully!");
		} else {
		alert("Failed to send email.");
		}

	} catch (error) {
		console.error("Failed to send email:", error);
		alert("An error occurred while sending the email.");
	}
	};

	return (
		<div className="bg-[#F0F0F0]">
			<Hero title="Contact Us" />

			<div className="flex flex-row px-8 lg:px-28 h-auto relative bottom-16 gap-5 max-w-[1280px] mx-auto">
				<section className="hidden lg:block w-1/3">
					<div className="flex flex-col gap-5 sticky top-28">
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
								<Link href={`#email-section`}>Email Form</Link>
								<Link href={`#contact-section`}>
									Contact Details
								</Link>
								<Link href={`#location-section`}>Location</Link>
							</div>
						</div>
					</div>
				</section>

				<section className="bg-white w-full lg:2/3 p-8 flex flex-col gap-5 lg:gap-8 lg:py-14">
					<article className="flex flex-col gap-1 lg:gap-5 lg:mx-12 max-w-full">
						<h1
							id="email-section"
							className="text-2xl font-semibold font-heading text-[#00582C] lg:text-4xl lg:font-bold lg:mb-1"
						>
							We&apos;ve been <br className="lg:hidden" />
							waiting for you!
						</h1>
						<div
							className={`text-sm font-body text-[#333333] text-justify flex flex-col gap-1.5 lg:text-lg lg:gap-10`}
						>
							<SubArticle title="Send us a Message">
								<form onSubmit={handleSubmit} className="flex flex-col mt-1 gap-1 lg:gap-2 items-start">
									<label className="relative text-gray-400 focus-within:text-gray-600 flex flex-row justify-start w-full">
										<Image
											className="pointer-events-none w-6 h-6 text-red-300 absolute top-[6px] left-[6px] lg:top-[11px] lg:left-[11px]"
											src={`/svg/user.svg`}
											alt=""
											width={100}
											height={100}
										/>

										<input
											name="name"
											id="name"
											placeholder="Name"
											value={formData.name}
											onChange={handleChange}
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
											value={formData.email}
											onChange={handleChange}
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
											name="phone"
											id="phone"
											placeholder="Phone Number"
											value={formData.phone}
											onChange={handleChange}
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
											name="subject"
											id="subject"
											placeholder="Subject"
											value={formData.subject}
											onChange={handleChange}
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
											name="message"
											id="message"
											placeholder="Message"
											rows={10}
											value={formData.message}
											onChange={handleChange}
											className="w-full rounded-[6px] form-input border border-b-2 lg:border-b-[3px] border-gray-900 py-2 bg-white placeholder:text-[#555555] text-black appearance-none block pl-[32px] pr-[12px] lg:pl-[40px] focus:outline-none text-[16px]"
										></textarea>
									</label>
									<button className="bg-[#017E3F] text-white p-2.5 px-8 mt-1 lg:text-lg font-bold lg:py-3 lg:px-16">
										Submit
									</button>
								</form>
							</SubArticle>
							<div id="contact-section" className="flex flex-col lg:gap-2">
								<h2 className="font-heading text-lg text-[#017E3F] font-medium lg:text-2xl text-start">
									Contact Us Directly
								</h2>
								<div className="font-body text-[#333333] text-justify">
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
										<p>
											P9B, BLK 44, LOTS 7-16, DECA Homes
										</p>
										<p>
											Tacunan, Davao City, Davao del Sur,
											8000
										</p>
									</div>
								</div>
							</div>
						</div>
					</article>

					<div id="location-section" className="w-full">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.126616832511!2d125.4962916764629!3d7.111322292892269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f913c9b3566017%3A0xb1054b3c87885784!2sThe%20NewFields%20STEM%20School%20Of%20Davao!5e0!3m2!1sfil!2sph!4v1720711433794!5m2!1sfil!2sph"
							loading="lazy"
							title="Google Maps"
							className="w-full h-[400px]"
							referrerPolicy="no-referrer"
						></iframe>
					</div>
				</section>
			</div>
			<CTA />
		</div>
	);
}
