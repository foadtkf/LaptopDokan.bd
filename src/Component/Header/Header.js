import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="bg-slate-800 py-5">
      <div className="gap-5 text-xl font-bold flex justify-center">
        <CustomLink className="hover:font-serif" to="/">HOME</CustomLink>
        <CustomLink className="hover:font-serif" to="/reviews">REVIEWS</CustomLink>
        <CustomLink className="hover:font-serif" to="/dashboard">DASHBOARD</CustomLink>
        <CustomLink className="hover:font-serif" to="/blogs">BLOGS</CustomLink>
        <CustomLink className="hover:font-serif" to="/about">ABOUT</CustomLink>
      </div>
    </div>
  );
};

export default Header;