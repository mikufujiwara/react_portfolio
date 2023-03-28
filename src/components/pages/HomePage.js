import React from "react";
import htmlImage from "../../Images/html.svg";
import cssImage from "../../Images/css.svg";
import jsImage from "../../Images/js.svg";
import reactImage from "../../Images/react.svg";
import jqueryImage from "../../Images/jquery.svg";
import vueImage from "../../Images/vue.svg";
// import profileImage from "../../Images/profile.png";

const HomePage = () => {
  return (
    <div
      className="container text-center d-flex flex-column align-items-center"
      style={{ paddingTop: "120px" }}
    >
      <section
        className="page-section d-flex align-items-center justify-content-between col-lg-8 row"
        id="about"
      >
        <div className="col-lg-3">
          {/* <img
            src={profileImage}
            className="profileImage mb-2"
            alt="profileImage"
          /> */}
        </div>
        <div className="profileWrap">
          <h2 className="p-2" id="typing">
            <span>FRONT-END DEVELOPER / WEB DESIGNER</span>
          </h2>
          <h1 className="mb-2">MIKU FUJIWARA</h1>
          <p>
            Hello, I'm Miku, a web designer and front-end developer from Japan
            now living in Vancouver. My experience working in multiple
            industries has made me a{" "}
            <span style={{ color: "var(--green)" }}>quick learner</span> and a{" "}
            <span style={{ color: "var(--orange)" }}>problem solver</span>. I'm{" "}
            <span style={{ color: "var(--purple)" }}>passionate</span> about
            programming and love the challenge of creating beautiful,
            user-friendly websites. Let's work together to turn your ideas into
            reality! <br />
            <span className="d-flex justify-content-end">
              <a
                href="https://drive.google.com/file/d/1HgBQ4Jj7dYI1VZrNO6COzdxC9dec_YOG/view?usp=share_link"
                target="_blank"
                rel="noreferrer"
                className="mt-3"
              >
                Download my resume here!
              </a>
            </span>
          </p>
        </div>
      </section>

      <section id="skill">
        <div className="text-center">
          <h2 className="section-heading text-uppercase mb-3">SKILL</h2>
          <div className="row text-center  d-flex justify-content-between">
            <div className="col-lg-2 col-md-4 col-4">
              <img src={htmlImage} alt="html" />
              <h4>HTML5</h4>
            </div>
            <div className="col-lg-2 col-md-4 col-4">
              <img src={cssImage} alt="css" />
              <h4>CSS3</h4>
            </div>
            <div className="col-lg-2 col-md-4 col-4">
              <img src={jsImage} alt="javascript" />
              <h4>JavaScript</h4>
            </div>
            <div className="col-lg-2 col-md-4 col-4">
              <img src={jqueryImage} alt="jquery" />
              <h4>JQuery</h4>
            </div>
            <div className="col-lg-2 col-md-4 col-4">
              <img src={reactImage} alt="react" />
              <h4>React</h4>
            </div>
            <div className="col-lg-2 col-md-4 col-4">
              <img src={vueImage} alt="vue" />
              <h4>Vue.js</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section col-md-8" id="project">
        <div className="text-center">
          <h2 className="section-heading text-uppercase mb-5">PROJECT</h2>
        </div>
        <div className="row text-center d-flex justify-content-around align-items-center g-4">
          <a
            href="https://mikufujiwara.github.io/Portfolio/"
            target="_blank"
            rel="noreferrer"
            className="col-lg-5 project m-2"
          >
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x circle1"></i>
              <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
            </span>
            <h5 className="my-3">Responsive Website</h5>
            <p className="text-muted">
              <span> [ HTML / CSS ]</span>
              <br />I designed and developed a fully responsive website using
              only HTML and CSS, without relying on any external libraries.
            </p>
          </a>
          <a href="https://miku-to-do-list.netlify.app/" target="_blank" className="col-lg-5 project m-2">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x circle2"></i>
              <i className="fas fa-square-check fa-stack-1x fa-inverse"></i>
            </span>
            <h5 className="my-3">To-do List App</h5>
            <p className="text-muted">
              <span> [ HTML / CSS / JavaScript / React ]</span>
              <br />I improve my front-end development skills and gained
              practical UI design experience with this project.
            </p>
          </a>
          <a
            href="https://github.com/takumi-tsuka/toy_store_final"
            target="_blank"
            rel="noreferrer"
            className="col-lg-5 project m-2"
          >
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x circle3"></i>
              <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </span>
            <h5 className="my-3">E-commerce</h5>
            <p className="text-muted">
              <span>[ HTML / CSS / JavaScript / Vue.JS ]</span>
              <br />
              For a school project, I designed and developed a toy store
              e-commerce website, including the main and registration pages, and
              overall website design.
            </p>
          </a>
          <a href="/graphicdesign" className="col-lg-5 project m-2">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x circle4"></i>
              <i className="fas fa-pen fa-stack-1x fa-inverse"></i>
            </span>
            <h5 className="my-3">Graphic Design</h5>
            <p className="text-muted">
              <span>[ Adobe Illustrator / Photoshop ]</span>
              <br />I created customer-focused real estate brochures and
              enhanced my graphic design skills, including layout, typography,
              and color selection.
            </p>
          </a>
        </div>
      </section>

      <section
        id="experience"
        className="d-flex flex-column align-items-center"
      >
        <h2 className="section-heading text-uppercase mb-3">EXPERIENCE</h2>
        <div className="row col-md-8">
          <ul className="timeline">
            <li>
              <p className="timeline-date">April 2012 -</p>
              <div className="timeline-content">
                <h4>Kyoto Sangyo University</h4>
                <h5>Bachelor of Foreign Studies </h5>
                <p>1 year break for study abroad in Indonesia.</p>
              </div>
            </li>
            <li>
              <p className="timeline-date">Apr 2017 -</p>
              <div className="timeline-content">
                <h4>Xacti Corporation</h4>
                <h5>Administrative assistant</h5>
                <p>
                  I translated Japanese manuals into English and Indonesian for
                  a factory in Indonesia, enabling smooth assembly of cameras by
                  Indonesian employees. I also assisted with project planning by
                  calculating required man-hours.
                </p>
              </div>
            </li>
            <li>
              <p className="timeline-date">Jan 2019 -</p>
              <div className="timeline-content">
                <h4>H.I.S. International Tours Inc.</h4>
                <h5>Travel Agent</h5>
                <p>
                  I handled incoming calls and provided customer service,
                  answering questions and recommending flight options in English
                  or Japanese. I also managed travel arrangements, including
                  airfare, hotel, and rental car reservations using Apollo GDS.
                </p>
              </div>
            </li>
            <li>
              <p className="timeline-date">May 2020 -</p>
              <div className="timeline-content">
                <h4>WAFULL K.K.</h4>
                <h5>Graphic Designer</h5>
                <p>
                  I designed print materials, including brochures and banners,
                  to market clients' properties. I researched the local real
                  estate market and used buyer personas to inform my designs,
                  primarily using Adobe Illustrator and Photoshop.
                </p>
              </div>
            </li>
            <li>
              <p className="timeline-date">Oct 2022 -</p>
              <div className="timeline-content">
                <h4>Tamwood International College</h4>
                <h5>Web Developer Course</h5>
                <p>
                  I acquired proficiency in HTML, CSS, JavaScript, and PHP at
                  Tamwood college. Additionally, I gained experience in
                  developing and working with REST APIs, as well as working with
                  technologies such as React, Vue.js, and AngularJS.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
