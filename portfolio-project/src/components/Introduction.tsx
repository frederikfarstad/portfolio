import HoverText from "./HoverText";
import React, { useRef } from 'react';

interface IntroductionProps {
  pageStartRef: React.RefObject<HTMLDivElement>;
}

function Introduction({ pageStartRef }: IntroductionProps) {

    const handleScroll = () => {
      pageStartRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <div className="transition-all duration-700 ease-in-out">
        <div className="pt-[45vh] h-[90vh] font-ModerneSans text-white  m-auto w-fit text-6xl sm:text-3xl font-semibold">
            <div className="text-3xl sm:text-xl">
              <HoverText text="Welcome!"/>
            </div>

            <HoverText text="Frederik"/>
            <p className="inline text-base select-none"> </p>
            <HoverText text="Farstad"/>

            <div className="ml-auto w-fit text-3xl sm:text-xl">
              <HoverText text="Computer"/>
              <p className="inline text-base select-none"> </p>
              <HoverText text="Science"/>
              <p className="inline text-base select-none"> </p>
              <HoverText text="Student"/>
            </div>
        </div>
        <a onClick={handleScroll} className="sm:hidden">
          <button className="flex items-center justify-center animate-bounce h-[50px] text-white m-auto w-[50px] rounded-full mb-[2vh] bg-neutral-800 bg-opacity-50">
              <p className="relative -top-2 rotate-180 scale-[300%] select-none">^</p>
          </button>
        </a>
      </div>
    );
  }

  export default Introduction;