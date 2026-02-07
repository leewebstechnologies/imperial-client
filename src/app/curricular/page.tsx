import Image from "next/image";
import "./curricular.css";
// import { curricularData } from "../data";

const Curricular = () => {
  return (
    <>
      {/* HERO */}
      <main className="curricular">
        <section className="hero">
          <Image
            src="/images/extracurricular/1.png"
            alt="Extra-Curricular Activities"
            fill
            priority
            className="heroImage"
          />
          <div className="heroOverlay">
            <h1 style={{ color: "#fff" }}>Extra-Curricular Activities</h1>
            <span className="underline"></span>
          </div>
        </section>

        {/* CONTENT */}
        <section className="content">
          <h2 className="introText">
            Our enrichment programme is designed to identify and polish the
            “hidden diamonds” of talent within every pupil. We offer a suite of
            prestigious activities that cultivate both the body and the mind,
            ensuring our scholars are well-rounded, disciplined, and culturally
            aware.
          </h2>

          {/* ACTIVITIES GRID */}
          <div className="activityGrid">
            <div className="activityCard">
              <h3>Music</h3>
              <p>
                We believe every child should speak the universal language of
                music. Pupils specialise in instruments such as piano, violin or
                woodwind under expert instructors, developing technical mastery
                and emotive expression.
              </p>
            </div>

            <div className="activityCard">
              <h3>Chess</h3>
              <p>
                Our Chess programme sharpens strategic thinking, concentration,
                patience and tactical brilliance — skills that extend far beyond
                the board.
              </p>
            </div>

            <div className="activityCard">
              <h3>Ballet & Contemporary Dance</h3>
              <p>
                From the disciplined poise of Classical Ballet to the expressive
                energy of Contemporary Dance, pupils develop coordination,
                confidence and artistic expression.
              </p>
            </div>

            <div className="activityCard">
              <h3>Taekwondo</h3>
              <p>
                Through professional Taekwondo training, we instil respect,
                perseverance and physical mastery — promoting strength under
                control.
              </p>
            </div>

            <div className="activityCard">
              <h3>Coding & Robotics</h3>
              <p>
                In an increasingly digital world, pupils become creators — not
                just consumers — learning coding logic, robotics and engineering
                principles that shape the future.
              </p>
            </div>
          </div>

          {/* PHOTO GALLERY */}
          <div className="galleryBlock">
            <Image
              src="/images/extracurricular/1.png"
              alt="School Photo Gallery"
              width={1200}
              height={350}
              className="galleryImg"
            />

            <div className="galleryText">
              <h3>Photo Gallery</h3>
              <h4>Documenting the Spirit of Achievement</h4>
              <p>
                Witness the vibrancy of our classrooms and the focus of our
                scholars in action.
              </p>

              {/* <a href="/gallery" className="galleryBtn">
                Explore the Collection
              </a> */}
            </div>
          </div>
        </section>
      </main>
    </>
    // <div className="curricular">
    //   <header className="header">
    //     <h1>Extra-Curricular Activities</h1>
    //     <p>
    //       We offer a variety of enriching and playful activities to support the
    //       holistic development of our nursery and primary school children.
    //     </p>
    //   </header>
    //   <section className="activities-grid">
    //     {curricularData.map((index) => (
    //       <div className="activity-card" key={index.id}>
    //         <Image className="img" src={index.image} alt="detail" width={200} height={250}/>
    //         <h2>{index.title}</h2>
    //         <p>{index.detail}</p>
    //       </div>
    //     ))}
    //   </section>
    // </div>
  );
};
export default Curricular;
