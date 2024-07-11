"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
	const [showMenu, setShowMenu] = useState(false);

	function handleClick() {
		setShowMenu((x) => !x);
	}

	return (
		<>
			<header className="sticky top-0 bg-white flex flex-row justify-between p-5 z-50 font-heading xl:hidden w-full">
				<div className="flex flex-row gap-2">
					<div className="flex items-center">
						<Image
							src="/images/TNFSSD LOGO.png"
							alt="none"
							width="60"
							height="100"
						/>
					</div>
					<div>
						<div className="text-lg font-medium text-[#00582C]">
							The NewFields STEM
						</div>
						<div className="text-sm text-[#333333]">
							School of Davao
						</div>
					</div>
				</div>
				<button
					onClick={handleClick}
					className="flex flex-col justify-center items-end gap-1.5"
				>
					<div
						className={`w-8 h-1 bg-black transition-all duration-300 ease-in-out ${
							showMenu ? "-rotate-45 translate-y-2.5" : ""
						}`}
					></div>
					<div
						className={`h-1 bg-black transition-all duration-300 ease-in-out ${
							showMenu ? "w-0" : "w-8"
						}`}
					></div>
					<div
						className={`w-8 h-1 bg-black transition-all duration-300 ease-in-out ${
							showMenu ? "rotate-45 -translate-y-2.5" : ""
						}`}
					></div>
				</button>
			</header>

			<menu className="xl:hidden fixed top-20 z-20 w-full">
				<div
					className={`z-10 absolute w-screen max-w-full bg-[#F0F0F0] text-[#333333]  flex flex-col items-end p-5 transition-all duration-300 ease-in-out ${
						showMenu ? "" : "-translate-y-64"
					} font-heading gap-3 text-sm`}
				>
					<Link href="/">Home</Link>
					<Link href="/about">About Us</Link>
					<Link href="/admission">Admissions</Link>
					<Link href="/news">News</Link>
					<Link href="/newfielders">NewFielders Life</Link>
					<Link href="/contact">Contact Us</Link>
				</div>
			</menu>

			<header className="bg-white z-50 font-heading sticky top-0 w-full">
				<div className="hidden lg:flex flex-row justify-between p-5 px-10 max-w-[1280px] mx-auto">
					<Link href={`/`} className="flex flex-row gap-4">
						<div className="flex items-center">
							<Image
								src="/images/TNFSSD LOGO.png"
								alt="none"
								width="100"
								height="100"
							/>
						</div>
						<div className="flex flex-col justify-center">
							<div className="text-[24px] font-medium text-[#00582C]">
								The NewFields STEM
							</div>
							<div className="text-[16px] text-[#333333]">
								School of Davao
							</div>
						</div>
					</Link>
					<div className="flex flex-row items-center gap-8 text-[#017E3F] text-[1rem]">
						<Link href="/">Home</Link>
						<Link href="/about">About Us</Link>
						<Link href="/admission">Admissions</Link>
						<Link href="/news">Events</Link>
						<Link href="/newfielders">NewFielders Life</Link>
						<Link href="/contact">Contact Us</Link>
					</div>
				</div>
			</header>
		</>
	);
}
