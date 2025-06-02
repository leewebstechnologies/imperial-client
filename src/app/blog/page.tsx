import "./blog.css";
import Link from "next/link";
import Image from "next/image";
import b1 from "../../images/blog/b-1.jpg";
import b2 from "../../images/blog/b-2.jpg";
import b3 from "../../images/blog/b-2.jpg";


const Blog = () => {
  return (
    <>
      <section id="blog-page" className="pt-90 pb-120 gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog singel-blog mt-30">
                <div className="blog-thum">
                  <Image src={b1} alt="Blog" width={300} height={300} />
                </div>
                <div className="blog-cont">
                  <Link href="/">
                    <h3>Few tips for get better results in examination</h3>
                  </Link>
                  <ul>
                    <li>
                      <Link href="/">
                        <i className="fa fa-calendar" />
                        25 Dec 2018
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa fa-user" />
                        Mark anthem
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa fa-tags" />
                        Education
                      </Link>
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum gravida nibh vel velit auctor aliquetn
                    sollicitudirem quibibendum auci elit cons equat ipsutis sem
                    nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
                    sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus
                    .
                  </p>
                </div>
              </div>
              <div className="card singel-blog mt-30">
                <div className="blog-thum">
                  <Image src={b2} alt="Blog" width={300} height={300} />
                </div>
                <div className="blog-cont">
                  <a href="blog-singel.html">
                    <h3>Few tips for get better results in examination</h3>
                  </a>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-calendar" />
                        25 Dec 2018
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-user" />
                        Mark anthem
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-tags" />
                        Education
                      </a>
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum gravida nibh vel velit auctor aliquetn
                    sollicitudirem quibibendum auci elit cons equat ipsutis sem
                    nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
                    sit amet mauris. Morbi accumsan ipsum velit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Blog;
