import Image from "next/image";
import "./curricular.css";
import { curricularData } from "../data";

const Curricular = () => {
  return (
    <div className="curricular">
      <header className="header">
        <h1>Extra-Curricular Activities</h1>
        <p>
          We offer a variety of enriching and playful activities to support the
          holistic development of our nursery and primary school children.
        </p>
      </header>
      <section className="activities-grid">
        {curricularData.map((index) => (
          <div className="activity-card" key={index.id}>
            <Image className="img" src={index.image} alt="detail" width={200} height={250}/>
            <h2>{index.title}</h2>
            <p>{index.detail}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
export default Curricular