import React from "react";
import "./About.css";
import { Col, Container, Row } from "react-bootstrap";
import aboutvid from "../Assests/about-video.mp4";
import Review from "./Review";
import imgabout from "../resized-image-Promo.jpeg";
// const TeamMember = ({ name, role, image, description }) => {
//   return (
//     <div className="col-md-4 single-item">
//       <div className="item">
//         <div className="thumb">
//           <img className="img-fluid" src={image} alt="Thumb" />
//           <div className="overlay">
//             <h4>{name}</h4>
//             <p>{description}</p>
//             <div className="social">
//               <ul>
//                 <li className="twitter">
//                   <a href="#">
//                     <i className="fab fa-twitter"></i>
//                   </a>
//                 </li>
//                 <li className="pinterest">
//                   <a href="#">
//                     <i className="fab fa-pinterest"></i>
//                   </a>
//                 </li>
//                 <li className="instagram">
//                   <a href="#">
//                     <i className="fab fa-instagram"></i>
//                   </a>
//                 </li>
//                 <li className="vimeo">
//                   <a href="#">
//                     <i className="fab fa-vimeo-v"></i>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="info">
//           <span className="message">
//             <a href="#">
//               <i className="fas fa-envelope-open"></i>
//             </a>
//           </span>
//           <h4>{name}</h4>
//           <span>{role}</span>
//         </div>
//       </div>
//     </div>
//   );
// };
const About = () => {
  return (
    <>
      <section>
        <div class="elementor-element ">
          <div class="e-con-inner">
            <div class="elementor-widget-container">
              <span class="elementor-span">ninetheme company</span>
              <h6 class="elementor-heading">
                Aesthetic brunch polaroid bespoke, vice kale chips leggings 90’s
                selfies raw denim.
              </h6>
              <h1 class="elementor-heading">
                We believe we can all make a difference.
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Container className="electro-about">
          <Row>
            <Col className="electro-about-img-2" md="6">
              <img
                src="https://ninetheme.com/themes/electron/wp-content/uploads/2023/08/product1-19.png"
                alt=""
              />
            </Col>
            <Col className="electro-about-content-2" md="6">
              <h2>Modern and eye-catching lines</h2>
              <p>
                Inspired by the rebellious spirit of America and the intrigue of
                unwavering authenticity, R13 launched in Fall 2009. At the
                forefront of design, R13 cuts avant-garde silhouettes such as
                the skinny legging and harem pant from Italian and Turkish denim
                produced in Castelfranco, Italy. Pure indigo casting, quality
                stretch and machine hand mending give the jeans their superior
                shape
              </p>
              <h6>#MOBILE #SWATCH #TV #SMART #ELECTRON</h6>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container className="electro-about-2">
          <Row>
            <Col className="electro-about-content-2" md="6">
              <h2>Modern and eye-catching lines</h2>
              <p>
                Inspired by the rebellious spirit of America and the intrigue of
                unwavering authenticity, R13 launched in Fall 2009. At the
                forefront of design, R13 cuts avant-garde silhouettes such as
                the skinny legging and harem pant from Italian and Turkish denim
                produced in Castelfranco, Italy. Pure indigo casting, quality
                stretch and machine hand mending give the jeans their superior
                shape
              </p>
              <h6>#MOBILE #SWATCH #TV #SMART #ELECTRON</h6>
            </Col>
            <Col className="electro-about-img-2" md="6">
              <img
                src="https://ninetheme.com/themes/electron/wp-content/uploads/2023/08/product2-14.png"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <div class="elementor-element-2">
          <div class="e-con-inner">
            <div class="elementor-widget-container">
              <span class="elementor-span">PRICE POLICY</span>
              <h6 class="elementor-heading">
                Aesthetic brunch polaroid bespoke, vice kale chips leggings 90’s
                selfies raw denim.
              </h6>
              <h1 class="elementor-heading">
                Popular understanding, theme for everyone!
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="img-video">
          <video
            src={aboutvid}
            autoPlay
            loop
            muted
            width={"100%"}
            height={"500px"}
          ></video>
          <div className="overlay"></div>
        </div>
      </section>

      <Review />
      {/* <section id="team" className="team-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="site-heading text-center">
                <h2>
                  Our <span>Team</span>
                </h2>
                <h4>Meet our awesome and expert team members</h4>
              </div>
            </div>
          </div>
          <div className="row team-items">
            <TeamMember
              name="Lorem Ipsum"
              role="Project Manager"
              image="https://i.ibb.co/JC4skS0/team-animate.jpg"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
            <TeamMember
              name="Lorem Ipsum"
              role="App Developer"
              image="https://i.ibb.co/JC4skS0/team-animate.jpg"
              description="kING."
            />
            <TeamMember
              name="Lorem Ipsum"
              role="Web Designer"
              image="https://i.ibb.co/JC4skS0/team-animate.jpg"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </div>
        </div>
      </section> */}
      <section>
        <div className="this-main-container">
          <div className="content-text-about">
            <h2>Meet Our Team</h2>
          </div>
          <div className="mainabout">
            <div className="profile-card">
              <div className="img">
                <img src={imgabout} alt="Profile" />
              </div>
              <div className="caption">
                <h3>Muhammad Wasif</h3>
                <p>Web Developer</p>
                <div className="social-links">
                  <a href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="profile-card">
              <div className="img">
                <img src={imgabout} alt="Profile" />
              </div>
              <div className="caption">
                <h3>Muzammil Channa</h3>
                <p>Python Developer</p>
                <div className="social-links">
                  <a href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="profile-card">
              <div className="img">
                <img src={imgabout} alt="Profile" />
              </div>
              <div className="caption">
                <h3>Muhammad Moiz</h3>
                <p>Designer</p>
                <div className="social-links">
                  <a href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
