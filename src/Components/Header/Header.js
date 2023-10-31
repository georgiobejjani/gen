import React, { useState } from "react";
import websiteLogo from "../../assets/logoWebsite.png";
import { Link } from "react-router-dom";
export default function Header() {
  const [sublistOpen, setSublistOpen] = useState(false);
  const [btnstate, setbtnstate] = useState(" ");
  const [mobilemenu, setmobilemenu] = useState("closed");

  const openmobilemenu = () => {
    if (mobilemenu === "closed") {
      setmobilemenu("open");
      setbtnstate("open");
    } else {
      setSublistOpen(false);
      setmobilemenu("closed");
      setbtnstate("closed");
    }
  };

  const toggleSubList = () => {
    setSublistOpen(!sublistOpen);
  };

  return (
    <header className="header-container">
      <div className="container">
        <div className="header-container__wrapper">
          <Link to="/" className="header-container__link">
            <img
              className="header-container__logo"
              src={websiteLogo}
              alt="website logo"
            />
          </Link>
          <nav
            className={
              "header-container__navbar " +
              [mobilemenu === "open" ? "openMobileMenu" : ""]
            }
          >
            <ul className="header-container__list">
              <li className={"header-container__item "} onClick={toggleSubList}>
                <Link
                  className={
                    "header-container__link sublinkArrow " +
                    [sublistOpen ? "arrowopen" : ""]
                  }
                >
                  who we are
                </Link>
                <ul
                  className={
                    "header-container__sublist " +
                    [sublistOpen ? "opensublist" : "closesublist"]
                  }
                >
                  <li className="header-container__subitem">
                    <Link className="header-container__link" to="/aboutus">
                      About us
                    </Link>
                  </li>
                  <li className="header-container__subitem">
                    <Link className="header-container__link" to="/team">
                      Management Team
                    </Link>
                  </li>
                  <li className="header-container__subitem">
                    <Link className="header-container__link" to="/capabilities">
                      Capabilities
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="header-container__item">
                <Link className="header-container__link" to="/news">
                  news
                </Link>
              </li>
              <li className="header-container__item">
                <Link className="header-container__link" to="/partners">
                  partners
                </Link>
              </li>
              <li className="header-container__item">
                <Link className="header-container__link" to="/contactUs">
                  contact us
                </Link>
              </li>
            </ul>
          </nav>
          <div className="burgermenu_container" onClick={openmobilemenu}>
            <i className={btnstate === "open" ? "openbtn" : "closebtn"}></i>
            <i className={btnstate === "open" ? "openbtn" : "closebtn"}></i>
            <i className={btnstate === "open" ? "openbtn" : "closebtn"}></i>
          </div>
        </div>
      </div>
    </header>
  );
}
