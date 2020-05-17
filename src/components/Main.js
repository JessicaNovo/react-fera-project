import React, { useState } from "react";

import ReactCardFlip from "react-card-flip";

import BandProfile from "./BandProfile";

import Recado from "../media/Recado.png";
import Cura from "../media/Cura.png";
import Limbo from "../media/Limbo.png";
import NoAr from "../media/NoAr.png";

import "./main.css";

export default function Music() {
  const [recadoIsFlipped, setRecadoIsFlipped] = useState(false);
  const [curaIsFlipped, setCuraIsFlipped] = useState(false);
  const [limboIsFlipped, setLimboIsFlipped] = useState(false);
  const [noArIsFlipped, setNoArIsFlipped] = useState(false);

  function handleClick(event) {
    console.log(document.getElementById(event.target.value));
    event.preventDefault();
    if (event.target.value === "recado" && recadoIsFlipped === false) {
      setRecadoIsFlipped(true);
    } else if (event.target.value === "cura" && curaIsFlipped === false) {
      setCuraIsFlipped(true);
    } else if (event.target.value === "limbo" && limboIsFlipped === false) {
      setLimboIsFlipped(true);
    } else if (event.target.value === "no-ar" && noArIsFlipped === false) {
      setNoArIsFlipped(true);
    } else if (event.target.value === "recado" && recadoIsFlipped === true) {
      setRecadoIsFlipped(false);
    } else if (event.target.value === "cura" && curaIsFlipped === true) {
      setCuraIsFlipped(false);
    } else if (event.target.value === "limbo" && limboIsFlipped === true) {
      setLimboIsFlipped(false);
    } else if (event.target.value === "no-ar" && noArIsFlipped === true) {
      setNoArIsFlipped(false);
    }
  }

  return (
    <div className="Main">
      <div className="main__wrapper">
        <div className="card__wrapper">
          <ReactCardFlip
            isFlipped={recadoIsFlipped}
            flipDirection="horizontal"
            flipSpeedBackToFront="1"
            flipSpeedFrontToBack="1"
          >
            <div className="card__front">
              <img className="artwork__recado" src={Recado} alt="Recado" />
              <button
                className="button button__recado"
                value="recado"
                onClick={handleClick}
              >
                Conhecer a banda
              </button>
            </div>
            <div className="card__back card__back__recado">
              <BandProfile />
              <button
                className="button--close"
                value="recado"
                onClick={handleClick}
              >
                x
              </button>
            </div>
          </ReactCardFlip>
        </div>

        <ReactCardFlip
          isFlipped={curaIsFlipped}
          flipDirection="horizontal"
          flipSpeedBackToFront="1"
          flipSpeedFrontToBack="1"
        >
          <div className="card__front">
            <img className="artwork__cura" src={Cura} alt="Cura" />
            <button
              className="button button__cura"
              value="cura"
              onClick={handleClick}
            >
              Ouvir
            </button>
          </div>
          <div className="card__back card__back__cura">
            <h2>Music</h2>
            <button
              className="button--close"
              value="cura"
              onClick={handleClick}
            >
              x
            </button>
          </div>
        </ReactCardFlip>

        <ReactCardFlip
          isFlipped={limboIsFlipped}
          flipDirection="horizontal"
          flipSpeedBackToFront="1"
          flipSpeedFrontToBack="1"
        >
          <div className="card__front">
            <img className="artwork__limbo" src={Limbo} alt="Limbo" />
            <button
              className="button button__limbo"
              value="limbo"
              onClick={handleClick}
            >
              Próximas datas
            </button>
          </div>
          <div className="card__back card__back__limbo">
            <h2>Próximas datas</h2>
            <button
              className="button--close"
              value="limbo"
              onClick={handleClick}
            >
              x
            </button>
          </div>
        </ReactCardFlip>

        <ReactCardFlip
          isFlipped={noArIsFlipped}
          flipDirection="horizontal"
          flipSpeedBackToFront="2"
          flipSpeedFrontToBack="2"
        >
          <div className="card__front">
            <img className="artwork__no-ar" src={NoAr} alt="No ar" />
            <button
              className="button button__no-ar"
              value="no-ar"
              onClick={handleClick}
            >
              Créditos
            </button>
          </div>
          <div className="card__back card__back__no-ar">
            <h2>Pessoas que contribuiram para isto acontecer</h2>
            <button
              className="button--close"
              value="no-ar"
              onClick={handleClick}
            >
              x
            </button>
          </div>
        </ReactCardFlip>
      </div>
    </div>
  );
}
