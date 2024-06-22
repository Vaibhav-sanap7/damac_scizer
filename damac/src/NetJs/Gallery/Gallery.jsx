import React from "react";
import "./Gallery.css";
import image1 from "../../assets/images/balcony.svg";
import image2 from "../../assets/images/toilet.svg";
import image3 from "../../assets/images/palm.svg";
import image4 from "../../assets/images/blue design.svg";
import image5 from "../../assets/images/bedroom.svg";
import image6 from "../../assets/images/backarrow.svg";
import image7 from "../../assets/images/forwardarrow.svg";

function Gallery() {
  return (
    <>
      <div className="btn">
        <button className="btn-2">EXTERIORS</button>
        <button className="btn-3">INTERIORS</button>
      </div>
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
        <img src={image5} alt="" />
        <img className="arr1" src={image6} alt="" />
        <img className="arr2" src={image7} alt="" />
      </div>
    </>
  );
}

export default Gallery;
