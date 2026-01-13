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
        </div>
      </section>
    </>
  );
};
export default Gradeschool;
