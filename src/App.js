import React from "react";

import Header from "./components/Header";
import Videoclip from "./components/Videoclip";
import Main from "./components/Main";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Videoclip />
    </div>
  );
}
