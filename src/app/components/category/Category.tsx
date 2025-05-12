import "./category.css";
import { categories } from "../../data";

const Category = () => {
  return (
    <section id="category-part">
      <div className="container">
        <div className="category pt-40 pb-80">
          <div className="row">
            <div className="col-lg-4">
              <div className="category-text pt-40">
                <h2>ENROLL IN OUR SCHOOL</h2>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 col-md-8 offset-md-2 col-sm-8 offset-sm-2 col-8 offset-2">
              <div className="row category-slied mt-40">
                {categories.map((cat, index) => (
                  <div key={index} className="col-lg-4">
                    <a href="#">
                      <span
                        className={`singel-category text-center ${cat.colorClass}`}
                      >
                        <span className="icon">
                          <img src={cat.image} alt={`${cat.name} Icon`} />
                        </span>
                        <span className="cont">
                          <span>{cat.name}</span>
                        </span>
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Category