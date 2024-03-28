import React from "react";
import { useState, useEffect } from "react";
import { ReactComponent as Star } from "helpsteps-svg/star.svg";
import { ReactComponent as GradientLeft } from "helpsteps-svg/gradient-left.svg";
import { ReactComponent as Ring } from "helpsteps-svg/ring.svg";
import { ReactComponent as MobileGradient } from "helpsteps-svg/mobileGradient.svg";
import useScrollY from "custom-hook/useScrollY";
import property from "api/property.json";
export default function HelpStepsAppPowerPage() {
  const [propertyHelp, setPropertyHelp] = useState([]);
  const scrollY = useScrollY();
  useEffect(() => {
    setPropertyHelp(property);
  });
  // ${scrollY > 1600 ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 translate-x-16 -translate-y-16"}
  return (
    <div className="container mx-auto mb-16">
      <header
        className={`text-center relative mb-16 duration-700 ${
          scrollY > 2000 ? "opacity-100 " : "opacity-0"
        }`}
      >
        <h1 className=" text-power tracking-wider text-9xl relative flex items-center justify-center text-nowrap">
          POWER IS HERE
          <h1 className="text-6xl tracking-tight font-bold drop-shadow-drop-green bg-gradient-to-r from-left-gradient to-right-gradient inline-block text-transparent bg-clip-text absolute text-nowrap">
            HELP STEPS APP
          </h1>
        </h1>
      </header>
      <div className="grid grid-rows-5">
        {propertyHelp.map((property) => (
          <section key={property.id}>
            <div
              className={`flex justify-around items-center ${
                property.id % 2 === 0 ? "" : "flex-row-reverse"
              } `}
            >
              <div className="flex flex-col items-center justify-center relative ">
                <div className="-mt-3">
                  <h6 className="text-white text-left opacity-80 mb-3 tracking-wide">
                    {property.mdtitle}
                  </h6>
                  <div className="relative">
                    <h1 
                      className={`${
                        scrollY > property.scrollTitle
                          ? "opacity-100 translate-x-0 "
                          :`opacity-0 ${property.id % 2 === 0 ? "translate-x-16" : "-translate-x-16"}`
                      } duration-700  text-7xl  font-bold bg-gradient-to-r drop-shadow-drop-green from-left-gradient to-right-gradient inline-block text-transparent bg-clip-text`}
                    >
                      {property.title}
                    </h1>
                    <div className="w-4 flex h-4 rounded-full bg-dart shadow-dart-sh top-5 absolute  -left-2"></div>
                  </div>
                </div>
                <div className="absolute bottom-1/2 -translate-y-48 right-0 translate-x-16">
                  <Star />
                </div>
                <div
                  className={`absolute opacity-60 -left-[200px] -top-16 ${
                    property.id === 0 ? "block" : "hidden"
                  }`}
                >
                  <GradientLeft />
                </div>
              </div>
              <div className="relative  flex items-center justify-center text-center">
                <img className={`z-10 duration-700 ${scrollY > property.scrollApp ? " opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`} src={property.image} />
                <div className="absolute overflow-hidden">
                  <Ring />
                </div>
                <div className="absolute overflow-hidden">
                  <MobileGradient />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
