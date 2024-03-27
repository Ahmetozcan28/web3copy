import React from "react";

export default function Joinus() {
  return (
    <div className=" size-4/6 mx-auto text-center border border-left-gradient  mb-24 rounded-3xl ">
      <div className=" bg-joinus bg-cover bg-center p-24">
        <h1 className="text-8xl mb-8  font-bold bg-gradient-to-r drop-shadow-drop-green from-left-gradient to-right-gradient inline-block text-transparent bg-clip-text">
          JOIN US!
        </h1>
        <div className="grid place-items-center">
            <img src="https://helpsteps.io/assets/img/world_map.png" className=" w-[750px] h-[438px]" />
        </div>
      </div>
    </div>
  );
}
