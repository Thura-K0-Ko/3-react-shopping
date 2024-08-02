import React from "react";

const Footer = () => {
 const date= new Date();
const  currentYear= date.getFullYear()
  return (
    <footer className=" mx-5 mt-auto bg-black text-white text-center py-2">
      ©{currentYear}  <a href="http:/mms-it.com" className=" text-gray-400 underline">MMS IT</a>. All rights reserved.
    </footer>
  );
};

export default Footer;
