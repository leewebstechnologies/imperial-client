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
          <section>
          
          </section>
    </>
  )
}
export default Creche