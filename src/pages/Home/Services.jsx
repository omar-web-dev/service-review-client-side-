import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const Services = () => {
    return (
        <div className='max-w-[1400px] mx-auto'>
            <div className=' text-center max-w-[992px] mx-auto'>
                <p className=' text-blue-500 font-semibold'>OUR SERVICES</p>
                <h2 className='py-4 text-black text-5xl leading-[65px] font-bold'>Our Creative Graphic Design Services in ESSUIN Embraces</h2>
                <p>Smart tools and techniques to create stunning designs, helping brands to communicate the right brand message to potential clients on different social groups and have a memorable positive impression. Connect with the professional graphic designers or illustrator designers of Esolz Technologies, the best graphic design agency in India, if you are looking for vehicle wrap design, digital art design, industrial graphic design, or any other creative graphic design services.</p>
            </div>
            <div className='flex gap-7 justify-between mt-10'>
                <div className=" p-6 rounded-md bg-gray-100 shadow-lg">
                    <PhotoProvider>
                        <PhotoView src="https://source.unsplash.com/random/300x300/?1">
                            <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-md h-72 " />
                        </PhotoView>
                    </PhotoProvider>
                    <div className="mt-6 mb-2 text-gray-900">
                        <h2 className="text-xl font-semibold tracking-wide text-blue-500">Nam maximus purus</h2>
                        <div className='py-1 flex justify-between text-orange-600'>
                            <p>$2400</p>
                            <p>4.8</p>
                        </div>
                    </div>
                    <p className=" text-gray-800">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
                    <button className='bg-orange-100 mt-1 text-orange-500 btn w-full '>
                        <Link to='details'>Details</Link>
                    </button>
                </div>
                <div className=" p-6 rounded-md shadow-md bg-gray-700">
                    <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-md h-72 " />
                    <div className="mt-6 mb-2 text-gray-50">
                        <span className="block text-xs font-medium tracking-widest uppercase">Quisque</span>
                        <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
                    </div>
                    <p className=" text-gray-50">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
                </div>
                <div className=" p-6 rounded-md shadow-md bg-gray-700">
                    <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-md h-72 " />
                    <div className="mt-6 mb-2 text-gray-50">
                        <span className="block text-xs font-medium tracking-widest uppercase">Quisque</span>
                        <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
                    </div>
                    <p className=" text-gray-50">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;