import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        
        <a href="https://www.linkedin.com/in/charles-sunday-6650a0251/" target="_blank">
         <LinkedInIcon />
         </a>
         
      </div>
      <p> &copy; 2022 pedrotech.com</p>
    </div>
  );
}

export default Footer;
