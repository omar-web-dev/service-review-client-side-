import React, { useContext, useEffect, useState } from 'react';
import { FaFreeCodeCamp } from 'react-icons/fa';
import { TbAccessPoint, TbClock } from "react-icons/tb";
import ReactModal from 'react-modal';
// import ReactModal from 'react-modal';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import DisplayReviews from '../Review/DisplayReviews';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


const Details = () => {
    const { user } = useContext(AuthContext)
    const detailsService = useLoaderData()
    // const {email, photoURL, uid } = user
    const { _id, image, tClass, description } = detailsService
    const name = user?.displayName
    const email = user?.email
    const img = user?.photoURL


    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?service_ID=${_id}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])




    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const sendReview = (e) => {
        e.preventDefault()
        const massage = e.target.massage.value
        console.log(massage)

        const order = {
            name,
            email,
            img,
            service: _id,
            massage
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.acknowledged) {
                    alert('Order complied');
                }
            })
            .catch(er => console.log(er))
    }



    function openModal() {
        setIsOpen(true);
    }



    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#fff';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <>
            <div >

                <ReactModal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-100 dark:text-gray-800">
                        <form onSubmit={sendReview} className="flex flex-col items-center w-full">
                            <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                            <div className="flex flex-col items-center py-6 space-y-3">
                                <span className="text-center">How was your experience?</span>
                                <div className="flex space-x-3">
                                    <button value='1' name='btn1' type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-gray-600">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col w-full">
                                <textarea rows="3" name='massage' placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-800 dark:bg-gray-50"></textarea>
                                <button type="submit" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400">My Review</button>
                            </div>
                        </form>
                        <button onClick={closeModal} className=" text-red-600 hover:text-white bg-red-200 text-sm btn-error p-3"> Maybe later
                        </button>
                    </div>
                </ReactModal>




            </div>
            <div className=' bg-gray-800 mt-5' >
                <div className='flex items-center max-w-[1440px] mx-auto'>
                    <div className='w-4/6 py-4 px-8 text-gray-100'>
                        <h2 className="  text-4xl mb-3">
                            Laravel 8 PHP Framework A - Z Build Professional Ecommerce
                        </h2>
                    </div>
                    <div className='w-2/4 text-gray-100 text-right'>
                        <div className='flex justify-end'>
                            <p className="pt-2 text-sm dark:text-gray-400"><span className='text-orange-500'>861</span> global ratings</p>
                        </div>
                        <p className='py-1'>Last updated 11/2022</p>
                        <button onClick={openModal} className='btn mb-2'>add your review</button>
                    </div>
                </div>
            </div>
            <div className='max-w-[1440px] mx-auto'>
                <div className='flex p-10'>
                    <div className='w-4/6  pt-9 '>
                        <div>
                            <img src={image} alt="" className="object-cover object-center w-full rounded-md " />
                        </div>
                        <div className=' flex gap-5 justify-between'>
                            <div className="bg-slate-100 px-10 py-6 rounded-md mb-3">
                                <TbAccessPoint className='w-10 h-10 text-orange-500' />
                                <p>Live Class <br /> {tClass}</p>
                            </div>
                            <div className="bg-slate-100 px-10 py-6 rounded-md mb-3 text-center">
                                <TbClock className='w-10 h-10 mx-auto mb-1 text-orange-500' />
                                <p>অধ্যায়ভিত্তিক <br /> MCQ </p>
                            </div>
                            <div className="bg-slate-100 px-10 py-6 rounded-md mb-3 text-center">
                                <FaFreeCodeCamp className='w-10 h-10 text-orange-500 mx-auto' />
                                <p>অধ্যায়ভিত্তিক <br /> Assignment </p>
                            </div>
                        </div>
                        <div>
                            <p className='text-4xl text-orange-500 p-8 pl-0'>Details</p>
                            <p>{description}</p>
                        </div>
                        <div className="flex flex-col bg-slate-50 px-10 py-8 rounded-md text-4xl mb-3 mt-10">
                            <div className="flex flex-col w-full">
                                <h2 className="text-3xl font-semibold text-center">Customer reviews</h2>
                                <div className="flex flex-wrap items-center mt-2 mb-1 space-x-2">
                                    <div className="flex">
                                        <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-orange-500">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        </button>
                                        <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-orange-500">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        </button>
                                        <button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-orange-500">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        </button>
                                        <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-gray-300">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        </button>
                                        <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-gray-300">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <span className="text-gray-500 text-3xl">3 out of 5</span>
                                </div>
                                <p className="text-sm dark:text-gray-400"><span className='text-orange-500'>861</span> global ratings</p>
                                <div className="flex flex-col mt-4">
                                    <div className="flex items-center space-x-1">
                                        <span className="flex-shrink-0 w-12 text-sm">5 star</span>
                                        <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-200">
                                            <div className="bg-orange-500 h-4 w-5/6"></div>
                                        </div>
                                        <span className="flex-shrink-0 w-12 text-sm text-right">83%</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <span className="flex-shrink-0 w-12 text-sm">4 star</span>
                                        <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-200">
                                            <div className="bg-orange-500 h-4 w-4/6"></div>
                                        </div>
                                        <span className="flex-shrink-0 w-12 text-sm text-right">67%</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <span className="flex-shrink-0 w-12 text-sm">3 star</span>
                                        <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-200">
                                            <div className="bg-orange-500 h-4 w-3/6"></div>
                                        </div>
                                        <span className="flex-shrink-0 w-12 text-sm text-right">50%</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <span className="flex-shrink-0 w-12 text-sm">2 star</span>
                                        <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-200">
                                            <div className="bg-orange-500 h-4 w-2/6"></div>
                                        </div>
                                        <span className="flex-shrink-0 w-12 text-sm text-right">33%</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <span className="flex-shrink-0 w-12 text-sm">1 star</span>
                                        <div className="flex-1 h-4 overflow-hidden rounded-sm bg-gray-200">
                                            <div className="bg-orange-500 h-4 w-1/6"></div>
                                        </div>
                                        <span className="flex-shrink-0 w-12 text-sm text-right">17%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='max-w-1/2 '>
                            <button className=' mx-auto btn w-full bg-orange-100 text-orange-500'>ADD YOUR REVIE</button>
                        </div>
                    </div>
                    <div className='w-2/4  grid-cols-1 gap-5 '>
                        {reviews.map(rw => <DisplayReviews rw={rw} key={rw._id} />)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;