import React from "react";
import { FaPeopleRobbery } from "react-icons/fa6";
import { FaGamepad } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";
import { Controller, Scene } from "react-scrollmagic";
export default function HelpStepsHub() {
  return (
    <Controller>
      <Scene duration={600} triggerHook="onEnter">
            <div className=" container mx-auto mb-16">
              <div className="grid grid-cols-4 text-white">
                <div>
                  <div className=" w-16 h-16 border border-left-gradient grid place-items-center rounded-xl shadow-box-green bg-text-span">
                    <FaPeopleRobbery className=" text-3xl text-left-gradient" />
                  </div>
                  <h1 className="text-4xl font-200 bg-gradient-to-r from-left-gradient to-right-gradient inline-block text-transparent bg-clip-text mt-6">
                    SOCIAL-FI
                  </h1>
                  <p className=" font-200  opacity-70 mt-3 w-[306px] tracking-wide ">
                    At HelpSteps, we believe in the power of stepping together.
                    With our app's social feed feature, you can discover local
                    activities and connect with friends. By stepping together as
                    a community, we can make a bigger impact in the world.
                  </p>
                </div>
                <div>
                  <div className=" w-16 h-16 border border-left-gradient grid place-items-center rounded-xl shadow-box-green bg-text-span ">
                    <FaGamepad className=" text-3xl text-left-gradient" />
                  </div>

                  <h1 className="text-4xl font-200 bg-gradient-to-r from-left-gradient to-right-gradient inline-block text-transparent bg-clip-text mt-6">
                    FANSTEPS
                  </h1>
                  <p className=" font-200  opacity-70 mt-3 w-[306px] tracking-wide ">
                    FanSteps is a revolutionary module within the HelpSteps
                    ecosystem, designed for sports enthusiasts and fans who want
                    to elevate their passion to new heights. It's a dynamic
                    platform that allows users to align their physical activity
                    with their favorite sports clubs, athletes, and celebrities
                    in a way that actively contributes to their success.
                  </p>
                </div>
                <div>
                  <div className=" w-16 h-16 border border-left-gradient grid place-items-center rounded-xl shadow-box-green bg-text-span">
                    <FaHandsHelping className=" text-3xl text-left-gradient" />
                  </div>

                  <h1 className="text-4xl font-200 bg-gradient-to-r from-left-gradient to-right-gradient inline-block text-transparent bg-clip-text mt-6">
                    CAMPAIGNS
                  </h1>
                  <p className=" font-200 opacity-70 mt-3 w-[306px] tracking-wide ">
                    With just a few simple steps, you can create a campaign and
                    invite your community to support a worthy cause. Whether
                    it's raising funds for a charitable organization, promoting
                    a local event, or supporting a personal cause, the HelpSteps
                    app provides a platform for users to make a difference and
                    mobilize their communities.
                  </p>
                </div>
                <div>
                  <div className=" w-16 h-16 border border-left-gradient grid place-items-center rounded-xl shadow-box-green bg-text-span">
                    <FaBrain className=" text-3xl text-left-gradient" />
                  </div>

                  <h1 className="text-4xl font-200 bg-gradient-to-r from-left-gradient to-right-gradient inline-block text-transparent bg-clip-text mt-6">
                    RWA
                  </h1>
                  <p className=" font-200  opacity-70 mt-3 w-[306px] tracking-wide ">
                    HelpSteps RWA ecosystem NFTs footwear of soccer players on
                    the field. The NFTized shoes are shaped according to the
                    footballer's match performance and users are rewarded with
                    HSX. The reward amount increases for contributions such as
                    goals, assists, etc.
                  </p>
                </div>
              </div>
            </div>
      </Scene>
    </Controller>
  );
}
