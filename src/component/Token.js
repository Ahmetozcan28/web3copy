import React from "react";
import { ReactComponent as HsxLogo2 } from "helpsteps-svg/hsxLogo.svg";
export default function Token() {
  return (
    <div className="container mx-auto mt-24 mb-16 ">
      <header className="text-center relative mb-16">
        <h1 className=" text-power text-9xl tracking-wider  relative flex items-center justify-center text-nowrap">
          MEANINGFULL
          <h1 className="text-6xl tracking-tight font-bold drop-shadow-drop-green bg-gradient-to-r from-left-gradient to-right-gradient inline-block text-transparent bg-clip-text absolute text-nowrap">
            HSX TOKEN
          </h1>
        </h1>
      </header>
      <div className="grid grid-cols-2 justify-around ">
        <div className=" pt-16  ">
          <div className="text-3xl sticky top-1/2  uppercase tracking-wide  font-200 bg-gradient-to-r from-left-gradient to-right-gradient inline-block text-transparent bg-clip-text  text-nowrap ">
            <h2>They are</h2>
            <h2>Like the sun and the moon,</h2>
            <h2>Like the river and the sea,</h2>
            <h2>Like human and technology</h2>
            <h2 className=" font-bold mt-8">Here is HSX and Ecosystem</h2>
          </div>
        </div>
        <div className=" mb-5 ">
          <section className="flex w-[636px] h-[236px] flex-col border-b-[1px] border-left-gradient p-4">
            <div className="flex flex-col justify-between">
              <div>
                <HsxLogo2 />
              </div>
              <h1 className="text-white font-bold text-xl mt-3">
                $USD $HSX $HS
              </h1>
            </div>
          </section>
          <section className="flex flex-col w-[636px] border-b-[1px] border-left-gradient p-4">
            <div className="flex flex-col justify-between">
              <h1 className="text-4xl font-bold mt-5 mb-4 drop-shadow-drop-green bg-gradient-to-r from-left-gradient to-right-gradient inline-block text-transparent bg-clip-text  text-nowrap">
                HSX TOKEN
              </h1>
              <h4 className="text-white  mt-3">Governance token</h4>{" "}
              <h4 className="text-white   mt-3">SWAPABLE WITH HS</h4>
              <h4 className="text-white   mt-3">
                REGULAR BUYBACK&BURN PROGRAM
              </h4>
              <h4 className="text-white   mt-3">Limited supply</h4>
              <h4 className="text-white   mt-3">RWA Utility</h4>
              <h4 className="text-white   mt-3">REWARDS FOR STAKING POOLS</h4>
            </div>
          </section>
          <section className="flex flex-col  border-left-gradient p-4">
            <div className="flex flex-col justify-between">
              <h1 className="text-4xl mt-5 mb-4 font-bold drop-shadow-drop-green bg-gradient-to-r from-left-gradient to-right-gradient inline-block text-transparent bg-clip-text  text-nowrap">
                ECOSYSTEM
              </h1>
              <h4 className="text-white   mt-3"> HS earned in-app</h4>
              <h4 className="text-white   mt-3">Donations</h4>
              <h4 className="text-white   mt-3">Socializng</h4>
              <h4 className="text-white   mt-3">RWA profits</h4>
              <h4 className="text-white   mt-3">FanSteps</h4>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
