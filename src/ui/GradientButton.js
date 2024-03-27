import React from "react";

export default function GradientButton({ children, isActive}) {
  return (
    <div>
      <div className={`${isActive ? " bg-gradient-to-r" : "" }   from-left-gradient to-right-gradient  rounded-full  p-[1px]`}>
        <div className="bg-body-color rounded-full tracking-wide">
          <a
            href="#"
            className={`${isActive ? "bg-gradient-to-r" : " text-white opacity-70 "}   text-center from-left-gradient to-right-gradient inline-block text-transparent bg-clip-text rounded-full   items-center justify-center  back pt-2 pb-2 pl-5 pr-5`}
          >
            {children}
          </a>
        </div>
      </div>
    </div>
  );
}
