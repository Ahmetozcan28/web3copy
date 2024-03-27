import React, { useState, useEffect } from "react";
import partners from "api/partners.json";
import PartnersCard from "ui/PartnersCard";
export default function Partners() {
  const [partner, setPartner] = useState([]);
  useEffect(() => {
    setPartner(partners);
  }, []);
  return (
    <div className=" size-4/6 mx-auto pt-16">
      <header className="text-center relative mb-16">
        <h1 className=" text-power tracking-wider text-9xl relative flex items-center justify-center text-nowrap">
          WONDERFUL
          <h1 className="text-6xl tracking-tight font-bold drop-shadow-drop-green bg-gradient-to-r from-left-gradient to-right-gradient inline-block text-transparent bg-clip-text absolute text-nowrap">
            PARTNERS&BACKERS
          </h1>
        </h1>
      </header>
      <div className="grid grid-cols-4 grid-rows-7 text-center">
        {partner.map((partner) => (
          <PartnersCard key={partner.id} img={partner.img} />
        ))}
      </div>
    </div>
  );
}
