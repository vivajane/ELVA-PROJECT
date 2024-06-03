import React, { useEffect } from "react";
import { BsQuote } from "react-icons/bs";
import logosmile from "../images/boygirl.png";
import logolaugh from "../images/laugh.png";
import logogirl from "../images/girl.png";
import talking from "../images/talking.png";
import head from "../images/head.png";
import maskgroup from "../images/Maskgroup.png";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";


import "./About.css";
import { Image, Carousel } from "antd";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const images = [
  {
    id: 1,
    image: "./images/boygirl.png",
  },
  {
    id: 2,
    image: "./images/laugh.png",
  },
  {
    id: 3,
    image: logolaugh,
  },
  {
    id: 4,
    image: talking,
  },
  {
    id: 5,
    image: logogirl,
  },
];

const About = () => {
  useEffect(()=>{
    console.log(images)

  }, [])
  return (
    <div className="about">
      <Carousel arrows infinite={false}>
        {images.map((image) => (
          <div className="img-antd" key={image.id}>
            <img src={image.image} alt=""/>
          </div>
        ))}
      </Carousel>

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

{
  /* <Image.PreviewGroup
     preview={{
      onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
    }}
   >
    <Image width={200} src={logogirl}/>
    <Image
      width={200}
      src={logolaugh}
    />
    <Image
      width={200}
      src={logosmile}
    />
    <Image
      width={200}
      src={talking}
    />
    <Image
      width={400}
      src={maskgroup}
    />
    <Image
      width={200}
      src={logolaugh}
    />
  </Image.PreviewGroup> */
}

export default About;

// jhhklghjk

{
  /* <div className="hero">
          <div className="slide">
            <img src={logosmile} alt="logo" />
          </div>
          <div className="slide">
            <img src={head} alt="logosmile" />
          </div>
          <div className="slide">
            <img src={logolaugh} alt="logolaugh" />
          </div>
          <div className="slide">
            <img src={talking} alt="logotalking" />
          </div>
          <div className="slide">
            <img src={logogirl} alt="logogirl" />
          </div>
        </div> */
}
