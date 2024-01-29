import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Faq from "./pages/Faq";
import NoPage from "./pages/NoPage";
import Careers from "./pages/Careers";
import Story from "./pages/Story";
import OurExperts from "./pages/OurExperts";
import ContactUs from "./pages/ContactUs";

import Footer from "./components/Footer";
import Navbar from "./components/NavBar";

import useScrollToTop from "./hooks/useScrollToTop";
import ExpertPage from "./pages/ExpertPage";
import { Helmet } from "react-helmet";

import "./App.css";

const App = () => {
  useScrollToTop();

  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Welcome to Apteum</title>
        <link rel="canonical" href="https://apteum.com" />
        <meta name="description" content="Apteum pairs you with professionals abroad to build bespoke staffing solutions" />
        <meta name="keywords" content="Apteum, customer service, people support, professional services, staffing solutions, staffing, expertise, service specialists, employers, jobseekers, project management, talented professionals, staff recruitment"></meta>
      </Helmet>
      <Navbar />

      <main className="mt-[80px] relative">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="ourstory" element={<Story />} />
            <Route path="faqs" element={<Faq />} />
            <Route path="careers" element={<Careers />} />
            <Route path="experts" element={<OurExperts />} />
            <Route path="experts/:id" element={<ExpertPage />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </main>
      <div className="w-full bottom-0 relative lg:fixed z-[2]">
        <Footer />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="svg-filters hidden"
      >
        <defs>
          <filter id="marker-shape">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.001 0.07"
              numOctaves="1"
              result="warp"
            />
            <feDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              scale="50"
              in="SourceGraphic"
              in2="warp"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default App;
