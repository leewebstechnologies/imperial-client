import Image from "next/image";
import "./creche.css";

const Creche = () => {
  return (
    <>
      <section className="hero">
        <Image
          src="/images/creche/banner.jpg"
          alt="Creche Banner"
          fill
          priority
          className="heroImage"
        />
        <div className="heroOverlay">
          <h1>Creche</h1>
          <span className="underline"></span>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="creche-section intro">
        <div className="container">
          <div className="text-center">
            <h2>A SANCTUARY OF EARLY WONDER</h2>
            <p style={{ fontWeight: "bold" }}>
              A nurturing environment where curiosity is celebrated and the
              foundations of excellence are gently formed.
            </p>
          </div>
        </div>
      </section>

      {/* GETTING STARTED */}
      <section className="creche-section light-bg">
        <div className="container grid">
          <div>
            <h3>Getting Started</h3>
            <h4>The First Step in a Lifetime of Excellence.</h4>
            <p>
              We understand that entrusting your child to us is a gesture of
              immense trust. Our admissions process is designed to be as
              seamless and supportive as the care we provide. From your initial
              private tour to the gentle settling-in period, every family
              experiences a true sense of belonging within our elite community.
            </p>
          </div>
          <div className="image-box">
            <Image
              src="/images/creche/3.jpg"
              alt="Creche Admission"
              width={600}
              height={450}
              className="admissionImg"
            />
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="creche-section">
        <div className="container grid reverse">
          <div>
            <h3>Our Curriculum</h3>
            <h4>Nurturing Genius Through Play and Discovery.</h4>
            <p>
              Our bespoke Early Years framework focuses on sensory-rich
              experiences that ignite cognitive development. By blending
              traditional British pedagogical standards with modern
              neuro-developmental research, we ensure every milestone is met
              with joy and sophistication.
            </p>
          </div>

          <div className="image-box">
            <Image
              src="/images/creche/1.png"
              alt="Creche Curriculum"
              width={600}
              height={450}
              className="admissionImg"
            />
          </div>
        </div>
      </section>

      {/* WEEKLY PROGRAMME */}
      <section className="creche-section light-bg">
        <div className="container">
          <h3 className="text-center">Weekly Grooming and Events</h3>
          <p className="text-center subtitle">
            The Art of Early Refinement and Discovery.
          </p>

          <ul className="features">
            <li>
              <strong>Linguistic Foundations:</strong> Classical rhymes and
              immersive storytelling.
            </li>
            <li>
              <strong>The Practical Life Atelier:</strong> Montessori-inspired
              independence building.
            </li>
            <li>
              <strong>Personal Sovereignty:</strong> Gentle potty training and
              hygiene routines.
            </li>
            <li>
              <strong>Physical Mastery:</strong> Fine and gross motor
              development activities.
            </li>
            <li>
              <strong>Social Harmony:</strong> Etiquette, respect, and
              cooperation.
            </li>
          </ul>
        </div>
      </section>

      {/* LEARNING & DEVELOPMENT */}
      <section className="creche-section">
        <div className="container text-center">
          <h3>Learning and Development</h3>
          <p>
            Our dedicated caregivers provide expert guidance to help each child
            reach developmental milestones through a nurturing partnership that
            celebrates individuality and potential.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="creche-section gallery-bg">
        <div className="container">
          <h3 className="text-center">A Glimpse into a World of Care</h3>
          <p className="text-center subtitle">
            Explore the serene, light-filled spaces where our youngest scholars
            begin.
          </p>

          <div className="gallery">
            <Image
              src="/images/creche/3.jpg"
              alt=""
              width={400}
              height={300}
            />
            <Image
              src="/images/creche/1.png"
              alt=""
              width={400}
              height={300}
            />
            <Image
              src="/images/creche/3.jpg"
              alt=""
              width={400}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* REGISTRATION */}
      <section className="creche-section light-bg">
        <div className="container">
          <h3>Registration Process</h3>

          <div className="steps">
            <div className="step">
              <h4>Step 1: The Application</h4>
              <p>
                Obtain the official application form (₦10,000) from the school
                administrative office.
              </p>
            </div>

            <div className="step">
              <h4>Step 2: Documentation</h4>
              <ul>
                <li>Birth certificate (photocopy)</li>
                <li>Updated immunisation card</li>
                <li>Two passport photographs of the child</li>
                <li>One passport photograph of each parent/guardian</li>
                <li>Medical records</li>
              </ul>
            </div>

            <div className="step">
              <h4>Step 3: Securing the Placement</h4>
              <p>
                Payment of the monthly fee secures your child’s place at
                Imperial Legacy School Crèche.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Creche;
