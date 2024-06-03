import React from "react";
import { BsQuote } from "react-icons/bs";
import logosmile from "../images/smile.png";
import logolaugh from "../images/laugh.png";
import logogirl from "../images/girl.png";
import talking from "../images/talking.png";
import maskgroup from "../images/Maskgroup.png";
import yellow from "../images/yellow.png"
// import logosmile from "./images/.png";
import "./AboutPage.css";
import { Image } from "antd";

const AboutPage = () => {
  return (
    <div className="aboutt" id="about">
      {/* <Image.PreviewGroup
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
  </Image.PreviewGroup> */}

      <div className="right">
        <div className="about-us">
          <h2>About Styleplus</h2>
          <div className="left">
            <img src={logosmile} alt="logosmile" className="smile" />
            {/* <img src={yellow} alt="yellow" style={{width: "248px", height: "300px"}} className="yellow"/> */}
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
