import React from "react";
import "./BandProfile.css";
import bandslide1 from "./media/bandslide1.JPG";
import bandslide2 from "./media/bandslide2.JPG";
import bandslide3 from "./media/bandslide3.JPG";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function BandProfile() {
  return (
    <div className="BandProfile">
      <div className="row">
        <div className="col-6">
          <Carousel
            showThumbs={false}
            showStatus={false}
            transitionTime={1500}
            autoPlay
            interval={5000}
            infiniteLoop
            useKeyboardArrows
          >
            <div>
              <img src={bandslide1} alt="banda foto 1" />
            </div>
            <div>
              <img src={bandslide2} alt="banda foto 2" />
            </div>
            <div>
              <img src={bandslide3} alt="banda foto 3" />
            </div>
          </Carousel>
        </div>
        <div className="col-6">
          <p>
            Os <strong>Fera</strong> são uma banda de rock alternativo baseada
            na Póvoa de Varzim. Em 2020 lançam o seu Extended Play de estreia
            homónimo.
          </p>
          <p>
            Este EP é uma breve viagem de emoções, metade introspeção, metade
            murro no estômago. Na prosa, o trabalho visita temas de
            interdependência e a vontade de uma realidade melhor. Estes temas
            são evidentes no single <i>Recado</i>, capturando a ideia de jornada
            e resiliência nos meandros da distorção e no drama da palavra
            portuguesa.{" "}
          </p>
          <p>
            A composição deste trabalho começa no ambiente íntimo da sala de
            ensaio dos Fera com o guitarrista e vocalista Rodolfo Cunha e o
            baterista Diogo Marafona. Rumo ao estúdio da SenteMente Records,
            localizado na sala 306 do Centro Comercial STOP, a banda em
            colaboração com o músico e produtor Carlos Costa Alves, finalizam as
            canções.
          </p>
          <small>
            <strong>Fera</strong> estará disponível ao público apenas em edição
            digital.
          </small>
        </div>
      </div>
    </div>
  );
}
