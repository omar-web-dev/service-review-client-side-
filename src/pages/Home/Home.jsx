import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AboutService from './AboutService';
import Branding from './Branding';
import Services from './Services/Services';
import Slider from './Slider';

const Home = () => {
  const services = useLoaderData()
    return (
        <div>
          <Slider/>
          <Branding/>
          <AboutService/>
          <Services services={services}/>
        </div>
    );
};

export default Home;