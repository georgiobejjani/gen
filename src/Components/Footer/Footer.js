import React from "react";
import whiteLogo from "../../assets/logoWebsite.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
    
      <footer className="footer">
        <Link>
        <img src={whiteLogo} alt="gen white logo" className="footer__logo"/>        
        </Link>
        <ul className="footer__list">
          <li className="footer__item"><Link className="footer__linkItem">News</Link></li>
          <li className="footer__item"><Link className="footer__linkItem" to="/partners">Partners</Link></li>
          <li className="footer__item"><Link className="footer__linkItem" to="contactUs">Contact-us</Link></li>
        </ul>
        <span className="footer__copyright">Copyright © {new Date().getFullYear()} Gen FZE-LLC - All rights reserved</span>
      </footer>
    </>
  );
}
