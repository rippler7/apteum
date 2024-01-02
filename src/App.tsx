import "./App.css";
import Home from "./pages/Home";
import Expertise from "./pages/Expertise";
import NoPage from "./pages/NoPage";
import Story from "./pages/Story";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";

import useScrollToTop from "./hooks/useScrollToTop";

const App = () => {
  useScrollToTop();

  return (
    <>
      <Navbar />

      <main className="pt-[80px]">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="expertise" element={<Expertise />} />
            <Route path="ourstory" element={<Story />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </main>
      <div className="w-full relative sm:relative md:absolute lg:absolute">
        <Footer />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svg-filters hidden" >
        <defs>
          <filter id="marker-shape">
            <feTurbulence type="fractalNoise" baseFrequency="0.001 0.07" numOctaves="1" result="warp" />
            <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="50" in="SourceGraphic" in2="warp" />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default App;
