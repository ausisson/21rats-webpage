

import React, { useEffect } from "react";
import { WavyHeader } from "../components";
import ratsitting from "../assets/ratsitting.gif"


export default function Index() {
  
  return (
    <div className="homepage">
      <div className="landing">
      <h1>
      21 rats & counting
      </h1>
      <h2 className = "inline">
      .com
      </h2>
      </div>
      <div className="landing">
        <img className="ratsitting" src={ratsitting}>
        </img>
        <div className="links">
          <WavyHeader value="youtube" link="https://youtube.com/@21ratsandcounting"/>
          <div className="spacer" />
          <WavyHeader value="instagram" link="https://instagram.com/ratmanlately"/>
          <div className="spacer" />
          <WavyHeader value="twitter" link="https://twitter.com/21ratsinc"/>
          <div className="spacer" />
          <WavyHeader value="merch" link="https://google.com/?=rat"/>
        </div>
      </div>
    </div>
  );
}
