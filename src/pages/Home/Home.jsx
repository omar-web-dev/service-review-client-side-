import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AboutService from './AboutService';
import Branding from './Branding';
import Services from './Services/Services';
import Slider from './Slider';

const Home = () => {
  const service = useLoaderData()
  // console.log(data)
    return (
        <div>
          <Slider/>
          <Branding/>
          <AboutService/>
          <Services services={service}/>
        </div>
    );
};

export default Home;