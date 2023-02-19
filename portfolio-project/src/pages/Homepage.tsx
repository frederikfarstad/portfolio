import Introduction from "../components/Introduction";
import Textbox1 from "../components/Textbox1";
import { WebsiteCarbonBadge } from 'react-websitecarbon-badge';
import { useRef } from 'react';
import HoverText from "../components/HoverText";
import portrait from "../../public/img/portrait.jpeg";
import arrow from "../../public/img/arrow.png";

function Homepage() {

    const pageStartRef = useRef<HTMLDivElement>(null);

    return (
      <>
        <div className="scrollbar-hide h-screen overflow-scroll relative w-screen gradient-background">

            {/*Landing page*/}
            <Introduction pageStartRef={pageStartRef}/>

            {/*Portfolio start*/}
            <div ref={pageStartRef} id="pageStart" className="pt-[10vh] sm:pt-[0vh]">

              {/*First textbox and image*/}
              <div className="ml-[10vw] mr-[10vh] mb-[10vh] sm:ml-0 sm:mr-0 flex justify-evenly flex-wrap-reverse relative">
                <div className="w-fit inline-block"> 
                  <Textbox1 />
                </div>
                <div className="w-[500px] h-[400px] inline-block relative mb-[5vh]">
                  <img src={portrait} className="absolute h-[300px] w-auto rounded-full right-0 sm:m-auto sm:relative top-[5vh] shadow-lg shadow-purple-800 select-none hover:scale-105 transition-all duration-200"/>
                  <img src={arrow} className="absolute h-[100px] w-auto left-[10px] top-[75px] sm:hidden select-none"/>
                  <div className="absolute w-auto left-0 rotate-12 top-[150px] font-ModerneSans text-white text-2xl sm:hidden">
                    <HoverText text="That's" />
                    <p className="inline text-base select-none"> </p>
                    <HoverText text="me!" />
                  </div>
                </div>
              </div>

              <div className="ml-[55vw] mb-[10vh]">
                  
              </div>
              <div className="ml-[10vw]">
                  
              </div>
            </div>

            {/*WebsiteCarbonbadge*/}
            <div className="absolute m-0 w-fit right-[1vw]">
              <WebsiteCarbonBadge dark={true} url="farstad.dev"/>
            </div>
        </div>
      </>
    );
  }
  
  export default Homepage;