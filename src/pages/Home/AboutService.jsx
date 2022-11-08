import React from 'react';
import { TbChecks } from 'react-icons/tb';

const AboutService = () => {
    return (
        <>
            <div className='my-28 text-center max-w-[992px] mx-auto'>
                <p className=' text-blue-500 font-semibold'>GRAPHIC DESIGN</p>
                <h2 className='py-4 text-[#191a1a] text-5xl leading-[65px] font-bold'>
                    “Use a picture. It’s worth a thousand words”- Tess Flanders.
                </h2>
                <p>Smart tools and techniques to create stunning designs, helping brands to communicate the right brand message to potential clients on different social groups and have a memorable positive impression. Connect with the professional graphic designers or illustrator designers of Esolz Technologies, the best graphic design agency in India, if you are looking for vehicle wrap design, digital art design, industrial graphic design, or any other creative graphic design services.</p>
                <div className='flex mt-10 text-xl'>
                    <div className='text-left w-1/2'>
                        <h2 className='text-3xl my-2'>We offer innovative graphic design services</h2>
                        <h2>
                            Here’s how we help a brand in presenting its story , by offering our custom graphic design services in India-
                        </h2>
                        <div className='text-2xl my-5'>
                            <div className='items-center flex text-orange-500'>
                                <TbChecks className='mr-2'/>
                                <p>Remain Unique.</p>
                            </div>
                            <div className='items-center flex text-orange-500'>
                                <TbChecks className='mr-2'/>
                                <p>Establish brand credibility.</p>
                            </div>
                            <div className='items-center flex text-orange-500'>
                                <TbChecks className='mr-2'/>
                                <p>Create a positive impression.</p>
                            </div>
                            <div className='items-center flex text-orange-500'>
                                <TbChecks className='mr-2'/>
                                <p>Convey the right message.</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <img src="https://esolz.net/wp-content/uploads/2021/03/graph_why_img.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutService;