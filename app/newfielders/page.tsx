"use client";

/* eslint-disable react/no-unescaped-entities */
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import Article from "../components/Article";
import SubArticle from "../components/SubArticle";
import QuickLinks from "../components/QuickLinks";
import Image from "next/image";

export default function NewFielders() {
    return (
        <div className="bg-[#F0F0F0]">
            <Hero title="NewFielder's Life" />

            <div className="flex flex-row px-8 lg:px-28 h-auto relative bottom-16 gap-5">
                <QuickLinks />

                <section className="bg-white w-full lg:2/3 p-8 flex flex-col gap-5 lg:gap-8 lg:py-14">
                    <Article title="School Activties" flex={false}>
                        Welcome to the NFSSD&apos;s Photo Gallery, a vibrant
                        collection of snapshots capturing the essence of our
                        educational community. Here, you'll discover a treasure
                        trove of images showcasing our diverse school and class
                        activities, each filled with the energy, creativity, and
                        enthusiasm of our students and staff. From spirited
                        classroom projects to exciting extracurricular events,
                        our gallery offers a glimpse into the dynamic
                        experiences that make our school a special place to
                        learn and grow. Explore these moments and witness the
                        joy, collaboration, and achievements that define our
                        school spirit.
                    </Article>

                    <Article title="Interest Groups" flex={false}>
                        Welcome to an exciting school year with The NewFields
                        STEM School of Davao&apos;s Interest groups! We have a
                        diverse range of interest groups/clubs tailored to spark
                        your passions and foster a sense of community. Whether
                        you're a budding artist, a tech enthusiast, or a star
                        dancer, there's something for everyone. Join and make
                        this school year unforgettable!
                        <div className="flex flex-col gap-4 mt-4">
                            <div className="flex flex-col gap-4 lg:flex-row max-w-full justify-center">
                                <button
                                    className="btn btn-ghost hover:bg-white w-full md:w-1/2 h-64 shadow-md border-gray-100"
                                    onClick={() => {
                                        const modal = document.getElementById(
                                            "glee-modal"
                                        ) as HTMLDialogElement;
                                        if (modal) {
                                            modal.showModal();
                                        }
                                    }}
                                >
                                    <Image
                                        src="/images/ig/g.png"
                                        alt="glee-club"
                                        width={1000}
                                        height={1000}
                                    />
                                </button>
                                <button
                                    className="btn btn-ghost hover:bg-white w-full md:w-1/2 h-64 shadow-md border-gray-100"
                                    onClick={() => {
                                        const modal = document.getElementById(
                                            "dance-modal"
                                        ) as HTMLDialogElement;
                                        if (modal) {
                                            modal.showModal();
                                        }
                                    }}
                                >
                                    <Image
                                        src="/images/ig/d.png"
                                        alt="dance-club"
                                        width={1000}
                                        height={1000}
                                    />
                                </button>
                            </div>

                            <div className="flex flex-col gap-4 lg:flex-row max-w-full justify-center">
                                <button
                                    className="btn btn-ghost hover:bg-white w-full md:w-1/2 h-64 shadow-md border-gray-100"
                                    onClick={() => {
                                        const modal = document.getElementById(
                                            "chess-modal"
                                        ) as HTMLDialogElement;
                                        if (modal) {
                                            modal.showModal();
                                        }
                                    }}
                                >
                                    <Image
                                        src="/images/ig/cc.png"
                                        alt="chess-club"
                                        width={1000}
                                        height={1000}
                                    />
                                </button>
                                <button
                                    className="btn btn-ghost hover:bg-white w-full md:w-1/2 h-64 shadow-md border-gray-100"
                                    onClick={() => {
                                        const modal = document.getElementById(
                                            "church-modal"
                                        ) as HTMLDialogElement;
                                        if (modal) {
                                            modal.showModal();
                                        }
                                    }}
                                >
                                    <Image
                                        src="/images/ig/c.png"
                                        alt="church-club"
                                        width={1000}
                                        height={1000}
                                    />
                                </button>
                            </div>

                            <div className="flex flex-col gap-4 lg:flex-row max-w-full justify-center">
                                <button
                                    className="btn btn-ghost hover:bg-white w-full md:w-1/2 h-64 shadow-md border-gray-100"
                                    onClick={() => {
                                        const modal = document.getElementById(
                                            "bs-modal"
                                        ) as HTMLDialogElement;
                                        if (modal) {
                                            modal.showModal();
                                        }
                                    }}
                                >
                                    <Image
                                        src="/images/ig/bs.png"
                                        alt="boys-club"
                                        width={1000}
                                        height={1000}
                                    />
                                </button>
                                <button
                                    className="btn btn-ghost hover:bg-white w-full md:w-1/2 h-64 shadow-md border-gray-100"
                                    onClick={() => {
                                        const modal = document.getElementById(
                                            "gs-modal"
                                        ) as HTMLDialogElement;
                                        if (modal) {
                                            modal.showModal();
                                        }
                                    }}
                                >
                                    <Image
                                        src="/images/ig/gs.png"
                                        alt="girls-club"
                                        width={1000}
                                        height={1000}
                                    />
                                </button>
                            </div>

                            <div className="flex flex-col gap-4 lg:flex-row max-w-full justify-center">
                                <button
                                    className="btn btn-ghost hover:bg-white w-full md:w-1/2 h-64 shadow-md border-gray-100"
                                    onClick={() => {
                                        const modal = document.getElementById(
                                            "art-modal"
                                        ) as HTMLDialogElement;
                                        if (modal) {
                                            modal.showModal();
                                        }
                                    }}
                                >
                                    <Image
                                        src="/images/ig/a.png"
                                        alt="art-club"
                                        width={1000}
                                        height={1000}
                                    />
                                </button>
                                <button
                                    className="btn btn-ghost hover:bg-white w-full md:w-1/2 h-64 shadow-md border-gray-100"
                                    onClick={() => {
                                        const modal = document.getElementById(
                                            "journalism-modal"
                                        ) as HTMLDialogElement;
                                        if (modal) {
                                            modal.showModal();
                                        }
                                    }}
                                >
                                    <Image
                                        src="/images/ig/j.png"
                                        alt="journalism-club"
                                        width={1000}
                                        height={1000}
                                    />
                                </button>
                            </div>
                        </div>
                    </Article>

                    <div className="-my-3">
                        <dialog id="glee-modal" className="modal">
                            <div className="modal-box bg-white text-black">
                                <h3 className="font-bold text-lg">Glee Club</h3>
                                <p className="py-4">
                                    A vibrant community for students who love to
                                    express themselves through music. Members
                                    gather to practice vocal techniques, learn
                                    new songs, and perform at school events and
                                    competitions. Whether you're a seasoned
                                    singer or just starting out, this club
                                    provides a supportive environment to develop
                                    your talents and share your passion for
                                    singing.
                                </p>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                        <dialog id="dance-modal" className="modal">
                            <div className="modal-box bg-white text-black">
                                <h3 className="font-bold text-lg">
                                    Dance Club
                                </h3>
                                <p className="py-4">
                                    The Dancing Club welcomes students who enjoy
                                    moving to the rhythm and expressing
                                    themselves through dance. From contemporary
                                    and jazz to hip hop and ballet, this club
                                    explores a variety of dance styles. Members
                                    work together to choreograph routines,
                                    improve their dance skills, and perform at
                                    school functions and local events.
                                </p>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                        <dialog id="chess-modal" className="modal">
                            <div className="modal-box bg-white text-black">
                                <h3 className="font-bold text-lg">
                                    Chess Club
                                </h3>
                                <p className="py-4">
                                    A haven for strategic thinkers and lovers of
                                    the classic game of chess. Students meet
                                    regularly to play friendly matches,
                                    participate in tournaments, and study
                                    advanced strategies. This club fosters
                                    critical thinking, patience, and
                                    sportsmanship, making it a great place to
                                    challenge yourself and meet fellow chess
                                    enthusiasts.
                                </p>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                        <dialog id="church-modal" className="modal">
                            <div className="modal-box bg-white text-black">
                                <h3 className="font-bold text-lg">
                                    Church Servers Club
                                </h3>
                                <p className="py-4">
                                    The Church Servers Club is dedicated to
                                    students who wish to serve their local
                                    church community. Members participate in
                                    various church activities, assist during
                                    services, and engage in community service
                                    projects. This club promotes values of
                                    faith, service, and fellowship, providing a
                                    meaningful way to give back to the
                                    community.
                                </p>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                        <dialog id="bs-modal" className="modal">
                            <div className="modal-box bg-white text-black">
                                <h3 className="font-bold text-lg">
                                    Boy Scout of the Philippines
                                </h3>
                                <p className="py-4">
                                    The Boy Scouts Club focuses on outdoor
                                    adventure, leadership, and community
                                    service. Members participate in activities
                                    like camping, hiking, and learning survival
                                    skills, while also earning merit badges for
                                    various achievements. This club helps
                                    students develop a strong sense of
                                    responsibility, teamwork, and citizenship.
                                </p>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                        <dialog id="gs-modal" className="modal">
                            <div className="modal-box bg-white text-black">
                                <h3 className="font-bold text-lg">
                                    Girl Scout of the Philippines
                                </h3>
                                <p className="py-4">
                                    The Girl Scouts Club empowers young women
                                    through a variety of activities that promote
                                    leadership, community service, and personal
                                    growth. Members engage in outdoor
                                    adventures, earn badges for new skills, and
                                    work on projects that benefit their
                                    community. This club fosters confidence,
                                    independence, and a strong sense of
                                    camaraderie.
                                </p>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                        <dialog id="art-modal" className="modal">
                            <div className="modal-box bg-white text-black">
                                <h3 className="font-bold text-lg">Art Club</h3>
                                <p className="py-4">
                                    A creative space for students who are
                                    passionate about visual arts. Members
                                    explore different mediums such as painting,
                                    drawing, sculpture, and digital art. The
                                    club provides opportunities to showcase
                                    their work in school exhibitions and
                                    community art shows. It’s a great way to
                                    develop artistic skills and express
                                    creativity.
                                </p>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                        <dialog id="journalism-modal" className="modal">
                            <div className="modal-box bg-white text-black">
                                <h3 className="font-bold text-lg">
                                    Journalism Club
                                </h3>
                                <p className="py-4">
                                    The Journalism/Writers Club is for students
                                    who have a passion for writing and
                                    storytelling. Members work on school
                                    publications, such as the newspaper or
                                    literary magazine, and participate in
                                    writing workshops to hone their craft. This
                                    club is a fantastic way to improve writing
                                    skills, explore different genres, and share
                                    your voice with a broader audience.
                                </p>
                            </div>
                            <form method="dialog" className="modal-backdrop">
                                <button>close</button>
                            </form>
                        </dialog>
                    </div>

                    {/* Added Supreme */}
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

                    {/* New Article ba ni? */}
                    <Article title="TNFSSD ALUMNI">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veniam obcaecati amet suscipit placeat, delectus laborum
                        ducimus illum reprehenderit, sunt culpa dolores, ratione
                        laboriosam! Aliquid necessitatibus quas tempore nemo.
                        Sit, dicta!
                    </Article>
                </section>
            </div>
            <CTA />
        </div>
    );
}
