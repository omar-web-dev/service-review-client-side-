import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';


const AddService = () => {
    const notify = () => toast("Service Added!");
    const handelAddService = e => {
        e.preventDefault()
        const title = e.target.title.value
        const image = e.target.imgURL.value
        const desc = e.target.description.value
        const price = e.target.price.value
        const tClass = e.target.tClass.value
        const ratting = 0
        const description = [desc]

        const service = {
            title,
            image,
            description,
            price,
            tClass,
            ratting
        }
        // fetch('services')
        fetch('https://essium.vercel.app/services', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    notify()
                    e.form.reset()
                }
            })
            .catch(er => console.log(er))
        // if( phone.length == 11){}
    }
    return (
        <div>
            <ToastContainer />
            <form onSubmit={handelAddService} className="lg:w-1/3 mx-auto w-full md:w-1/2">
                <div className="bg-white shadow rounded  w-full p-2 md:pt-8 mt-4 lg:mt-16">
                    <div className='border p-7'>
                        <p className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800 pb-3">Add Service</p>
                        <div>
                            <input name='title' type="text" className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" placeholder='Service Title' />
                        </div>
                        <div>
                            <input name='imgURL' type="text" className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" placeholder='Service Photo URL' />
                        </div>
                        <div>
                            <textarea rows="3" name='description' placeholder="Service Description" className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"></textarea>
                        </div>
                        <div>
                            <input name='price' type="number" className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" placeholder='Service Price' />
                        </div>
                        <div>
                            <input name='tClass' type="number" className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" placeholder='Total Class' />
                        </div>
                        {/* ratting 0 */}

                        <div className="mt-8">
                            <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-md font-semibold leading-none text-white focus:outline-none uppercase bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">Service Add</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddService;