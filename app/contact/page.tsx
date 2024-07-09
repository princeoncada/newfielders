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
          <Article title="We've been waiting for you!">
            <SubArticle title="Send us a Message">

              <label className="relative text-gray-400 focus-within:text-gray-600 flex flex-row justify-start">
                <Image className="pointer-events-none w-7 h-7 text-red-300 absolute top-1/2 transform -translate-y-1/2 left-2.5" src={`/svg/user.svg`} alt="" width={100} height={100} />

                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Name"
                  className="form-input border border-gray-900 py-3 bg-white placeholder:text-[#555555] text-black appearance-none w-fit block pl-[42px] focus:outline-none text-[20px]"
                />
              </label>

              <label className="relative text-gray-400 focus-within:text-gray-600 flex flex-row justify-start">
                <Image className="pointer-events-none w-7 h-7 text-red-300 absolute top-1/2 transform -translate-y-1/2 left-2.5" src={`/svg/user.svg`} alt="" width={100} height={100} />

                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Name"
                  className="form-input border border-gray-900 py-3 bg-white placeholder:text-[#555555] text-black appearance-none w-fit block pl-[42px] focus:outline-none text-[20px]"
                />
              </label>

              
            </SubArticle>
            <SubArticle title="Contact Us Directly">
            <div className="pt-2">
                <ul>
                  <li>
                    <span className="font-bold">Landline:</span>
                    (082) 291 5036
                  </li>
                  <li>
                    <span className="font-bold">Mobile:</span>
                    0995 269 1712
                  </li>
                  <li>
                    <span className="font-bold">Email:</span>
                    <ul className="italic">
                      <li>
                        Admin - 
                        <span className="font-medium">
                          thenewfields.school@yahoo.com
                        </span>
                      </li>
                      <li>
                        Cashier - 
                        <span className="font-medium">
                          thenewfields.cashier@gmail.com
                        </span>
                      </li>
                      <li>
                        Registrar - 
                        <span className="font-medium">
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

            {/* Placeholder for google maps */}
            <Image
              className="py-2"
              src="/images/placeholder.png"
              width={1000}
              height={100}
              alt="placeholder"
            ></Image>
          </Article>
        </section>
      </div>
      <CTA />
    </div>
  );
}
