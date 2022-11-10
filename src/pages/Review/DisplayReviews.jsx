import React from 'react';
import { FaStarOfDavid } from 'react-icons/fa';

const DisplayReviews = ({rw}) => {
   const {name, massage,image, review} = rw
    return (
        <div className="container flex flex-col w-full my-5  max-w-lg p-6 mx-auto divide-y rounded-md bg-slate-50 ">
            <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                    <div>
                        <img src={image} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                    </div>
                    <div>
                        <h4 className="font-bold">{name}</h4>
                        <span className="text-xs text-gray-500">2 days ago</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2 text-orange-500">
                    <FaStarOfDavid/>
                    <span className="text-xl font-bold">{review}</span>
                </div>
            </div>
            <div className="p-4 space-y-2 text-sm text-gray-600">
                <p>{massage}</p>
            </div>
        </div>
    );
};

export default DisplayReviews;