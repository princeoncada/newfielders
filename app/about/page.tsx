import Hero from '../components/Hero';
import Article from '../components/Article';
import SubArticle from '../components/SubArticle';
import Image from "next/image";

export default function About() {
    return (
        <div className="bg-[#F0F0F0]">
            <Hero title="About Us" />

            <div className="flex flex-row px-8 lg:px-28 h-auto relative bottom-16 gap-5">
                <section className="hidden w-1/3 lg:flex flex-col gap-5">
                    {/* for shynn */}
                    <div className="w-full h-[236px] bg-green-400"></div>
                    <div className="w-full h-[236px] bg-green-400"></div>
                    <div className="w-full h-[236px] bg-green-400"></div>
                </section>
                <section className="bg-white w-full lg:2/3 p-8 flex flex-col gap-5 lg:gap-8 lg:py-14">
                    <Article title="Vision" flex={false}>
                        <span className="font-bold">
                            The NewFields STEM School of Davao aims to produce
                            academically successful, scientifically literate,
                            socially aware, and respectful, responsible global
                            citizens.
                        </span>{" "}This goal is achieved through student-centered,
                        collaborative, and problem-based learning processes,
                        facilitated by passionate and knowledgeable educators.
                        Our educators are trained in science, technology,
                        engineering, and mathematics (STEM) philosophies and
                        applications.
                    </Article>

                    <Article title="Mission" flex={false}>
                        The NewFields STEM School of Davao{" "}
                        <span className="font-bold">
                            cultivates deep interest, appreciation, and skills
                            in science and mathematics
                        </span>{" "}
                        from early childhood through 12th grade. Our curriculum
                        focuses on the technology and engineering design
                        process, enhancing students&apos; analytical,
                        problem-solving, experimentation, collaboration, and
                        communication skills. We nurture their creative talents
                        and imagination, foster character education and good
                        citizenship, and create a culture of inquiry with their
                        peers and teachers.
                    </Article>

                    <Article title="Core Values">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent quis cursus diam. Nunc convallis elit eget est
                        cursus porttitor. Cras venenatis faucibus arcu, et porta
                        sapien consectetur in. Mauris ultrices elementum libero,
                        eget viverra nulla auctor ac. Pellentesque ligula dui,
                        sodales eu finibus nec, ultrices ac mi. Vestibulum a
                        cursus sapien. Nullam ut eros mauris. Nam pellentesque
                        nisi sed tellus semper, at venenatis mauris efficitur.
                    </Article>

                    <Image
                        className="py-2"
                        src="/images/placeholder.png"
                        width={1000}
                        height={100}
                        alt="placeholder"
                    ></Image>

                    <Article title="Our Philosophy">
                        <SubArticle title="Empowering Through STEM">
                            At The NewFields STEM School of Davao, founded by
                            Dr. Napoleon K. Juanillo Jr. in 2013, we are
                            committed to empowering Filipino youth through a
                            deep appreciation of STEM. Our goal is to cultivate
                            critical thinking, problem-solving, and research
                            skills, preparing students to excel in a globally
                            competitive environment.
                        </SubArticle>
                        <SubArticle title="Why STEM?">
                            STEM education is vital for success in the modern
                            world. It&apos;s not just about learning science and
                            technology; it&apos;s about developing essential
                            skills that lead to innovation and economic growth.
                            STEM careers offer better opportunities, higher
                            wages, and lower unemployment rates, making these
                            skills crucial for future success.
                        </SubArticle>
                        <SubArticle title="Shaping Tomorrow's Leaders">
                            Our problem-based and collaborative learning
                            approach fosters creativity, leadership, and
                            entrepreneurship. At NewFields, students are
                            encouraged to take risks, communicate effectively,
                            and grow into the next generation of Filipino
                            innovators who will lead and transform society. We
                            believe this journey, though challenging, is filled
                            with joy and discovery.
                        </SubArticle>
                    </Article>

                    <Article title="Our Method of Education">
                        <p>
                            The NewFields STEM School of Davao expects its
                            students to play their unique role in their
                            respective communities as a) Problem-Solvers, b)
                            Designers, c) Thinkers, d) Innovators, and e)
                            Leaders. As Problem-Solvers, they should be able to
                            define questions and problems, design investigations
                            to gather data, collect and organise data, draw
                            conclusions, and then apply understanding to new and
                            novel situations.
                        </p>

                        <ul className="list-disc flex flex-col gap-1 my-2 ml-4">
                            <li>
                                <span className="font-bold">As Designers,</span>{" "}
                                they should be able to recognize the needs of
                                the world and creatively design, test, redesign,
                                and then implement solution
                            </li>
                            <li>
                                <span className="font-bold">As Thinkers,</span>{" "}
                                they should be able to apply rational and
                                logical thought processes of science,
                                mathematics, and engineering design to
                                innovation and invention and possess a life-long
                                passion for learning.
                            </li>
                            <li>
                                <span className="font-bold">
                                    As Innovators,
                                </span>{" "}
                                they should be able to creatively use science,
                                mathematics, and technology concepts and
                                principles by applying them to the engineering
                                design process.
                            </li>
                            <li>
                                <span className="font-bold">
                                    And as Leaders,
                                </span>{" "}
                                they should be able to inspire, listen to,
                                communicate and work with others collaboratively
                                to embrace change in pursuit of the common good.
                            </li>
                        </ul>

                        <p>
                            ACCESSEDU, INC. (The NewFields STEM School of Davao)
                            also believes that STEM shapes our everyday
                            experiences and pervades every aspect of our lives.
                            We experience science as we deal with our natural
                            world: plants, animals (large, small, microbial),
                            food, air, fire, weather, natural disasters, lands
                            and oceans, fossil fuels, even our own bodies.
                        </p>

                        <p>
                            We encounter technology at every corner, right at
                            the palm of our hand through our smartphones and
                            other telecommunication gadgets. We look to
                            engineering for designs of roads, bridges,
                            buildings, houses, transportation, hospitals and a
                            plethora of systems. We use mathematics in almost
                            every transaction at the corner store, including
                            family budgets and taxes. The list is endless.
                        </p>
                        <p>
                            There are four key educational principles that drive
                            the approach to basic education by ACCESSEDU, INC.
                            (The NewFields STEM School of Davao).
                        </p>
                        <ul className="list-disc flex flex-col gap-1 my-2 ml-4">
                            <li>
                                <span className="font-bold">
                                    We seek to develop among the young a passion
                                    for life-long learning.
                                </span>{" "}
                                ACCESSEDU, INC. (The NewFields STEM School of
                                Davao) believes that education happens within
                                and outside the classroom. STEM disciplines,
                                which encompass practically everything in life,
                                help students to be curious, ask questions,
                                analyze data, and make connections as to why the
                                world exists as it does. By allowing students to
                                work collaboratively with their peers as well as
                                their teachers in exploring ideas in science and
                                get to the “aha” moment of understanding, we
                                inspire them to become life-long learners and
                                enable them to deploy their knowledge, learnings
                                and skills to new situations
                            </li>
                            <li>
                                <span className="font-bold">
                                    We seek to foster inquiry-based or
                                    problem-based learning.
                                </span>{" "}
                                ACCESSEDU, INC. (The NewFields STEM School of
                                Davao) believes that education happens within
                                and outside the classroom. STEM disciplines,
                                which encompass practically everything in life,
                                help students to be curious, ask questions,
                                analyze data, and make connections as to why the
                                world exists as it does. By allowing students to
                                work collaboratively with their peers as well as
                                their teachers in exploring ideas in science and
                                get to the “aha” moment of understanding, we
                                inspire them to become life-long learners and
                                enable them to deploy their knowledge, learnings
                                and skills to new situations
                                <p className="mt-1">
                                    The NewFields STEM School of Davao shall
                                    integrate academic and workplace/outside
                                    world experiences through field trips,
                                    camping, outings, office visits, industry
                                    visits, interviews, conversations,
                                    parent-guests, and other non-traditional
                                    classroom settings. Project-based learning
                                    will connect school work with the work of
                                    professionals, parents, organizations,
                                    social groups or other forums for
                                    service-learning experiences, including the
                                    home.
                                </p>
                            </li>
                            <li>
                                <span className="font-bold">
                                    We seek to equip the young with competencies
                                    and skills for the 21st Century.
                                </span>{" "}
                                To prepare for college, career and citizenship,
                                it&apos;s not enough to master academics.
                                Students also need to acquire a set of skills
                                that will last for a lifetime. These
                                competencies &#45; known as 21st -century skills
                                &#45; are summed as the “4Cs” by the Partnership
                                for 21st Century Skills. They include the
                                following: Collaboration, Creativity,
                                Communication and Critical Thinking. The 4Cs
                                will not replace academic learning goals.
                                Students still need to become good readers and
                                writers. The Big Capstone projects, which
                                constitute one of the two vital components of
                                the basic education program at The NewFields
                                STEM School of Davao, enable students to achieve
                                these competencies. In these Big Capstone
                                projects, students integrate the lens of
                                science, technology, engineering and mathematics
                                with other disciplines such as the arts and
                                humanities in working together to create
                                innovative solutions to real-world problems and
                                communicate their solutions with others. As they
                                carry out their investigations and projects,
                                they must access, analyze, and use the
                                information they need to complete the learning
                                tasks. While working through the task, students
                                build important life and career skills by
                                learning to manage their time, to become
                                self-directed workers and to collaborate
                                effectively with others. Using appropriate
                                technology tools to complete their task,
                                students discover the most effective and
                                efficient ways to access and manage the world of
                                digital information that is available to them.
                            </li>
                            <li>
                                <span className="font-bold">
                                    We seek to promote STEM careers.
                                </span>{" "}
                                The NewFields STEM School of Davao believes in
                                promoting STEM careers in the K-12 classroom.
                                There is no doubt that 80% of the jobs in the
                                global workforce will require STEM skills.
                            </li>
                        </ul>
                        <p>
                            As these are the disciplines that are widely
                            considered to be engines for innovation and economic
                            growth, we believe that we will contribute
                            significantly to bridging the STEM skills gap in the
                            country. Currently, the Philippines ranks 8th among
                            9 ASEAN countries in STEM education, ranks 112th
                            among 138 economies in science and mathematics, and
                            significantly falls behind Singapore, Brunei,
                            Malaysia, Indonesia, Thailand and Vietnam in STEM
                            fields.
                        </p>
                        <SubArticle title="Integrating STEM in Daily Life">
                            STEM education is integral to understanding and
                            interacting with the world. From observing nature to
                            using technology, engineering our environments, and
                            managing daily finances, STEM is everywhere. Our
                            curriculum emphasizes these connections, inspiring
                            curiosity and a deeper understanding of the world.
                        </SubArticle>
                        <SubArticle title="21st Century Skills and Real-World Learning">
                            Our teaching methods emphasize the “4Cs” —
                            Collaboration, Creativity, Communication, and
                            Critical Thinking. Through inquiry-based and
                            project-based learning, students gain not only
                            academic knowledge but also essential life skills.
                            They engage in activities that tie classroom
                            learning to real-world applications, preparing them
                            for future challenges in college, careers, and
                            citizenship.
                        </SubArticle>
                        <SubArticle title="Promoting STEM Careers">
                            We recognize the pivotal role of STEM in driving
                            innovation and economic growth. By promoting STEM
                            careers, we aim to bridge the skills gap and prepare
                            students for the growing demand in the global
                            workforce. Our goal is to inspire the next
                            generation of Filipino innovators and leaders who
                            will contribute to national and global prosperity.
                        </SubArticle>
                    </Article>
                    <Article title="The NewFields Team">
                        <p>
                            The Newfields Team is a dedicated and dynamic group
                            committed to fostering an effective and nurturing
                            educational environment. Leading the team is Maam
                            Helen Perpetua J. Onggo, a visionary directress
                            whose inspiring leadership drives innovation,
                            inclusivity, and academic excellence.
                        </p>
                        <SubArticle title="Administrative Staff">
                            The backbone of the school, our administrative staff
                            manage student records, coordinate events, and
                            maintain communication with parents and the
                            community, ensuring smooth operations and supporting
                            teachers and students.
                        </SubArticle>
                        <SubArticle title="Teachers">
                            Our educators are passionate professionals who
                            deliver high-quality education using diverse
                            teaching methods and technologies. They engage
                            students, foster a love of learning, and serve as
                            mentors and role models, guiding both academic and
                            personal growth.
                        </SubArticle>
                        <SubArticle title="General Services Staff">
                            Our general services team ensures a safe, clean, and
                            welcoming environment. From custodians to security
                            personnel, their efforts are vital to creating a
                            conducive learning space.
                        </SubArticle>
                        <p>
                            Under Maam Helens leadership, the NewFields Team
                            collaborates to create a harmonious educational
                            ecosystem that nurtures every student s potential,
                            ensuring they achieve academic success and develop
                            into well-rounded individuals.
                        </p>
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
        </div>
    );
}