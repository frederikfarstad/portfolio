import { useRef } from "react";
import About from "../components/about/About";
import Landingpage from "../components/landingpage/Landingpage";
import Navbar from "../components/navbar/Navbar";
import ClockwiseSeperator from "../components/seperators/ClockwiseSeperator";
import CounterClockwiseSeperator from "../components/seperators/CounterClockwiseSeperator";
import Technologies from "../components/technologies/Technologies";
import Mail from "../components/mail/Mail.tsx";

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Navbar />

      <Landingpage nextRef={aboutRef} />

      <About ref={aboutRef} />

      <ClockwiseSeperator />

      <Technologies />

      <CounterClockwiseSeperator />

      <Mail />
    </>
  );
}

export default App;
