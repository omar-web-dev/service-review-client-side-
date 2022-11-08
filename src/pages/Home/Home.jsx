import React from 'react';
import Branding from './Branding';
import Services from './Services';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
          <Slider/>
          <Branding/>
          <Services/>
        </div>
    );
};

export default Home;