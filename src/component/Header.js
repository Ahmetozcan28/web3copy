import React from "react";
import logo from "helpsteps-png/logo.png";
import mobile from "helpsteps-png/mobile.png";
import { ReactComponent as GradientLeft } from "helpsteps-svg/gradient-left.svg";
import {ReactComponent as GradientRight} from "helpsteps-svg/gradient-right.svg";
export default function Header() {
  return (
    <>
      <header className=" h-screen relative items-center justify-center flex pb-8 ">
        <div className=" absolute text-white overflow-hidden left-0 top-0 opacity-40 -translate-x-72 -translate-y-52">
          <GradientLeft />
        </div>
        <div className=" absolute text-white overflow-hidden right-0  opacity-40 ">
          <GradientRight />
        </div>
        <div className=" container absolute flex items-center justify-between top-8 px-14">
          <img className=" w-52 " src={logo} alt="logo" />
          <div className="bg-gradient-to-r from-left-gradient to-right-gradient  rounded-full p-[1px]">
            <div className="bg-body-color rounded-full">
              <a
                href="#"
                className="bg-gradient-to-r text-center from-left-gradient to-right-gradient inline-block text-transparent bg-clip-text rounded-full   items-center justify-center  back pt-3  pb-3 w-44 "
              >
                Connect to Wallet
              </a>
            </div>
          </div>
        </div>
        <div className="text-white flex items-center container justify-around mt-10">
          <div className="flex flex-col gap-y-5 ">
            <div className="flex items-center gap-x-3 text-gray-500 text-sm ">
              <div className=" w-28 h-[3px] bg-gradient-to-r from-left-gradient to-hr rounded-md  "></div>
              <h6>Web3 Move to Earn</h6>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r tracking-wider from-left-gradient to-right-gradient inline-block text-transparent bg-clip-text">
              PROMOTE HEALTH AND <br />
              CHARITY
            </h1>
            <div className="w-44 bg-gradient-to-r from-left-gradient to-right-gradient  rounded-full p-[1px]">
              <div className="bg-body-color rounded-full">
                <a
                  href="#"
                  className="bg-gradient-to-r text-center w-44 from-left-gradient to-right-gradient inline-block text-transparent bg-clip-text rounded-full   items-center justify-center  back pt-3  pb-3  "
                >
                  Powered by HSX
                </a>
              </div>
            </div>
          </div>
          <div className="w-[636px]">
            <img className="animate-bounce-y" src={mobile} alt="phone" />
          </div>
        </div>
      </header>
    </>
  );
}
