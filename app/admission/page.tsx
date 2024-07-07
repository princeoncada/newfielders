import Hero from "../components/Hero";
import CTA from "../components/CTA";
import Article from "../components/Article";
import SubArticle from "../components/SubArticle";
import QuickLinks from "../components/QuickLinks";
import Image from "next/image";

export default function Admissions() {
  return (
    <div className="bg-[#F0F0F0]">
      <Hero title="Admissions" />

      <div className="flex flex-row px-8 lg:px-28 h-auto relative bottom-16 gap-5">
        <QuickLinks currentPage="admission" />

        <section className="bg-white w-full lg:2/3 p-8 flex flex-col gap-5 lg:gap-8 lg:py-14">
          <Article title="Why Choose Us?">
            <Image
              className="py-2"
              src="/images/placeholder.png"
              width={1000}
              height={100}
              alt="placeholder"
            ></Image>
        

            <SubArticle title="Optimized STEM Curriculum">
              Our school offers a dynamic STEM curriculum that emphasizes
              hands-on learning and real-world applications. This approach
              nurtures critical thinking and problem-solving skills, essential
              for future careers in science, technology, engineering, and
              mathematics (STEM).
            </SubArticle>
            <SubArticle title="Modern Facilities and Qualified Faculty">
              We are proud of our modern facilities and highly qualified
              faculty. Our commitment to small class sizes ensures personalized
              attention, helping students thrive both academically and
              personally.
            </SubArticle>
            <SubArticle title="Enriching Extracurricular Activities">
              Beyond academics, we provide diverse extracurricular activities
              and partnerships with local industries. These opportunities
              enhance learning, foster growth, and offer valuable networking
              experiences.
            </SubArticle>
            <SubArticle title="Inclusive and Supportive Community">
              Our inclusive community values and encourages every student. We
              create an environment where all students feel supported and are
              motivated to reach their full potential.
            </SubArticle>
            <SubArticle title="Investing in the Future">
              By choosing The NewFields STEM School of Davao, students invest in
              their education and their future as innovators and leaders in STEM
              fields. Join us and be part of a transformative educational
              experience.
            </SubArticle>
          </Article>

          <Article title="Programs Offered">
            <Image
              className="py-2"
              src="/images/placeholder.png"
              width={1000}
              height={100}
              alt="placeholder"
            ></Image>
            <SubArticle title="Pre School Level">
              At ACCESSEDU, INC. (The NewFields STEM School of Davao), our
              innovative STEM curriculum starts at the Nursery level, fostering
              curiosity and problem- solving from an early age. We engage young
              learners with fun, hands-on activities that introduce basic
              science, math, and technology concepts. This approach encourages
              exploration and builds a strong foundation for future learning.
              Alongside STEM, we incorporate arts and social-emotional
              development, ensuring a well-rounded education that nurtures each
              child’s unique potential.
            </SubArticle>
            <SubArticle title="Grade School Level">
              For Grades 1 to 6, NewFields enhances the standard curriculum with
              a strong emphasis on STEM. Starting in Grade 4, students undertake
              Science investigatory projects that deepen their understanding of
              the scientific method and real-world applications. Complementing
              classroom learning, students participate in experiential trips,
              such as visits to science museums and nature walks, making
              education both tangible and exciting. These experiences foster a
              love for learning and prepare students for future success.
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
                <li>Photocopy of latest report card (current school year)</li>
                <li>Php 200.00 Assessment Fee</li>
                <li>Result of Assessment</li>
              </ul>
            </SubArticle>

            <h1 className="italic underline">NOTE</h1>

            <ul className="list-disc ps-5 text-sm">
              <li>All applicants must pass the oral and written assessment.</li>
              <li>
                All applicants must have no grades below 80 in all subject areas
                (for elementary only).
              </li>
            </ul>
          </Article>

          <Article title="Admission Procedure" flex={false}>
            <Image
              className="py-2"
              src="/images/placeholder.png"
              width={1000}
              height={100}
              alt="placeholder"
            ></Image>

            <h1 className="italic underline">NOTE</h1>

            <ul className="list-disc ps-5 text-sm">
              <li>
                The admission of new student applicants is based on the
                admission test results, academic records, school records, and
                interviews.
              </li>
              <li>
                The oral and written evaluations of the student applicant are
                not subjects for interpretation of scores and results to the
                parents/guardians. They are strictly confidential and become a
                part of the school records.
              </li>
            </ul>
          </Article>
        </section>
      </div>
      <CTA />
    </div>
  );
}
