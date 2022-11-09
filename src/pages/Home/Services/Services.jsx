import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import ServiceCard from './ServiceCard';


const Services = ({ services }) => {
    return (
        <div className='max-w-[1400px] mx-auto p-5'>
            <div className=' text-center max-w-[992px] mx-auto'>
                <p className=' text-blue-500 font-semibold'>OUR SERVICES</p>
                <h2 className='py-4 text-black md:text-5xl text-3xl md:leading-[65px] font-bold'>Our Creative Graphic Design Services in ESSUIN Embraces</h2>
                <p>Smart tools and techniques to create stunning designs, helping brands to communicate the right brand message to potential clients on different social groups and have a memorable positive impression. Connect with the professional graphic designers or illustrator designers of Esolz Technologies, the best graphic design agency in India, if you are looking for vehicle wrap design, digital art design, industrial graphic design, or any other creative graphic design services.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-between mt-10'>
               {services.map(service => <ServiceCard key={service._id} service={service}/>) } 
            </div>
            <div className='mt-10 flex justify-center  '>
                <Link to='../services'>
                    <button className='btn w-[300px] hover:bg-gray-100 text-white bg-orange-500 hover:text-orange-500'>see all</button>
                </Link>
            </div>
        </div>
    );
};

export default Services;