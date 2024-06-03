import React from "react";
import { BsQuote } from "react-icons/bs";
import logosmile from "../images/smile.png";
import logolaugh from "../images/laugh.png";
import logogirl from "../images/girl.png";
import talking from "../images/talking.png";
import head from "../images/head.png";
import maskgroup from "../images/Maskgroup.png";
import yellow from "../images/yellow.png";
// import logosmile from "./images/.png";
import "./AboutPage.css";
import { Carousel } from "antd";
const slideImages = [head, logolaugh, logosmile, logogirl, talking];

const AboutPage = () => {
  return (
    <div className="aboutt" id="about">

      <div className="right">
        <div className="about-us">
          <h2>About Styleplus</h2>
          <div className="hero-container">
        <Carousel dotPosition="left" infinite={true} autoplay dots={false}>
          {slideImages.map((image, index) => (
            <div key={index} className="img-div">
              <img
                src={image}
                alt="img"
                style={{ width: "50%", height: "auto" }}
              />
            </div>
          ))}
        </Carousel>
      </div>
          
          <div className="about-us-span">
            <p>
              <span>
                <BsQuote />
              </span>
              Spark innovation, fuel growth
            </p>
          </div>
          <div className="styleplus">
            <p>
              At Styleplus, we're passionate about harnessing the power of
              technology to drive innovation and growth. As a leading tech
              service company, we specialize in providing cutting-edge solutions
              that help businesses thrive in an ever-evolving digital landscape.
              With a keen eye for emerging trends and a deep understanding of
              our clients' needs, we craft tailored solutions that empower
              companies to stay ahead of the curve, drive efficiency, and
              achieve their goals. By combining our technical expertise with a
              commitment to exceptional customer service, we help businesses
              unlock their full potential and succeed in today's fast-paced
              digital world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
