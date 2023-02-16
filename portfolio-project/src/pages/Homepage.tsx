import Introduction from "../components/Introduction";
import Textbox from "../components/Textbox";
import { WebsiteCarbonBadge } from 'react-websitecarbon-badge';
import React, { useRef } from 'react';

function Homepage() {

    const pageStartRef = useRef<HTMLDivElement>(null);

    return (
      <>
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
            <div className="absolute m-0 w-fit right-[1vw]">
              <WebsiteCarbonBadge dark={true} url="farstad.dev"/>
            </div>
        </div>
      </>
    );
  }
  
  export default Homepage;