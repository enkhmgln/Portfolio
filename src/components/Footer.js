import "./FooterStyles.css";

import React from "react";
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
  return <div className="footer">
    <div className="footer-container">
      <div className="left">
        <div className="location">
          <FaHome size={20} style={{color:'#fff', marginRight:"2rem"}}/>
          <div>
            <p>123 housing society </p>
            <p>Mongolia. </p>
          </div>
          </div>
          <div className="phone">
            <h4>
            <FaPhone size={20} style={{color:'#fff', marginRight:'2rem'}}/>
               +976 88603319
              </h4>
          <h4>
            <FaMailBulk size={20} style={{color:'#fff', marginRight:'2rem'}}/>
               enkhamgalan@zohomail.com
              </h4>
        </div>
      </div>
      <div className="right">
        <h4>Миний тухай</h4>
        <p>Намайг Н.Энх-амгалан гэдэг. Би 2004,05,07нд Ховд аймагт төрсөн. Одоогоор Улаанбаатар хотод ажиллаж амьдарч байгаа билээ.
        </p>
        <div className="social">
        <a href="https://www.facebook.com/Real.Kaguya">
        <FaFacebook size={30} style={{color:'#fff', marginRight:'1rem'}}/>
        </a>
        <a href="https://github.com/enkhmgln">
        <FaGithub size={30} style={{color:'#fff', marginRight:'1rem'}}/>
        </a>
        <a href="https://www.facebook.com/Real.Kaguya">
        <FaLinkedin size={30} style={{color:'#fff', marginRight:'1rem'}}/>
        </a>
       </div>
      </div>
    </div>
  </div>;
};

export default Footer;
