import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaStarOfDavid } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';


const MyReviewsCard = ({ rw, reviews, setReviews }) => {
    const { _id, name, massage, image, review, serviceName } = rw


    console.log(rw._id)
    if(rw._id){
        console.log('have a data')
    }else{
        
    console.log('no a data')
    }

    const handelEdit = (id) => {
        console.log('edit', id)
    }
    const notify = () => toast("successfully deleted!");

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
    return (
        <div>
            <ToastContainer />
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
                    <button onClick={() => handelEdit(_id)} className='btn btn-sm'>edit</button>
                    <button onClick={() => handelDelete(_id)} className='btn btn-sm'>delete</button>
                </div>
            </div>: <p>No Data</p>}
        </div>
    );
};

export default MyReviewsCard;