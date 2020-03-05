import React from "react";
import "./Header.css";
import banner from "./media/banner.JPG";

export default function Header() {
  return (
    <div className="Header">
      <div>
        <h1 className="band-name">F E R A</h1>
        <img className="banner" src={banner} alt="the band" />
      </div>
    </div>
  );
}
