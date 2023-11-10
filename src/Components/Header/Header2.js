import React, { useState } from "react";
import genLogo from "../../assets/logoWebsite.png";
import homeIcon from "../../assets/icons/home.png"
import { Link } from "react-router-dom";

export default function Header2() {
    const [mobileMenu, setMobileMenu] = useState(false);
    // const [subMenu,setSubMenu] = useState(false);

  const openmobilemenu = () => {
    if (mobileMenu) {
      setMobileMenu(false);
    } else setMobileMenu(true);
  };

  // const openSubMenu = () => {
  //   if(subMenu) {
  //       setSubMenu(false);
  //   } else setSubMenu(true);
  // }

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Link to="/">
            <img src={genLogo} alt="gen logo" className="header__logo" />
          </Link>
          <nav className={"header__navbar " +
              [mobileMenu ? "openMobileMenu" : ""]}>
            <ul className="header__list">
              {/* <li className={"header__item submenu " + [subMenu ? 'closeArrow' : 'openArrow']}onClick={openSubMenu}>
                who we are
                <ul className={"header__sub-List " + [subMenu ? 'openSubmenu' : '']}> 
                  <li className="header__subItem">
                    <Link to="/aboutus" className="header__link">
                      About us
                    </Link>
                  </li>
                  <li className="header__subItem">
                    <Link className="header__link" to="/capabilities">Capabilities</Link>
                  </li>
                  <li className="header__subItem">
                    <Link className="header__link" to="/team">Management Team</Link>
                  </li>
                </ul>
              </li> */}
              <li className="header__item">
                <Link className="header__link" to="/aboutus">about us</Link>
              </li>
              <li className="header__item">
                <Link className="header__link" to="/capabilities">capabilities</Link>
              </li>
              <li className="header__item">
                <Link className="header__link" to="/team">Team</Link>
              </li>
              <li className="header__item">
                <Link className="header__link" to="/news">news</Link>
              </li>
              <li className="header__item">
                <Link className="header__link" to="/partners">partners</Link>
              </li>
              <li className="header__item">
                <Link className="header__link" to="/contactUs">contact us</Link>
              </li>
            </ul>
          </nav>
          <Link to="/" className="header__homeLink">
            <img src={homeIcon} className="header__homeIcon" alt="home icon"/>
          </Link>
          <div
            className="header__burgerMenu-Container"
            onClick={openmobilemenu}
          >
            <i className={mobileMenu ? "openbtn" : "closebtn"}></i>
            <i className={mobileMenu ? "openbtn" : "closebtn"}></i>
            <i className={mobileMenu ? "openbtn" : "closebtn"}></i>
          </div>
        </div>
      </div>
    </header>
  );
}
