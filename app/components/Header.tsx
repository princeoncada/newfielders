"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {

    const [showMenu, setShowMenu] = useState(false);

    function handleClick() {
        setShowMenu(x => !x);
    }

    return (
		<>
			<header className="relative bg-white flex flex-row justify-between p-5 z-50 font-heading xl:hidden">
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
					className="flex flex-col justify-center items-start gap-1.5"
				>
					<div
						className={`w-8 h-1 bg-black transition-all duration-300 ease-in-out ${
							showMenu ? "rotate-45 translate-y-2.5" : ""
						}`}
					></div>
					<div
						className={`h-1 bg-black transition-all duration-300 ease-in-out ${
							showMenu ? "w-0" : "w-8"
						}`}
					></div>
					<div
						className={`w-8 h-1 bg-black transition-all duration-300 ease-in-out ${
							showMenu ? "-rotate-45 -translate-y-2.5" : ""
						}`}
					></div>
				</button>
			</header>

			<menu className="xl:hidden">
				<div
					className={`absolute w-screen max-w-full text-[#333333] bg-[#F0F0F0] flex flex-col items-end p-5 transition-all duration-300 ease-in-out ${
						showMenu ? "" : "-translate-y-64"
					} font-heading gap-3 text-sm`}
				>
					<Link href="/">Home</Link>
					<Link href="/about">About Us</Link>
					<Link href="#">Admissions</Link>
					<Link href="#">News</Link>
					<Link href="#">NewFielders Life</Link>
					<Link href="#">Contact Us</Link>
				</div>
			</menu>


			<header className="relative bg-white hidden xl:flex flex-row justify-between p-5 px-10 z-50 font-heading">
				<div className="flex flex-row gap-4">
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
							The NewField&apos;s STEM
						</div>
						<div className="text-[16px] text-[#333333]">
							School of Davao
						</div>
					</div>
				</div>
				<div className="flex flex-row items-center gap-8 text-[#017E3F] text-[1rem]">
					<Link href="/">Home</Link>
					<Link href="/about">About Us</Link>
					<Link href="#">Admissions</Link>
					<Link href="#">News</Link>
					<Link href="#">NewFielders Life</Link>
					<Link href="#">Contact Us</Link>
				</div>
			</header>
		</>
	);
}