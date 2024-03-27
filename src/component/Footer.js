import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";
import logo from "helpsteps-png/logo.png";

export default function Footer() {
  return (
    <div className="size-4/6 mx-auto flex mb-16 text-left-gradient items-center justify-between">
      <div className="w-56">
        <img src={logo} alt="logo" />
      </div>
      <h3 className=" text-white opacity-60 tracking-wide text-xl">
        Steps for support!
      </h3>
      <div className="flex gap-x-10">
        <a className=" text-xl p-3 bg-social-media rounded-full">
          <FaInstagram />
        </a>
        <a className=" text-xl p-3 bg-social-media rounded-full">
          <FiTwitter />
        </a>
        <a className=" text-xl p-3 bg-social-media rounded-full">
          <TbBrandTelegram />
        </a>
      </div>
    </div>
  );
}
