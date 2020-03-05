import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import BandProfile from "./BandProfile";
import Videoclip from "./Videoclip";
import Music from "./Music";

export default function App() {
  return (
    <div className="App container-fluid">
      <Header />
      <Music />
      <Videoclip />
      <BandProfile />
    </div>
  );
}
