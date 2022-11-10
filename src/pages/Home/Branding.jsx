import React from 'react';

const Branding = () => {
    return (
        <div className=' relative md:py-20'>
            <div className='absolute lg:bg-[#1818ca] h-1/2 w-full -z-50 top-0 '></div>
            <div className='max-w-[1440px] mx-auto gap-5 lg:gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center justify-between'>
                <div className="mx-10 lg:mx-2 mt-16 md:mt-0 rounded-md shadow-xl z-50 hover:shadow-2xl bg-white py-10 ">
                    <div className='flex justify-center py-10'>
                        <img src="https://i.ibb.co/nntqyJq/service-icon4.png " alt="" />
                    </div>
                    <div className="p-6 space-y-8">
                        <h2 className="text-xl font-semibold tracking-wide">GRAPHICS DESIGN</h2>
                    </div>
                </div>
                <div className="mx-10 lg:mx-2 rounded-md shadow-xl z-50 hover:shadow-2xl bg-white py-10">
                    <div className='flex justify-center py-10'>
                        <img src=" https://i.ibb.co/ckZw6RN/service-icon2.png" alt="" />
                    </div>
                    <div className="p-6 space-y-8">
                        <h2 className="text-xl font-semibold tracking-wide">WEB DEVELOPMENT</h2>
                    </div>
                </div>

                



                <div className="mx-10 lg:mx-2 rounded-md shadow-xl z-50 hover:shadow-2xl bg-white py-10">
                    <div className='flex justify-center py-10'>
                        <img src="https://i.ibb.co/93CCW54/service-icon1.png " alt="" />
                    </div>
                    <div className="p-6 space-y-8">
                        <h2 className="text-xl font-semibold tracking-wide">MOBILE APP DEVELOPMENT</h2>
                    </div>
                </div>
                <div className="mx-10 lg:mx-2 rounded-md shadow-xl z-50 hover:shadow-2xl bg-white py-10">
                    <div className='flex justify-center py-10'>
                        <img src="https://i.ibb.co/dK0vP7V/service-icon3.png" alt="" />
                    </div>
                    <div className="p-6 space-y-8">
                        <h2 className="text-xl font-semibold tracking-wide">Digital Marketing</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Branding;