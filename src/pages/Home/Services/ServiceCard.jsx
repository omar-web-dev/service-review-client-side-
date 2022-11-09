import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, ratting, price, description, image } = service
    return (
        <div className="p-6 rounded-md bg-gray-100 shadow-lg">
            <PhotoProvider>
                <PhotoView src={image} className='h-vh'>
                    <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 " />
                </PhotoView>
            </PhotoProvider>
            <div className="mt-6 mb-2 text-gray-900">
                <h2 className="text-xl font-semibold tracking-wide text-blue-500">
                    {title}
                </h2>
                <div className='py-1 flex justify-between text-orange-600'>
                    <p>${price}</p>
                    <p>{ratting}</p>
                </div>
            </div>
            <p className=" text-gray-800">
                {description[0].slice(0, 100)}
            </p>
            <Link to={`../service/${_id}`}>
                <button className='bg-orange-100 mt-1 text-orange-500 btn w-full '>
                    Details
                </button>
            </Link>
        </div>
    );
};

export default ServiceCard;