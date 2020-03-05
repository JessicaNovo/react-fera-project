import React from "react";
import "./Music.css";
import Recado from "./media/Recado.png";
import Cura from "./media/Cura.png";
import Limbo from "./media/Limbo.png";
import NoAr from "./media/NoAr.png";

export default function Music() {
  return (
    <div className="Music">
      <div className="row row-no-gutters">
        <div className="col-sm-3">
          <img className="art recado" src={Recado} alt="Recado" />
        </div>
        <div className="col-sm-3">
          <img className="art cura" src={Cura} alt="Cura" />
        </div>
        <div className="col-sm-3">
          <img className="art limbo" src={Limbo} alt="Limbo" />
        </div>
        <div className="col-sm-3">
          <img className="art ar" src={NoAr} alt="No ar" />
        </div>
      </div>
    </div>
  );
}
