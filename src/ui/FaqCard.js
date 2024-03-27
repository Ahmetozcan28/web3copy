import React from "react";
import { IoIosArrowDown } from "react-icons/io";
export default function FaqCard({ faq, openId, setOpenId }) {
  const isOpen = openId === faq.id;

  return (
    <section
      className="flex flex-col w-[636px]"
      onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
    >
      <div className="flex flex-col justify-between w-full bg-faq-card p-4 pt-6 pb-6 rounded-lg h-full">
        <div className="flex justify-between ">
          <div className="uppercase text-white font-semibold">
            {faq.questions}
          </div>
          <div className="text-2xl text-left-gradient">
            <IoIosArrowDown
              className={`${
                isOpen ? " rotate-180 text-white" : ""
              } transition duration-300 ease-in-out`}
            />
          </div>
        </div>
        <div
          className={`${
            isOpen ? " max-h-[200px]" : " max-h-0"
          }  transition-all duration-300 ease-in-out overflow-hidden`}
        >
          {faq.answers}
        </div>
      </div>
    </section>
  );
}
