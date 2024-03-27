import React from "react";
import { useState, useEffect } from "react";
import tokenomicss from "api/tokenomics.json";
export default function Tokenomic() {
  const [tokenomics, setTokenomics] = useState([]);
  useEffect(() => {
    setTokenomics(tokenomicss);
  });
  return (
    <div className="container mx-auto mt-24 mb-24 ">
      <header className="text-center relative mb-16">
        <h1 className=" text-power text-9xl relative flex items-center justify-center text-nowrap tracking-wider">
          CLEAR - SAFE
          <h1 className="text-6xl tracking-tight font-bold drop-shadow-drop-green bg-gradient-to-r from-left-gradient to-right-gradient inline-block text-transparent bg-clip-text absolute text-nowrap">
            TOKENOMIC
          </h1>
        </h1>
      </header>

      <div className="flex justify-around">
        <div className="w-[636px] pt-24">
          <img src="https://helpsteps.io/assets/img/token3.png" alt="token " />
        </div>
        <div className="grid grid-rows-7 w-[636px] h-[636px] gap-y-3">
          {tokenomics.map((token) => (
            <div
              key={token.id}
              className=" bg-tokenomic rounded-xl border-l-8 border-card-border flex justify-between items-center pl-3 pr-3 hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="flex gap-x-2">
                <span className=" text-left-gradient  font-bold">
                  {token.percent}
                </span>
                <div className="text-white font-semibold tracking-wide">
                  {token.sale}
                </div>
              </div>
              <div className="text-right text-white opacity-80">
                <span>{token.token}</span> <br />
                {token.supply}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
