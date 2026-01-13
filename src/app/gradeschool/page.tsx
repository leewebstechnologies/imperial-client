import Image from "next/image";
import "./gradeschool.css";
import ImageSlider from "../components/imageSlider/ImageSlider";

const Gradeschool = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <Image
          src="/images/gradeschool/1.png"
          alt="Elementary Classroom"
          fill
          priority
          className="heroImage"
        />

        <div className="heroOverlay">
          <h1>Grade School</h1>
          <span className="underline"></span>
        </div>
      </section>

      <section className="content">
        <p>
          Welcome to the Primary School at Imperial Legacy School, a caring,
          child-centered and inclusive learning environment where every child is
          supported to grow academically, socially and emotionally. We provide a
          safe, happy and stimulating space where learners explore, think
          critically, engage creatively and build strong moral character through
          our weekly etiquette and grooming sessions. As a secular school, we
          give no preference to any religion. All religions are respected
          equally, and religious knowledge is taught strictly as a subject, not
          as a belief system.
        </p>

        <div style={{ marginTop: "40px" }}>
          <ImageSlider />
          <h3 className="curriculum">Our Curriculum</h3>
          <p>
            Imperial Legacy School runs a hybrid curriculum that blends the
            strengths of the Nigerian and British curricula. Teaching and
            learning are delivered using the Montessori approach, ensuring that
            lessons are hands-on, exploratory and suited to each child’s
            developmental stage. We offer a rich range of subjects to build
            well-rounded learners:
          </p>
          <ul>
            <li>Mathematics</li>
            <li>
              English Language (English Grammar, Comprehension, Creative
              Writing, Spellings)
            </li>
            <li>Phonetics / Diction</li>
            <li>French Language</li>
            <li>Yoruba Language</li>
            <li>Music</li>
            <li>Basic Science</li>
            <li>Physical & Health Education</li>
            <li>Information & Communication Technology (ICT)</li>
            <li>Elementary Geography & History</li>
            <li>Social Studies</li>
            <li>Vocational Education</li>
            <li>Literature-in-English</li>
            <li>Religious Studies</li>
            <li>Cultural & Creative Arts (CCA)</li>
            <li>Quantitative Reasoning</li>
            <li>Verbal Reasoning</li>
            <li>Handwriting</li>
            <li>
              UCMAS (Universal Concept of Mental Arithmetic System) — a core
              elective for all grade pupils
            </li>
          </ul>
          <p>
            We prepare our pupils for smooth transition into secondary school
            and for competitive entrance examinations through steady academic
            guidance and progressive skill development.
          </p>
        </div>
        <div className="gradeSchool">
          <Image
            src="/images/gradeschool/5.jpg"
            alt="Weekly Assembly"
            className="gradeSchoolImg"
            width={1200}
            height={300}
          />
          <h3> Weekly Grooming, Assembly & Etiquette</h3>
          <p>
            Every week, pupils participate in a well-structured assembly
            programme featuring:
          </p>
          <ul>
            <li>Etiquette and moral grooming</li>
            <li>Termly theme awareness</li>
            <li>Facts and knowledge sessions</li>
            <li>Public speaking and confidence-building</li>
            <li>Songs, recitations and leadership roles</li>
          </ul>
          <p>
            These help build confidence, discipline, respect and strong
            communication skills.
          </p>
        </div>
        <div className="gradeSchool">
          <Image
            src="/images/gradeschool/6.png"
            alt="Weekly Assembly"
            className="gradeSchoolImg"
            width={1200}
            height={300}
          />
          <h3> Weekly Grooming, Assembly & Etiquette</h3>
          <p>Homework is thoughtfully designed to:</p>
          <ul>
            <li>Reinforce classroom lessons</li>
            <li>Cultivate independence and responsibility</li>
            <li>Strengthen literacy and numeracy foundations</li>
            <li>Promote healthy study habits</li>
          </ul>
          <p>
            Assignments are age-appropriate and manageable, ensuring pupils
            balance learning with rest and family time.
          </p>
        </div>
        <div className="gradeSchool">
          <Image
            src="/images/gradeschool/6.png"
            alt="Weekly Assembly"
            className="gradeSchoolImg"
            width={1200}
            height={300}
          />
          <h3> Weekly Grooming, Assembly & Etiquette</h3>
          <p>Homework is thoughtfully designed to:</p>
          <ul>
            <li>Reinforce classroom lessons</li>
            <li>Cultivate independence and responsibility</li>
            <li>Strengthen literacy and numeracy foundations</li>
            <li>Promote healthy study habits</li>
          </ul>
          <p>
            Assignments are age-appropriate and manageable, ensuring pupils
            balance learning with rest and family time.
          </p>
        </div>
      </section>
    </>
  );
};
export default Gradeschool;
