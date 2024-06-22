import React from "react";
import Logo from "../../assets/images/Logo.svg";
import "./Navbar.css";
import capbg from "../../assets/images/capbg.svg";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="header">
          <img className="logo" src={Logo} alt="" />
          <button className="btn-1">ENQUIRE NOW</button>
        </div>
        <div className="herod">
          <div className="left-h">
            <div className="heading">
              Harbour Lights <br />
              <div>
                de <span>GRESOGONO</span>
              </div>
            </div>
            <p className="subheading">
              1, 2 & 3 Bedrooms Seaside Apartments <br />
              in Dubai Maritime City
            </p>
            <p className="subhead">Rental Returns of UPTO 11%**</p>
            <img className="capbg" src={capbg} alt="" />
            <img className="capbg2" src={capbg} alt="" />
            <p className="subhead">Capital Appreciation of UPTO 32%**</p>
          </div>
          <div className="right-h">
            <div>
              <div className="blur-wrap">
                <div className="blur"></div>
              </div>
              <div className="bu">
                <h3>PRICING STARTS FROM</h3>
                <h1>$ 425,000</h1>
                <h2>AED 1.3 Million</h2>
                <button>GET A PRESENTATION</button>
                <p>
                  Get an Expert’s Presentation of Real
                  <br /> Estate in Dubai for Life and investment
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
