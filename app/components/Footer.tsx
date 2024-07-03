import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <>
            <footer className="bg-[#028141] text-white font-heading p-5 py-10 text-[14px] xl:hidden flex flex-col gap-5">
                <div><Image src="/images/TNFSSD LOGO.png" alt="none" width="100" height="100"/></div>
                <div>
                    P9B, BLK 44, LOTS 7-16, DECA Homes
                    <br />
                    Tacunan, Davao City, Daval del Sur, 8000 
                </div>
                <div>
                    Landline: (082) 291 - 5036
                    <br />
                    Mobile: 0995 - 269 - 1712
                    <br />
                    Email: thenewfields.school@yahoo.com
                </div>
                <div className="flex flex-row gap-5">
                    <div className="flex flex-col gap-1">
                        <Link href="#">About Us</Link>
                        <Link href="#">Admission</Link>
                        <Link href="#">Events</Link>
                    </div>
                    <div className="flex flex-col gap-1">
                        <Link href="#">NewFielder's Life</Link>
                        <Link href="#">Contact Us</Link>
                    </div>
                </div>
                <div className="flex flex-row gap-1 text-2xl">
                    <Link href="#"><i className='bx bxl-facebook-square'></i></Link>
                    <Link href="#"><i className='bx bxl-instagram' ></i></Link>
                    <Link href="#"><i className='bx bxl-linkedin-square' ></i></Link>
                </div>
            </footer>

            <footer className="bg-[#028141] text-white h-[416px] font-heading p-5 py-[117px] text-xl hidden xl:flex flex-row justify-center items-center">
                <div className="mr-7"><Image src="/images/TNFSSD LOGO.png" alt="none" width="230" height="100"/></div>
                <div className="flex flex-col h-full justify-between mr-[180px]">
                    <div>
                        P9B, BLK 44, LOTS 7-16, DECA Homes
                        <br />
                        Tacunan, Davao City, Daval del Sur, 8000 
                    </div>
                    <div>
                        Landline: (082) 291 - 5036
                        <br />
                        Mobile: 0995 - 269 - 1712
                        <br />
                        Email: thenewfields.school@yahoo.com
                    </div>
                </div>
                
                <div className="flex flex-col h-full justify-between">
                    <div className="flex flex-row gap-12">
                        <div className="flex flex-col gap-3">
                            <Link href="#">About Us</Link>
                            <Link href="#">Admission</Link>
                            <Link href="#">Events</Link>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Link href="#">NewFielder's Life</Link>
                            <Link href="#">Contact Us</Link>
                        </div>
                    </div>
                    
                    <div className="flex flex-row gap-1 text-4xl">
                        <Link href="#"><i className='bx bxl-facebook-square'></i></Link>
                        <Link href="#"><i className='bx bxl-instagram' ></i></Link>
                        <Link href="#"><i className='bx bxl-linkedin-square' ></i></Link>
                    </div>
                </div>
            </footer>
        </>
    ) 
}