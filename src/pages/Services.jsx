import React from "react";
import "./Services.css";
import LogoImage from "../images/graphic.png";
import WebImage from "../images/web.png";
import MobileImage from "../images/mobile.png";
import CorporateImage from "../images/corporate.png";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { useState } from "react";

const ServicesOffer = [
  {
    id: 1,
    image: CorporateImage,
    name: "Corporate Branding",
    text: "Quis at diam diam quis in. Condimentum lobortis lacus a ornare leo ac bibendum lectus. Aliquam elementum mauris",
  },
  {
    id: 2,
    image: LogoImage,
    name: "Graphic Design",
    text: "Quis at diam diam quis in. Condimentum lobortis lacus a ornare leo ac bibendum lectus. Aliquam elementum mauris",
  },
  {
    id: 3,
    image: WebImage,
    name: "Web Design &  Development",
    text: "Quis at diam diam quis in. Condimentum lobortis lacus a ornare leo ac bibendum lectus. Aliquam elementum mauris",
  },
  {
    id: 4,
    image: MobileImage,
    name: "Mobile Design & Development",
    text: "Quis at diam diam quis in. Condimentum lobortis lacus a ornare leo ac bibendum lectus. Aliquam elementum mauris",
  },
];

const Services = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="services" id="services">
      <div className="service">
        <h2>OUR SERVICES</h2>
        <p>Where Tech Meets Success</p>
        <p>
          Transform your business with our expert tech solutions! From strategic
          planning to seamless implementation, we'll help you harness the power
          of technology to drive growth, boost efficiency, and stay ahead of the
          competition
        </p>
      </div>
      <div className="rectangle">
        {ServicesOffer.map((service) => (
          <Service
            key={service.id}
            service={service}
            showMore={showMore}
            setShowMore={setShowMore}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;

const Service = ({ service, showMore, setShowMore }) => {
  const id = service.id;
  const newShow = id === showMore;
  const onClickHandler = (id) => {
    setShowMore(newShow ? null : id);
  };
  return (
    <div>
      <div className="service-image">
        <img src={service.image} alt="service" />
      </div>
      <div className={`service-flex ${newShow && "active"}`}>
        <h3>{service.name}</h3>

        <div onClick={() => onClickHandler(id)}>
          {newShow ? (
            <BsArrowDownCircleFill />
          ) : (
            <IoArrowForwardCircleOutline />
          )}
        </div>
      </div>
      <div>
        {newShow && <p className={newShow && "active"}>{service.text}</p>}
      </div>
    </div>
  );
};
