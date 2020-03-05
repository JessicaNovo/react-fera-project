import React from "react";
import "./Videoclip.css";

export default function Videoclip() {
  return (
    <div className="Videoclip">
      <iframe
        title="recado"
        width="100%"
        height="560"
        src="https://www.youtube.com/embed/XHRZlhQwCIo?rel=0"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      ></iframe>
    </div>
  );
}
