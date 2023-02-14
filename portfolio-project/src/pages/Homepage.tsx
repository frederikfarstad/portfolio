import Introduction from "../components/Introduction";
import Textbox from "../components/Textbox";

function Homepage() {

    return (
      <>
        <div className="scrollbar-hide snap-y snap-mandatory h-screen overflow-scroll relative w-screen bg-gradient-to-br from-[#020024] via-[#25057d] to-[#5c0979]">
            <Introduction />
            <div className="snap-start snap-always pt-[20vh] h-[300vh]">
              <div className="ml-[10vw] mb-[4vh]">
                  <Textbox />
              </div>
              <div className="ml-[55vw]">
                  <Textbox />
              </div>
            </div>
        </div>
      </>
    );
  }
  
  export default Homepage;