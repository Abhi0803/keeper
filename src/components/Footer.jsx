import React from "react";

var date = new Date();
const currentYear = date.getFullYear();

function Footer() {
  return (
    < footer >
      < p > Copyright© { currentYear } < /p>
    < /footer>
  )
}

export default Footer;
