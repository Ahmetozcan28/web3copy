import React from "react";
import { useState, useEffect } from "react";
import GradientButton from "ui/GradientButton";
import faqjson from "api/faq.json";
import FaqCard from "ui/FaqCard";
export default function Faq() {
  const [faq, setFaq] = useState([]);
  useEffect(() => {
    setFaq(faqjson);
  });
  const [openId, setOpenId] = useState(null);

  return (
    <div className="container mx-auto  pt-8 mb-16">
      <header className="text-center relative mb-16">
        <h1 className=" text-power tracking-wider text-9xl relative flex items-center justify-center text-nowrap">
          USEFUL
          <h1 className="text-6xl tracking-tight font-bold drop-shadow-drop-green bg-gradient-to-r from-left-gradient to-right-gradient inline-block text-transparent bg-clip-text absolute text-nowrap">
            FAQ
          </h1>
        </h1>
      </header>
      <div className="flex">
        <div className="flex flex-col">
          <div className="flex gap-x-4 mb-6">
            <GradientButton isActive={true}>Token</GradientButton>
            <GradientButton>General</GradientButton>
            <GradientButton>FanSteps</GradientButton>
            <GradientButton>Donations</GradientButton>
            <GradientButton>Conversion</GradientButton>
          </div>
          <div className="flex flex-col gap-y-3 tracking-wide">
            {faq.map((faq) => (
              <FaqCard key={faq.id} faq={faq} openId={openId} setOpenId={setOpenId} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
