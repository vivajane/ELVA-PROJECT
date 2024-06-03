import React from "react";
import "./Home.css";
import logo from "../images/Maskgroup.png";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import logoone from "../images/Line.png";

const Home = () => {
  return (
   
      <div className="home-container" id="home">
        <div className="content">
          <div className="left">
            <div className="left-p">
              <p>
                Partner for every<span>marketing</span><br />
                activities
              </p>
            </div>
            <div className="right-p">
              <div className="line">
                <img src={logoone} alt="logoone" className="line-sub" />
              </div>
              <div className="p-content">
                <p>We can support you with content marketing, employer branding, web development, performance marketing or social media marketing</p>
              </div>
            </div>
          </div>
          <div className="right-image">
            <img src={logo} alt="mask" />
          </div>
        </div>
        <div className="g">
          <div className="f">f</div>
          {/* <div className="g">f</div> */}
         
        </div>
      </div>
    
  );
};

export default Home;
