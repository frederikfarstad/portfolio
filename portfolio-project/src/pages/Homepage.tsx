import Introduction from "../components/Introduction";
import Textbox from "../components/Textbox";

function Homepage() {

    return (
      <>
        <div className="scrollbar-hide snap-y snap-mandatory h-screen overflow-scroll relative w-screen bg-gradient-to-br from-[#020024] via-[#25057d] to-[#5c0979]">
            <Introduction />
            <div className="snap-start scrollbar-hide pt-[10vh] h-screen overflow-scroll">
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