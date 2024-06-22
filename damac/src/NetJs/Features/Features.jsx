import React from "react";
import "./Features.css";
import build_check from "../../assets/images/build_check.svg";
import percentage from "../../assets/images/percentage.svg";
import hand_key from "../../assets/images/hand_key.svg";
import scale from "../../assets/images/scale.svg";
import Harbour from "../../assets/images/Harbour Lights by de Grisogono.png";

import gym from "../../assets/images/gym.svg";
import river_pool from "../../assets/images/river_swimpool.svg";
import swimming_pool from "../../assets/images/swimming_pool.svg";
import sofa_sky from "../../assets/images/sofa_sky.svg";

const Features = () => {
  return (
    <>
      <div className="features">
        <div className="wrapper1">
          <img src={build_check} alt="" />
          <h2>BOOK WITH</h2>
          <h1>Only 20%</h1>
        </div>
        <div className="wrapper">
          <img src={percentage} alt="" />
          <h2>PAYMENT PLAN</h2>
          <h1>Easy 70/30</h1>
        </div>
        <div className="wrapper">
          <img src={hand_key} alt="" />
          <h2>HANDOVER ON</h2>
          <h1>Q2 2027</h1>
        </div>
        <div className="wrapper">
          <img src={scale} alt="" />
          <h2>AREA STARTS FROM</h2>
          <h1>700 sqmt</h1>
        </div>
      </div>
      <div className="Harbour">
        <img src={Harbour} alt="" />
        <h2>Features & Amenities</h2>
        <p>
          Harbour Lights beautifully honours maritime voyages while embracing an
          opulent seafront <br />
          lifestyle. Its maritime-inspired amenities provide an unmatched
          seaside experience, offering a <br />
          life of tranquility and bliss.
        </p>
      </div>
      <div id="container">
        <div className="card">
          <img src={river_pool} />
          <p>
            Floating <br />
            Pools
          </p>
        </div>
        <div className="card">
          <img src={sofa_sky} />
          <p>
            Spacious Cabins
            <br /> Like Rooms
          </p>
        </div>
        <div className="card">
          <img src={swimming_pool} />
          <p>
            Sea Facing <br />
            Swimming Pools
          </p>
        </div>
        <div className="card">
          <img src={gym} />
          <p>
            Gymnasium <br />& FItness
          </p>
        </div>
      </div>
      <h4>
        *T&Cs apply | ** Based on similar branded projects in the last 2 years.
        <span> Source 1 | Source 2</span>
      </h4>
    </>
  );
};

export default Features;
