import React, { useEffect, useState } from 'react';
import { FaStarOfDavid } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import ReactModal from 'react-modal';
import StarsRating from 'stars-rating'




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

const MyReviewsCard = ({ rw, reviews, setReviews }) => {
    const { _id, name, massage, image, review, serviceName } = rw
    const [upDateReview, setUpdateReview ] = useState() 
    const [massageId, setMassageId] = useState()

    console.log(rw._id)
    if(rw._id){
        console.log('have a data')
    }else{
        
    console.log('no a data')
    }

    // const handelEdit = id => {
    //     fetch(`http://localhost:5000/reviews/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({ review })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             if(data.modifiedCount > 0){
    //             }
    //         })
    // }


    const notify = () => toast("successfully deleted!");
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const handelDelete = (id) => {
        const confirm = window.confirm('Are you sure delete this Review')
        if (confirm) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.deletedCount > 0) {
                        notify()
                        // console.log(data)
                        const reaming = reviews.filter(rw => rw._id !== id)
                        setReviews(reaming)
                    }
                })
        }
    }

    const sendReview = (e) => {

        e.preventDefault()
        const massage = e.target.massage.value
        
        fetch(`http://localhost:5000/reviews/${massageId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({massage, review : upDateReview})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount > 0){
                    closeModal()
                }
            })
    }
    
    const ratingChanged = (newRating) => {
        setUpdateReview(newRating)
    }

    function openModal(id) {
        setMassageId(id)
        setIsOpen(true);
    }



    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <ToastContainer />


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
                        <button type="submit" className="py-4 my-8 font-semibold rounded-md dark:text-gray-900 dark:bg-violet-400">Update</button>
                    </div>
                </form>
                <button onClick={closeModal} className=" text-red-600 hover:text-white bg-red-200 text-sm btn-error p-3"> no change
                </button>
            </div>
        </ReactModal>


            {rw._id ?
            <div className="container flex flex-col w-full my-5  max-w-lg p-6 mx-auto divide-y rounded-md bg-slate-50 shadow-lg">
                <div>
                    <p className='text-orange-500 text-xl py-1'>{serviceName}</p>
                </div>
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
                        <FaStarOfDavid />
                        <span className="text-xl font-bold">{review}</span>
                    </div>
                </div>
                <div className="p-4 space-y-2 text-sm text-gray-600">
                    <p>{massage}</p>
                </div>
                <div className='flex justify-between pt-2'>
                    <button onClick={() => openModal(_id)} className='btn btn-sm'>edit</button>
                    <button onClick={() => handelDelete(_id)} className='btn btn-sm'>delete</button>
                </div>
            </div>: <p>No Data</p>}
        </div>
    );
};

export default MyReviewsCard;