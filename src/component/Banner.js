import React from "react";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

export default function Banner() {
  return (


    <div className=" overflow-hidden mb-10">
      <Parallax translateX={[80,-80]}>
        <h1 className="text-[175px] -mb-28 text-banner font-[900] tracking-widest text-stroke">
          HELPHELPHELP
        </h1>
      </Parallax>
      <Parallax translateX={[-80,80]}>
        <h1 className=" text-[175px] text-banner font-[900] tracking-widest text-stroke">
          STEPSSTEPSSTEPS
        </h1>
      </Parallax>
    </div>
 
  );
}
