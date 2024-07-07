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
            Welcome to the NFSSD’s Photo Gallery, a vibrant collection of
            snapshots capturing the essence of our educational community. Here,
            you'll discover a treasure trove of images showcasing our diverse
            school and class activities, each filled with the energy,
            creativity, and enthusiasm of our students and staff. From spirited
            classroom projects to exciting extracurricular events, our gallery
            offers a glimpse into the dynamic experiences that make our school a
            special place to learn and grow. Explore these moments and witness
            the joy, collaboration, and achievements that define our school
            spirit.
          </Article>

          <Article title="Interest Gorups" flex={false}>
            Welcome to an exciting school year with The NewFields STEM School of
            Davao’s Interest groups! We have a diverse range of interest
            groups/clubs tailored to spark your passions and foster a sense of
            community. Whether you're a budding artist, a tech enthusiast, or a
            star dancer, there's something for everyone. Join and make this
            school year unforgettable!
            {/* I dont know what to do with this table here */}
          </Article>

          {/* Added Supreme */}
          <Article title="Supreme Newfield's Government">
            The NewFields STEM School of Davao is excited to introduce the
            Supreme NewFields Government (SNG), a new student council aimed at
            enhancing the school's academic and social environment. This council
            will represent the student body, advocate for their needs, organize
            activities, and foster community and collaboration. The SNG election
            will be held in the first month of the school year, allowing
            candidates to campaign and share their visions for the school. This
            process ensures students can choose representatives who will best
            serve their interests. The NewFields STEM School of Davao believes
            the SNG will play a key role in creating a vibrant school year,
            empowering students to excel academically and socially.
          </Article>

            {/* New Article ba ni? */}
          <Article title="TNFSSD ALUMNI">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            obcaecati amet suscipit placeat, delectus laborum ducimus illum
            reprehenderit, sunt culpa dolores, ratione laboriosam! Aliquid
            necessitatibus quas tempore nemo. Sit, dicta!
          </Article>


        </section>
      </div>
      <CTA />
    </div>
  );
}
