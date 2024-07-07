import Hero from "../components/Hero";
import CTA from "../components/CTA";
import Article from "../components/Article";
import SubArticle from "../components/SubArticle";
import QuickLinks from "../components/QuickLinks";
import Image from "next/image";

export default function Admissions() {
    return (
        <div className="bg-[#F0F0F0] max-w-full">
            <Hero title="Admissions" />

            <div className="flex flex-row px-8 lg:px-28 h-auto relative bottom-16 gap-5 max-w-full">
                <QuickLinks currentPage="admission" />

                <section className="bg-white w-full lg:2/3 p-8 flex flex-col gap-5 lg:gap-8 lg:py-14 max-w-full">
                    <Article title="Why Choose Us?" />

                    <Image
                        className="-my-4 lg:-my-8"
                        src="/images/placeholder.png"
                        width={1000}
                        height={100}
                        alt="placeholder"
                    ></Image>

                    <Article>
                        <SubArticle title="Optimized STEM Curriculum">
                            Our school offers a dynamic STEM curriculum that
                            emphasizes hands-on learning and real-world
                            applications. This approach nurtures critical
                            thinking and problem-solving skills, essential for
                            future careers in science, technology, engineering,
                            and mathematics (STEM).
                        </SubArticle>
                        <SubArticle title="Modern Facilities and Qualified Faculty">
                            We are proud of our modern facilities and highly
                            qualified faculty. Our commitment to small class
                            sizes ensures personalized attention, helping
                            students thrive both academically and personally.
                        </SubArticle>
                        <SubArticle title="Enriching Extracurricular Activities">
                            Beyond academics, we provide diverse extracurricular
                            activities and partnerships with local industries.
                            These opportunities enhance learning, foster growth,
                            and offer valuable networking experiences.
                        </SubArticle>
                        <SubArticle title="Inclusive and Supportive Community">
                            Our inclusive community values and encourages every
                            student. We create an environment where all students
                            feel supported and are motivated to reach their full
                            potential.
                        </SubArticle>
                        <SubArticle title="Investing in the Future">
                            By choosing The NewFields STEM School of Davao,
                            students invest in their education and their future
                            as innovators and leaders in STEM fields. Join us
                            and be part of a transformative educational
                            experience.
                        </SubArticle>
                    </Article>

                    <Article title="Programs Offered">
                        <SubArticle title="Pre-School Level">
                            <Image
                                className="py-1 pb-5"
                                src={`/images/add-pre-1.jpg`}
                                alt="pre-1-img"
                                width={1000}
                                height={500}
                            />
                            ACCESSEDU, INC. (The NewFields STEM School of Davao)
                            has pioneered an innovative approach to early
                            childhood education by being the first institution
                            in Davao City to offer a comprehensive STEM
                            (Science, Technology, Engineering, and Mathematics)
                            curriculum starting from the Nursery level. This
                            trailblazing program is designed to cultivate
                            curiosity, critical thinking, and problem-solving
                            skills among young learners, setting a strong
                            foundation for their future academic and personal
                            growth.
                        </SubArticle>
                        <Image
                            src={`/images/add-pre-2.jpg`}
                            alt="pre-1-img"
                            width={1000}
                            height={500}
                        />
                        <SubArticle>
                            By integrating STEM concepts into the preschool
                            curriculum, NewFields aims to nurture a generation
                            of thinkers, creators, and innovators who are
                            well-prepared for the challenges of the 21st
                            century. At NewFields, the STEM curriculum for
                            pre-schoolers is crafted to be engaging and
                            age-appropriate, ensuring that learning is both fun
                            and educational. Through hands-on activities,
                            interactive lessons, and playful exploration,
                            children are introduced to basic scientific
                            principles, mathematical concepts, and technological
                            tools. For example, students might engage in simple
                            experiments to observe natural phenomena, use
                            building blocks to understand engineering basics, or
                            utilize age-appropriate software to develop early
                            computational skills.
                        </SubArticle>
                        <Image
                            src={`/images/add-pre-3.jpg`}
                            alt="pre-1-img"
                            width={1000}
                            height={500}
                        />
                        <SubArticle>
                            These activities not only make learning enjoyable
                            but also encourage children to ask questions,
                            explore their environment, and develop a love for
                            learning. Moreover, the school emphasizes a holistic
                            approach, incorporating elements of arts and
                            social-emotional learning into the STEM framework.
                            This ensures that while children are developing
                            their analytical and technical skills, they are also
                            growing socially, emotionally, and creatively. The
                            NewFields STEM School of Davao is committed to
                            providing a supportive and nurturing environment
                            where each child is seen as a unique individual with
                            their own strengths and interests.
                        </SubArticle>
                        <Image
                            src={`/images/add-pre-4.jpg`}
                            alt="pre-1-img"
                            width={1000}
                            height={500}
                        />
                        <SubArticle>
                            By starting STEM education at such an early age,
                            NewFields is helping to create a solid foundation
                            for lifelong learning and success in an increasingly
                            STEM-focused world.
                        </SubArticle>

                        <SubArticle title="Grade School Level">
                            <Image
                                className="py-1 pb-5"
                                src={`/images/add-gra-1.jpg`}
                                alt="pre-1-img"
                                width={1000}
                                height={500}
                            />
                            ACCESSEDU, INC. (The NewFields STEM School of Davao)
                            offers a dynamic and comprehensive grade school
                            program for students in Grades 1 through 6. Built on
                            the foundations of the Department of Education
                            (DEPED) curriculum guide and standards, this program
                            is enriched with specialized STEM (Science,
                            Technology, Engineering, and Mathematics) curriculum
                            designed to foster a deeper understanding and
                            appreciation of these fields from an early age. By
                            integrating these specialized elements, NewFields
                            aims to cultivate critical thinking, problem-solving
                            skills, and a passion for innovation among its young
                            learners.
                        </SubArticle>
                        <Image
                            src={`/images/add-gra-2.jpg`}
                            alt="pre-1-img"
                            width={1000}
                            height={500}
                        />
                        <SubArticle>
                            Beginning in Grade 4, students at NewFields are
                            introduced to Science investigatory projects, which
                            form a cornerstone of the school&apos;s emphasis on
                            hands-on learning and scientific inquiry. These
                            projects encourage students to engage actively with
                            the scientific method, from hypothesis formation to
                            experimentation and analysis. This early exposure
                            helps to demystify complex scientific concepts and
                            nurtures a sense of curiosity and exploration.
                            Students work on projects that often relate to
                            real-world problems, allowing them to see the
                            practical applications of their studies and the
                            impact of scientific research on everyday life.
                        </SubArticle>
                        <Image
                            src={`/images/add-gra-3.jpg`}
                            alt="pre-1-img"
                            width={1000}
                            height={500}
                        />
                        <SubArticle>
                            Complementing the robust in-class curriculum,
                            NewFields places a strong emphasis on experiential
                            learning through various out-of-school trips. These
                            excursions are carefully curated to align with the
                            lessons being taught, providing students with
                            firsthand experiences that reinforce and expand upon
                            classroom instruction.
                        </SubArticle>
                        <div className="flex flex-row gap-3">
                            <div className="w-8/12">
                                <Image
                                    src={`/images/add-gra-4.jpg`}
                                    alt="pre-1-img"
                                    width={1000}
                                    height={100}
                                />
                            </div>
                            <div className="w-6/12">
                                <Image
                                    src={`/images/G66.jpg`}
                                    alt="pre-1-img"
                                    width={1000}
                                    height={100}
                                />
                            </div>
                        </div>

                        <SubArticle>
                            Whether visiting science museums, participating in
                            nature walks, or touring technology centers, these
                            trips are designed to make learning tangible and
                            memorable. By connecting theoretical knowledge with
                            real-world experiences, NewFields ensures that
                            students not only absorb information but also
                            develop a lifelong love for learning and discovery.
                        </SubArticle>
                    </Article>

                    <Article title="Required Documents">
                        <SubArticle title="For Pre school (Nursery to Kinder)">
                            <ul className="list-decimal text-md ps-6">
                                <li>PSA Birth Certificate - 2 photocopies</li>
                                <li>2x2 recent ID Picture - 2 pc</li>
                                <li>Php 200.00 Assessment Fee</li>
                                <li>Result of Assessment</li>
                            </ul>
                        </SubArticle>

                        <SubArticle title="For Grade school">
                            <ul className="list-decimal ps-6">
                                <li>PSA Birth Certificate - 2 photocopies</li>
                                <li>2x2 recent ID Picture - 2 pc</li>
                                <li>
                                    Photocopy of latest report card (current
                                    school year)
                                </li>
                                <li>Php 200.00 Assessment Fee</li>
                                <li>Result of Assessment</li>
                            </ul>
                        </SubArticle>

                        <div>
                            <h1 className="italic underline pb-2 lg:text-[24px]">
                                Note
                            </h1>
                            <ul className="list-disc ps-6 text-sm italic">
                                <li>
                                    All applicants must pass the oral and
                                    written assessment.
                                </li>
                                <li>
                                    All applicants must have no grades below 80
                                    in all subject areas (for elementary only).
                                </li>
                            </ul>
                        </div>
                    </Article>

                    <Article title="Admission Procedure" />
                    <Image
                        className="-my-4 lg:-my-8"
                        src={`/images/add-addm.png`}
                        alt="admission"
                        width={1000}
                        height={1000}
                    />
                    <Article>
                        <div>
                            <h1 className="italic underline pb-2 lg:text-[24px]">
                                Note
                            </h1>
                            <ul className="list-disc ps-6 text-sm italic">
                                <li>
                                    The admission of new student applicants is
                                    based on the admission test results,
                                    academic records, school records, and
                                    interviews.
                                </li>
                                <li>
                                    The oral and written evaluations of the
                                    student applicant are not subjects for
                                    interpretation of scores and results to the
                                    parents/guardians. They are strictly
                                    confidential and become a part of the school
                                    records.
                                </li>
                            </ul>
                        </div>
                    </Article>
                    <Article title="Enrollment Procedure" />
                    <div className="flex flex-col md:flex-row gap-4 -mt-4 lg:-mt-8">
                        <div>
                            <Image
                                src={`/images/add-cont.png`}
                                alt="admission"
                                width={1000}
                                height={1000}
                            />
                        </div>
                        <div>
                            <Image
                                src={`/images/add-trans.png`}
                                alt="admission"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                </section>
            </div>
            <CTA />
        </div>
    );
}
