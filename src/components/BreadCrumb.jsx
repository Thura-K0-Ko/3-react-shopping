import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const BreadCrumb = ({ currentPageTitle }) => {
  return (
    <div className=" flex gap-2 mb-5">
      <Link to="/" className=" text-gray-500">Home</Link>
      <span className=" text-gray-500">/</span>
      <p >{currentPageTitle}</p>
    </div>
  );
};

export default BreadCrumb;
