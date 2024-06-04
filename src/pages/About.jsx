import React, { useEffect } from "react";
import { BsQuote } from "react-icons/bs";
import logosmile from "../images/boygirl.png";
import logolaugh from "../images/laugh.png";
import logogirl from "../images/girl.png";
import talking from "../images/talking.png";
import head from "../images/head.png";
import maskgroup from "../images/Maskgroup.png";
import { NavLink } from "react-router-dom";
import "./About.css";
import {Carousel } from "antd";
const slideImages = [
  head,
  logolaugh,
  logosmile,
  logogirl,
  talking,
];

const About = () => {
  return (
    <div className="about">
     <div className="hero-container">
        <Carousel dotPosition="left" infinite={true} autoplay dots={false}>
          {slideImages.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt="img"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="right">
        <div className="about-us">
          <h2 className="h2">ABOUT US</h2>
          <div className="about-us-span">
            <p className="paragraph">
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
              achieve their goals.
            </p>
          </div>
        </div>
        <div className="read-more">
          <NavLink to="about" className="navlinkmore">
            Read More
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default About;




