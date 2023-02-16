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
      <div className="relative top-0 transition-all duration-700 ease-in-out">
        <div className="pt-[45vh] h-[90vh] font-ModerneSans text-white  m-auto w-fit text-6xl font-semibold">
            <div className="text-3xl">
            <HoverText text="Welcome!"/>
            </div>

            <HoverText text="Frederik"/>
            <p className="inline text-base select-none"> </p>
            <HoverText text="Farstad"/>

            <div className="ml-auto w-fit text-3xl">
              <HoverText text="Software"/>
              <p className="inline text-base select-none"> </p>
              <HoverText text="Engineer"/>
              <p className="inline text-base select-none"> </p>
              <HoverText text="/"/>
              <p className="inline text-base select-none"> </p>
              <HoverText text="Student"/>
            </div>
        </div>
        <a onClick={handleScroll}>
          <button className="flex items-center justify-center animate-bounce h-[8vh] text-white m-auto w-[8vh] rounded-full mb-[2vh] bg-neutral-800 bg-opacity-50">
              <p className="relative -top-2 rotate-180 scale-[300%] select-none">^</p>
          </button>
        </a>
      </div>
    );
  }

  export default Introduction;