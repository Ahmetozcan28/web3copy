import { FaQuoteLeft } from "react-icons/fa";
import useScrollY  from "custom-hook/useScrollY";
export default function BenevolenceMeter() {
  const scrollY = useScrollY();
  return (
    <div
      className={`h-screen flex items-center justify-center mb-16  duration-700 ${
        scrollY > 850
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-16"
      }`}
    >
      <div className="text-white flex flex-col justify-center items-center gap-y-5">
        <div className="flex items-center justify-center  ">
          <FaQuoteLeft className=" text-left-gradient text-5xl drop-shadow-drop-green " />
        </div>
        <h2 className=" drop-shadow-drop-green text-4xl font-bold bg-gradient-to-r from-left-gradient to-right-gradient inline-block text-transparent bg-clip-text">
          Rewarder
        </h2>
        <div className="text-center  text-3xl font-thin opacity-70 leading-loose">
          Help Steps is a
          <span className=" ml-2 mr-2 bg-text-span drop-shadow-drop-green  pt-4 pr-5 pb-3 pl-4 border border-left-gradient text-left-gradient rounded-full font-bold">
            WEB3
          </span>
          Move2Earn application to promote health and
          <br />
          charity. The application encourages users to help others while taking
          <br />
          <span className=" ml-2 mr-2 bg-text-span drop-shadow-drop-green  pt-4 pr-5 pb-3 pl-4 border border-left-gradient text-left-gradient rounded-full font-bold">
            STEPS
          </span>
        </div>
      </div>
    </div>
  );
}
