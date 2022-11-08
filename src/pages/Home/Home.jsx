import React from 'react';
import AboutService from './AboutService';
import Branding from './Branding';
import Services from './Services';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
          <Slider/>
          <Branding/>
          <AboutService/>
          <Services/>
        </div>
    );
};

export default Home;