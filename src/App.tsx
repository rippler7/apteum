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
    </>
  );
};

export default App;
