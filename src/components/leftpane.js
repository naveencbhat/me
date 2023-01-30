import React from "react";
import mypic from "../assets/me.png";
import "./leftpane.css";

function Leftpane() {
  return (
    <>
      <img src={mypic} alt="Logo" className="img" />
      <div>Naveen Bhat</div>
      <div>mailto:naveencbhat@gmail.com</div>
    </>
  );
}

export default Leftpane;
