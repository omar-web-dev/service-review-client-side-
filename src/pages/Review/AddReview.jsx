import React, { useContext, useState } from 'react';
import ReactModal from 'react-modal';
import { AuthContext } from '../../Context/AuthProvider';
import StarsRating from 'stars-rating'
import { Link } from 'react-router-dom';

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

const AddReview = ({ id, serviceName }) => {
    const { user } = useContext(AuthContext)
    console.log()
    const [review, setReview ] = useState() 
    const name = user?.displayName
    const email = user?.email
    const image = user?.photoURL

    const [modalIsOpen, setIsOpen] = React.useState(false);

    const sendReview = (e) => {
        e.preventDefault()
        const massage = e.target.massage.value
        console.log(massage)
        const reviewSet = {
            name,
            email,
            serviceName,
            image,
            massage,
            review,
            service_ID: id
        }

        fetch('https://essium.vercel.app/reviews', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(reviewSet)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.acknowledged) {
                    setIsOpen(false);
                }
            })
            .catch(er => console.log(er))
    }

    const ratingChanged = (newRating) => {
        setReview(newRating)
    }

    function openModal() {
        setIsOpen(true);
    }



    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            {user?.uid ? 
            <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
        >
            <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-100 dark:text-gray-800">
                <form onSubmit={sendReview} className="flex flex-col items-center w-full">
                    <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>

                    <StarsRating
                        count={5}
                        onChange={ratingChanged}
                        size={32}
                        color2={'#f97316'} />,
                    
                    <div className="flex flex-col w-full">
                        <textarea rows="3" name='massage' placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-800 dark:bg-gray-50"></textarea>
                        <button type="submit" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400">My Review</button>
                    </div>
                </form>
                <button onClick={closeModal} className=" text-red-600 hover:text-white bg-red-200 text-sm btn-error p-3"> Maybe later
                </button>
            </div>
        </ReactModal>

            : 
            
            <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
        >
            <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-100 dark:text-gray-800">
                <form onSubmit={sendReview} className="flex flex-col items-center w-full">
                    <h2 className="text-3xl  font-semibold text-center">Please login to add a review!</h2>
                    <Link to='../../login' className="flex flex-col w-full">
                    <button className="my-3 hover:bg-blue-400 bg-gray-300 hover:text-white text-gray-800 text-sm btn-error p-3">  LogIn Please
                </button>           
                    </Link>
                </form>
                <button onClick={closeModal} className=" text-red-600 hover:text-white bg-red-200 text-sm btn-error p-3"> Maybe later
                </button>
            </div>
        </ReactModal>
            }
            <div>
                <button onClick={openModal} className='btn mb-2'>add your review</button>
            </div>
        </div>
    );
};

export default AddReview;