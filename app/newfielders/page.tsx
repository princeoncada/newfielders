/* eslint-disable react/no-unescaped-entities */
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import Article from "../components/Article";
import QuickLinks from "../components/QuickLinks";
import Groups from "./components/Groups";
import Modals from "./components/Modals";
import Image from "next/image";
import Carousel from "./components/Carousel";

export default function NewFielders() {
    return (
        <div className="bg-[#F0F0F0]">
            <Hero title="NewFielder's Life" />

            <div className="flex flex-row px-8 lg:px-28 h-auto relative bottom-16 gap-5 max-w-[1280px] mx-auto">
                <QuickLinks />

                <section className="bg-white w-full lg:2/3 p-8 flex flex-col gap-5 lg:gap-8 lg:py-14">
                    <Article title="School Activties" flex={false}>
                        Welcome to the NFSSD&apos;s Photo Gallery, a vibrant
                        collection of snapshots capturing the essence of our
                        educational community. Here, you'll discover a treasure
                        trove of images showcasing our diverse school and
                        className activities, each filled with the energy,
                        creativity, and enthusiasm of our students and staff.
                        From spirited classroom projects to exciting
                        extracurricular events, our gallery offers a glimpse
                        into the dynamic experiences that make our school a
                        special place to learn and grow. Explore these moments
                        and witness the joy, collaboration, and achievements
                        that define our school spirit.
                    </Article>

                    <Article title="Photo Gallery" flex={false} />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 -mt-3 md:-mt-10">
                        <div className="flex flex-col gap-4">
                            <div>
                                <img
                                    className="h-auto max-w-full rounded-md"
                                    src="/images/add-pre-1.jpg"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="h-auto-w-full rounded-md"
                                    src="/images/add-pre-2.jpg"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="h-auto max-w-full rounded-md"
                                    src="/images/add-pre-3.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div>
                                <img
                                    className="h-auto max-w-full rounded-md"
                                    src="/images/add-pre-4.jpg"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="h-auto-w-full rounded-md"
                                    src="/images/add-gra-1.jpg"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="h-auto max-w-full rounded-md"
                                    src="/images/add-gra-2.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="hidden md:flex flex-col gap-4">
                            <div>
                                <img
                                    className="h-auto max-w-full rounded-md"
                                    src="/images/add-gra-3.jpg"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="h-auto-w-full rounded-md"
                                    src="/images/add-gra-4.jpg"
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    className="h-auto max-w-full rounded-md"
                                    src="/images/DSC_7818.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>

                    <Article title="Interest Groups" flex={false}>
                        Welcome to an exciting school year with The NewFields
                        STEM School of Davao&apos;s Interest groups! We have a
                        diverse range of interest groups/clubs tailored to spark
                        your passions and foster a sense of community. Whether
                        you're a budding artist, a tech enthusiast, or a star
                        dancer, there's something for everyone. Join and make
                        this school year unforgettable!
                        <Groups />
                    </Article>

                    <Modals />

                    <Article title="Supreme Newfield's Government">
                        The NewFields STEM School of Davao is excited to
                        introduce the Supreme NewFields Government (SNG), a new
                        student council aimed at enhancing the school's academic
                        and social environment. This council will represent the
                        student body, advocate for their needs, organize
                        activities, and foster community and collaboration. The
                        SNG election will be held in the first month of the
                        school year, allowing candidates to campaign and share
                        their visions for the school. This process ensures
                        students can choose representatives who will best serve
                        their interests. The NewFields STEM School of Davao
                        believes the SNG will play a key role in creating a
                        vibrant school year, empowering students to excel
                        academically and socially.
                    </Article>

                    <Article title="TNFSSD Alumni">
                        The NewFields STEM School of Davao is renowned for
                        producing exceptional students who excel in various
                        fields. Among its alumni are several individuals who
                        have made significant achievements since graduating in
                        grade 6. These alumni exemplify the high standards and
                        quality education provided by The NewFields STEM School
                        of Davao, showcasing the school's commitment to
                        nurturing the next generation of leaders in science,
                        technology, engineering, and mathematics.
                    </Article>
                    <Carousel />
                </section>
            </div>
            <CTA />
        </div>
    );
}
