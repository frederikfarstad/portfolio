import { useRef } from "react";
import About from "../components/about/About";
import Landingpage from "../components/landingpage/Landingpage";
import Navbar from "../components/navbar/Navbar";

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Navbar />

      <Landingpage nextRef={aboutRef} />

      <About ref={aboutRef} />
      {/*
      <Mail />
      */}
    </>
  );
}

export default App;
