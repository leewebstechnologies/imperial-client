import Image from "next/image";
import "./creche.css";

const Creche = () => {
  return (
    <>
      <section className="hero">
        <Image
          src="/images/creche/banner.jpg"
          alt="Elementary Classroom"
          fill
          priority
          className="heroImage"
        />

        <div className="heroOverlay">
          <h1>Creche</h1>
          <span className="underline"></span>
        </div>
      </section>
      <main className="creche-page">
        {/* INTRO */}
        <section className="creche-section">
          <div className="container narrow">
            <h2>THE CRECHE: A SANCTUARY OF EARLY WONDER</h2>
            <h3>Getting Started</h3>
            <p className="lead">The First Step in a Lifetime of Excellence.</p>
            <p>
              We understand that entrusting your child to us is a gesture of
              immense trust. Our admissions process is designed to be as
              seamless and supportive as the care we provide. From your initial
              private tour to the gentle settling-in period, we ensure every
              family feels an immediate sense of belonging within our elite
              community.
            </p>
          </div>
        </section>

        {/* ADMISSION STEPS */}
        <section className="creche-section soft-bg">
          <div className="container">
            <div className="steps-grid">
              <div className="step-card">
                <span>Step 1</span>
                <h3>The Application</h3>
                <p>
                  Acquire the official application form (₦10,000) from the
                  school administrative office.
                </p>
              </div>

              <div className="step-card">
                <span>Step 2</span>
                <h3>Documentation</h3>
                <ul>
                  <li>Birth certificate (photocopy)</li>
                  <li>Updated immunisation card</li>
                  <li>Two passport photographs of the child</li>
                  <li>One passport photograph of each parent/guardian</li>
                  <li>Medical records</li>
                </ul>
              </div>

              <div className="step-card">
                <span>Step 3</span>
                <h3>Securing the Placement</h3>
                <p>
                  Settlement of the monthly fee secures your child’s enrolment
                  at Imperial Legacy School Crèche.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CURRICULUM */}
        <section className="creche-section dark-bg">
          <div className="container narrow center">
            <h2>Our Curriculum</h2>
            <p className="lead gold">
              Nurturing Genius Through Play and Discovery
            </p>
            <p>
              Our bespoke Early Years framework focuses on sensory-rich
              experiences that ignite cognitive development. By blending
              traditional British pedagogical standards with modern
              neuro-developmental research, we ensure your child’s first
              educational milestones are met with sophistication and joy.
            </p>
          </div>
        </section>

        {/* WEEKLY PROGRAMME */}
        <section className="creche-section">
          <div className="container">
            <h2 className="center">Weekly Grooming & Events</h2>
            <p className="center subtitle">
              The Art of Early Refinement and Discovery
            </p>

            <div className="program-grid">
              <div className="program-card">Linguistic Foundations</div>
              <div className="program-card">Practical Life Atelier</div>
              <div className="program-card">Personal Sovereignty</div>
              <div className="program-card">Physical Mastery</div>
              <div className="program-card">Social Harmony</div>
            </div>
          </div>
        </section>

        {/* LEARNING */}
        <section className="creche-section soft-bg">
          <div className="container narrow center">
            <h2>Learning & Development</h2>
            <p>
              Our dedicated caregivers provide expert guidance to help each
              child harness their innate abilities, ensuring they reach every
              developmental milestone through a nurturing partnership that
              celebrates their unique growth and potential.
            </p>
          </div>
        </section>

        {/* GALLERY */}
        <section className="creche-section">
          <div className="container center">
            <h2>Photo Gallery</h2>
            <p className="subtitle">A Glimpse into a World of Care</p>

            <div className="gallery-placeholder">Gallery Coming Soon</div>
          </div>
        </section>
      </main>
    </>
  );
}
export default Creche