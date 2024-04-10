import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";

const Socials = ({ className, handleContactScroll, isEmail = true }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.filter((item) => isEmail ? item : !item.title.includes("Email")).map((social, index) => (
        <Button key={index} onClick={social.title.includes("Email") ? handleContactScroll : () => window.open(social.link)}>
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
