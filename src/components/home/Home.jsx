import React, { useState, useEffect } from 'react';
import FirstSection from './FirstSection';
import FourthSection from './FourthSection';
import Trainers from '../trainers/Trainers';
import Eighth from './Eighth';
import Loader from "react-js-loader";
import Footer from '../footer/Footer';
const Home = () => {

  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
     
  //     setIsLoading(false);
  //   }, 2000); 
  // }, []);

  return (
    <div className={`margin-sections`}>
      {isLoading ? (
     
        <Loader />
      ) : (
              <>
          <FirstSection />
          <FourthSection />
          <Trainers />
          <Eighth />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
