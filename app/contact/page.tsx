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

                {/* di man sya lisod hahhaa */}
              <label className="relative text-gray-400 focus-within:text-gray-600 block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>

                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email@kemuscorp.com"
                  className="form-input border border-gray-900 py-1 bg-white placeholder-gray-400 text-gray-500 appearance-none w-fit block pl-14 focus:outline-none"
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
