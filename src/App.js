import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Second from "./components/trainersPage/Second";

const About = React.lazy(() => import("./components/about/About"));
const TrainersPage = React.lazy(() =>
  import("./components/trainersPage/TrainersPage")
);

const Contact = React.lazy(() => import("./components/contact/Contact"));



const App = () => {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
             {/* <Route path="trainers" element={<TrainersPage />} /> */}
          <Route path="studios" element={<TrainersPage/>} />
        <Route path="contact" element={<Contact />} />
       
          {/* <Route path="calculator" element={<Calculator />} /> */}
         
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
