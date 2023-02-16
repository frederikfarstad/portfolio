import Introduction from "../components/Introduction";
import Textbox from "../components/Textbox";
import React, { useRef } from 'react';

function Homepage() {

    const pageStartRef = useRef<HTMLDivElement>(null);

    return (
      <>
        {/*<div className="scrollbar-hide h-screen overflow-scroll relative w-screen bg-gradient-to-br from-[#020024] via-[#25057d] to-[#5c0979]">*/}
        <div className="scrollbar-hide h-screen overflow-scroll relative w-screen gradient-background">
            <Introduction pageStartRef={pageStartRef}/>
            <div ref={pageStartRef} id="pageStart" className="pt-[10vh]">
              <div className="ml-[10vw] mb-[10vh]">
                  <Textbox />
              </div>
              <div className="ml-[55vw] mb-[10vh]">
                  <Textbox />
              </div>
              <div className="ml-[10vw]">
                  <Textbox />
              </div>
            </div>
        </div>
      </>
    );
  }
  
  export default Homepage;