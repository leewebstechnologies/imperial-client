import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Category from "./components/category/Category";
import Ils from "./ils/page";
import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Category />
      <section id="course-part" className="pt-115 pb-120 gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title pb-45">
                <h5>Our course</h5>
                <h2>Featured courses </h2>
              </div>       
            </div>
          </div>{" "}
          {/* row */}
          <div className="row course-slied mt-30">
            <div className="col-lg-4">
              <div className="singel-course">
                <div className="thum">
                  <div className="image">
                    <img src="images/course/cu-1.jpg" alt="Course" />
                  </div>
                  <div className="price">
                    <span>Free</span>
                  </div>
                </div>
                <div className="cont">
                  <ul>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                  <span>(20 Reviws)</span>
                  <a href="courses-singel.html">
                    <h4>Learn basis javascirpt from start for beginner</h4>
                  </a>
                  <div className="course-teacher">
                    <div className="thum">
                      <a href="#">
                        <img
                          src="images/course/teacher/t-1.jpg"
                          alt="teacher"
                        />
                      </a>
                    </div>
                    <div className="name">
                      <a href="#">
                        <h6>Mark anthem</h6>
                      </a>
                    </div>
                    <div className="admin">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-user" />
                            <span>31</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-heart" />
                            <span>10</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* singel course */}
            </div>
            <div className="col-lg-4">
              <div className="singel-course">
                <div className="thum">
                  <div className="image">
                    <img src="images/course/cu-2.jpg" alt="Course" />
                  </div>
                  <div className="price">
                    <span>Free</span>
                  </div>
                </div>
                <div className="cont">
                  <ul>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                  <span>(20 Reviws)</span>
                  <a href="courses-singel.html">
                    <h4>Learn basis javascirpt from start for beginner</h4>
                  </a>
                  <div className="course-teacher">
                    <div className="thum">
                      <a href="#">
                        <img
                          src="images/course/teacher/t-2.jpg"
                          alt="teacher"
                        />
                      </a>
                    </div>
                    <div className="name">
                      <a href="#">
                        <h6>Mark anthem</h6>
                      </a>
                    </div>
                    <div className="admin">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-user" />
                            <span>31</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-heart" />
                            <span>10</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* singel course */}
            </div>
            <div className="col-lg-4">
              <div className="singel-course">
                <div className="thum">
                  <div className="image">
                    <img src="images/course/cu-3.jpg" alt="Course" />
                  </div>
                  <div className="price">
                    <span>Free</span>
                  </div>
                </div>
                <div className="cont">
                  <ul>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                  <span>(20 Reviws)</span>
                  <a href="courses-singel.html">
                    <h4>Learn basis javascirpt from start for beginner</h4>
                  </a>
                  <div className="course-teacher">
                    <div className="thum">
                      <a href="#">
                        <img
                          src="images/course/teacher/t-3.jpg"
                          alt="teacher"
                        />
                      </a>
                    </div>
                    <div className="name">
                      <a href="#">
                        <h6>Mark anthem</h6>
                      </a>
                    </div>
                    <div className="admin">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-user" />
                            <span>31</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-heart" />
                            <span>10</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* singel course */}
            </div>
            <div className="col-lg-4">
              <div className="singel-course">
                <div className="thum">
                  <div className="image">
                    <img src="images/course/cu-4.jpg" alt="Course" />
                  </div>
                  <div className="price">
                    <span>Free</span>
                  </div>
                </div>
                <div className="cont">
                  <ul>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                  <span>(20 Reviws)</span>
                  <a href="courses-singel.html">
                    <h4>Learn basis javascirpt from start for beginner</h4>
                  </a>
                  <div className="course-teacher">
                    <div className="thum">
                      <a href="#">
                        <img
                          src="images/course/teacher/t-4.jpg"
                          alt="teacher"
                        />
                      </a>
                    </div>
                    <div className="name">
                      <a href="#">
                        <h6>Mark anthem</h6>
                      </a>
                    </div>
                    <div className="admin">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-user" />
                            <span>31</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-heart" />
                            <span>10</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* singel course */}
            </div>
            <div className="col-lg-4">
              <div className="singel-course">
                <div className="thum">
                  <div className="image">
                    <img src="images/course/cu-5.jpg" alt="Course" />
                  </div>
                  <div className="price">
                    <span>Free</span>
                  </div>
                </div>
                <div className="cont">
                  <ul>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                  <span>(20 Reviws)</span>
                  <a href="courses-singel.html">
                    <h4>Learn basis javascirpt from start for beginner</h4>
                  </a>
                  <div className="course-teacher">
                    <div className="thum">
                      <a href="#">
                        <img
                          src="images/course/teacher/t-5.jpg"
                          alt="teacher"
                        />
                      </a>
                    </div>
                    <div className="name">
                      <a href="#">
                        <h6>Mark anthem</h6>
                      </a>
                    </div>
                    <div className="admin">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-user" />
                            <span>31</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-heart" />
                            <span>10</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* singel course */}
            </div>
          </div>{" "}
          {/* course slied */}
        </div>{" "}
        {/* container */}
      </section>
      {/*====== COURSE PART ENDS ======*/}
      {/*====== VIDEO FEATURE PART START ======*/}
      <section
        id="video-feature"
        className="bg_cover pt-60 pb-110"
        style={{ backgroundImage: "url(images/bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-last order-lg-first">
              <div className="video text-lg-left text-center pt-50">
                <a
                  className="Video-popup"
                  href="https://www.youtube.com/watch?v=bRRtdzJH1oE"
                >
                  <i className="fa fa-play" />
                </a>
              </div>{" "}
              {/* row */}
            </div>
            <div className="col-lg-5 offset-lg-1 order-first order-lg-last">
              <div className="feature pt-50">
                <div className="feature-title">
                  <h3>Our Facilities</h3>
                </div>
                <ul>
                  <li>
                    <div className="singel-feature">
                      <div className="icon">
                        <img src="images/all-icon/f-1.png" alt="icon" />
                      </div>
                      <div className="cont">
                        <h4>Global Certificate</h4>
                        <p>
                          Gravida nibh vel velit auctor aliquetn auci elit cons
                          solliazcitudirem sem quibibendum sem nibhutis.
                        </p>
                      </div>
                    </div>{" "}
                    {/* singel feature */}
                  </li>
                  <li>
                    <div className="singel-feature">
                      <div className="icon">
                        <img src="images/all-icon/f-2.png" alt="icon" />
                      </div>
                      <div className="cont">
                        <h4>Alumni Support</h4>
                        <p>
                          Gravida nibh vel velit auctor aliquetn auci elit cons
                          solliazcitudirem sem quibibendum sem nibhutis.
                        </p>
                      </div>
                    </div>{" "}
                    {/* singel feature */}
                  </li>
                  <li>
                    <div className="singel-feature">
                      <div className="icon">
                        <img src="images/all-icon/f-3.png" alt="icon" />
                      </div>
                      <div className="cont">
                        <h4>Books &amp; Library</h4>
                        <p>
                          Gravida nibh vel velit auctor aliquetn auci elit cons
                          solliazcitudirem sem quibibendum sem nibhutis.
                        </p>
                      </div>
                    </div>{" "}
                    {/* singel feature */}
                  </li>
                </ul>
              </div>{" "}
              {/* feature */}
            </div>
          </div>{" "}
          {/* row */}
        </div>{" "}
        {/* container */}
        <div className="feature-bg" /> {/* feature bg */}
      </section>
      {/*====== VIDEO FEATURE PART ENDS ======*/}
      {/*====== TEACHERS PART START ======*/}
      <section id="teachers-part" className="pt-70 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-title mt-50">
                <h5>Featured Teachers</h5>
                <h2>Meet Our teachers</h2>
              </div>{" "}
              {/* section title */}
              <div className="teachers-cont">
                <p>
                  Lorem ipsum gravida nibh vel velit auctor aliquetn
                  sollicitudirem quibibendum auci elit cons equat ipsutis sem
                  nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
                  sit amet . Morbi accumsan ipsum velit. Nam nec tellus a odio
                  tincidunt mauris. <br /> <br /> auci elit cons equat ipsutis
                  sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus
                  a sit amet . Morbi accumsan ipsum velit. Nam nec tellus a odio
                  tincidunt mauris
                </p>
                <Link href="/careers" className="main-btn mt-55">
                  Career with us
                </Link>
              </div>
              {/* teachers cont */}
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div className="teachers mt-20">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="singel-teachers mt-30 text-center">
                      <div className="image">
                        <img src="images/teachers/t-1.jpg" alt="Teachers" />
                      </div>
                      <div className="cont">
                        <a href="teachers-singel.html">
                          <h6>Mark alen</h6>
                        </a>
                        <span>Vice chencelor</span>
                      </div>
                    </div>{" "}
                    {/* singel teachers */}
                  </div>
                  <div className="col-sm-6">
                    <div className="singel-teachers mt-30 text-center">
                      <div className="image">
                        <img src="images/teachers/t-2.jpg" alt="Teachers" />
                      </div>
                      <div className="cont">
                        <a href="teachers-singel.html">
                          <h6>David card</h6>
                        </a>
                        <span>Pro chencelor</span>
                      </div>
                    </div>{" "}
                    {/* singel teachers */}
                  </div>
                  <div className="col-sm-6">
                    <div className="singel-teachers mt-30 text-center">
                      <div className="image">
                        <img src="images/teachers/t-3.jpg" alt="Teachers" />
                      </div>
                      <div className="cont">
                        <a href="teachers-singel.html">
                          <h6>Rebeka alig</h6>
                        </a>
                        <span>Pro chencelor</span>
                      </div>
                    </div>{" "}
                    {/* singel teachers */}
                  </div>
                  <div className="col-sm-6">
                    <div className="singel-teachers mt-30 text-center">
                      <div className="image">
                        <img src="images/teachers/t-4.jpg" alt="Teachers" />
                      </div>
                      <div className="cont">
                        <a href="teachers-singel.html">
                          <h6>Hanna bein</h6>
                        </a>
                        <span>Aerobics head</span>
                      </div>
                    </div>{" "}
                    {/* singel teachers */}
                  </div>
                </div>{" "}
                {/* row */}
              </div>{" "}
              {/* teachers */}
            </div>
          </div>{" "}
          {/* row */}
        </div>{" "}
        {/* container */}
      </section>
      {/*====== TEACHERS PART ENDS ======*/}
      {/*====== PUBLICATION PART START ======*/}
      <section id="publication-part" className="pt-115 pb-120 gray-bg">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6 col-md-8 col-sm-7">
              <div className="section-title pb-60">
                <h5>Publications</h5>
                <h2>From Store </h2>
              </div>{" "}
              {/* section title */}
            </div>
            <div className="col-lg-6 col-md-4 col-sm-5">
              <div className="products-btn text-right pb-60">
                <a href="#" className="main-btn">
                  All Products
                </a>
              </div>{" "}
              {/* products btn */}
            </div>
          </div>{" "}
          {/* row */}
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 col-sm-8">
              <div className="singel-publication mt-30">
                <div className="image">
                  <img src="images/publication/p-1.jpg" alt="Publication" />
                  <div className="add-cart">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-heart-o" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="cont">
                  <div className="name">
                    <a href="shop-singel.html">
                      <h6>Set for life </h6>
                    </a>
                    <span>By Scott Trench</span>
                  </div>
                  <div className="button text-right">
                    <a href="#" className="main-btn">
                      Buy Now ($50)
                    </a>
                  </div>
                </div>
              </div>{" "}
              {/* singel publication */}
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8">
              <div className="singel-publication mt-30">
                <div className="image">
                  <img src="images/publication/p-2.jpg" alt="Publication" />
                  <div className="add-cart">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-heart-o" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="cont">
                  <div className="name">
                    <a href="shop-singel.html">
                      <h6>A Daughters </h6>
                    </a>
                    <span>By Scott Trench</span>
                  </div>
                  <div className="button text-right">
                    <a href="#" className="main-btn">
                      Buy Now ($30)
                    </a>
                  </div>
                </div>
              </div>{" "}
              {/* singel publication */}
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8">
              <div className="singel-publication mt-30">
                <div className="image">
                  <img src="images/publication/p-3.jpg" alt="Publication" />
                  <div className="add-cart">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-heart-o" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="cont">
                  <div className="name">
                    <a href="shop-singel.html">
                      <h6>A Magnet </h6>
                    </a>
                    <span>By Scott Trench</span>
                  </div>
                  <div className="button text-right">
                    <a href="#" className="main-btn">
                      Buy Now ($20)
                    </a>
                  </div>
                </div>
              </div>{" "}
              {/* singel publication */}
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8">
              <div className="singel-publication mt-30">
                <div className="image">
                  <img src="images/publication/p-4.jpg" alt="Publication" />
                  <div className="add-cart">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-shopping-cart" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-heart-o" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="cont">
                  <div className="name">
                    <a href="shop-singel.html">
                      <h6>Pices of light</h6>
                    </a>
                    <span>By Scott Trench</span>
                  </div>
                  <div className="button text-right">
                    <a href="#" className="main-btn">
                      Buy Now ($75)
                    </a>
                  </div>
                </div>
              </div>{" "}
              {/* singel publication */}
            </div>
          </div>{" "}
          {/* row */}
        </div>{" "}
        {/* container */}
      </section>
      {/*====== PUBLICATION PART ENDS ======*/}
      {/*====== TEASTIMONIAL PART START ======*/}
      <section
        id="testimonial"
        className="bg_cover pt-115 pb-115"
        data-overlay={8}
        style={{ backgroundImage: "url(images/bg-2.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title pb-40">
                <h5>Testimonial</h5>
                <h2>What they say</h2>
              </div>{" "}
              {/* section title */}
            </div>
          </div>{" "}
          {/* row */}
          <div className="row testimonial-slied mt-40">
            <div className="col-lg-6">
              <div className="singel-testimonial">
                <div className="testimonial-thum">
                  <img src="images/testimonial/t-1.jpg" alt="Testimonial" />
                  <div className="quote">
                    <i className="fa fa-quote-right" />
                  </div>
                </div>
                <div className="testimonial-cont">
                  <p>
                    Aliquetn sollicitudirem quibibendum auci elit cons equat
                    ipsutis sem nibh id elit. Duis sed odio sit amet sem nibh id
                    elit sollicitudirem{" "}
                  </p>
                  <h6>Rubina Helen</h6>
                  <span>Bsc, Engineering</span>
                </div>
              </div>{" "}
              {/* singel testimonial */}
            </div>
            <div className="col-lg-6">
              <div className="singel-testimonial">
                <div className="testimonial-thum">
                  <img src="images/testimonial/t-2.jpg" alt="Testimonial" />
                  <div className="quote">
                    <i className="fa fa-quote-right" />
                  </div>
                </div>
                <div className="testimonial-cont">
                  <p>
                    Aliquetn sollicitudirem quibibendum auci elit cons equat
                    ipsutis sem nibh id elit. Duis sed odio sit amet sem nibh id
                    elit sollicitudirem{" "}
                  </p>
                  <h6>Rubina Helen</h6>
                  <span>Bsc, Engineering</span>
                </div>
              </div>{" "}
              {/* singel testimonial */}
            </div>
            <div className="col-lg-6">
              <div className="singel-testimonial">
                <div className="testimonial-thum">
                  <img src="images/testimonial/t-3.jpg" alt="Testimonial" />
                  <div className="quote">
                    <i className="fa fa-quote-right" />
                  </div>
                </div>
                <div className="testimonial-cont">
                  <p>
                    Aliquetn sollicitudirem quibibendum auci elit cons equat
                    ipsutis sem nibh id elit. Duis sed odio sit amet sem nibh id
                    elit sollicitudirem{" "}
                  </p>
                  <h6>Rubina Helen</h6>
                  <span>Bsc, Engineering</span>
                </div>
              </div>{" "}
              {/* singel testimonial */}
            </div>
          </div>{" "}
          {/* testimonial slied */}
        </div>{" "}
        {/* container */}
      </section>
      {/*====== TEASTIMONIAL PART ENDS ======*/}
      {/*====== NEWS PART START ======*/}
      <section id="news-part" className="pt-115 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title pb-50">
                <h5>Latest News</h5>
                <h2>From the news</h2>
              </div>{" "}
              {/* section title */}
            </div>
          </div>{" "}
          {/* row */}
          <div className="row">
            <div className="col-lg-6">
              <div className="singel-news mt-30">
                <div className="news-thum pb-25">
                  <img src="images/news/n-1.jpg" alt="News" />
                </div>
                <div className="news-cont">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-calendar" />2 December 2018{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {" "}
                        <span>By</span> Adam linn
                      </a>
                    </li>
                  </ul>
                  <a href="blog-singel.html">
                    <h3>Tips to grade high cgpa in university life</h3>
                  </a>
                  <p>
                    Lorem ipsum gravida nibh vel velit auctor aliquetn
                    sollicitudirem quibibendum auci elit cons equat ipsutis sem
                    nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
                    sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus
                    a odio tincidunt .
                  </p>
                </div>
              </div>{" "}
              {/* singel news */}
            </div>
            <div className="col-lg-6">
              <div className="singel-news news-list">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="news-thum mt-30">
                      <img src="images/news/ns-1.jpg" alt="News" />
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="news-cont mt-30">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-calendar" />2 December 2018{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <span>By</span> Adam linn
                          </a>
                        </li>
                      </ul>
                      <a href="blog-singel.html">
                        <h3>Intellectual communication</h3>
                      </a>
                      <p>
                        Gravida nibh vel velit auctor aliquetn sollicitudirem
                        quibibendum auci elit cons vel.
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* row */}
              </div>{" "}
              {/* singel news */}
              <div className="singel-news news-list">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="news-thum mt-30">
                      <img src="images/news/ns-2.jpg" alt="News" />
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="news-cont mt-30">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-calendar" />2 December 2018{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <span>By</span> Adam linn
                          </a>
                        </li>
                      </ul>
                      <a href="blog-singel.html">
                        <h3>Study makes you perfect</h3>
                      </a>
                      <p>
                        Gravida nibh vel velit auctor aliquetn sollicitudirem
                        quibibendum auci elit cons vel.
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* row */}
              </div>{" "}
              {/* singel news */}
              <div className="singel-news news-list">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="news-thum mt-30">
                      <img src="images/news/ns-3.jpg" alt="News" />
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="news-cont mt-30">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-calendar" />2 December 2018{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <span>By</span> Adam linn
                          </a>
                        </li>
                      </ul>
                      <a href="blog-singel.html">
                        <h3>Technology edcution is now....</h3>
                      </a>
                      <p>
                        Gravida nibh vel velit auctor aliquetn sollicitudirem
                        quibibendum auci elit cons vel.
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* row */}
              </div>{" "}
              {/* singel news */}
            </div>
          </div>{" "}
          {/* row */}
        </div>{" "}
        {/* container */}
      </section>
      {/*====== NEWS PART ENDS ======*/}
      {/*====== PATNAR LOGO PART START ======*/}
      <div id="patnar-logo" className="pt-40 pb-80 gray-bg">
        <div className="container">
          <div className="row patnar-slied">
            <div className="col-lg-12">
              <div className="singel-patnar text-center mt-40">
                <img src="images/patnar-logo/p-1.png" alt="Logo" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="singel-patnar text-center mt-40">
                <img src="images/patnar-logo/p-2.png" alt="Logo" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="singel-patnar text-center mt-40">
                <img src="images/patnar-logo/p-3.png" alt="Logo" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="singel-patnar text-center mt-40">
                <img src="images/patnar-logo/p-4.png" alt="Logo" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="singel-patnar text-center mt-40">
                <img src="images/patnar-logo/p-2.png" alt="Logo" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="singel-patnar text-center mt-40">
                <img src="images/patnar-logo/p-3.png" alt="Logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
