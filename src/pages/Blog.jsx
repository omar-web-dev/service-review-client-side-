import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-2 gap-10 max-w-[1440px] mx-auto my-20'>
            <div className=" p-6 overflow-hidden rounded-lg shadow bg-gray-100">
                <article>
                    <h2 className="text-xl font-bold">
                        What is the difference between javascript and NodeJS?
                    </h2>
                    <p className="mt-4 dark:text-gray-400">
                        JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                    </p>
                    <div className="flex items-center mt-8 space-x-4">
                        <img src="https://i.ibb.co/WnZNh4W/profile.png" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
                        <div>
                            <h3 className="text-sm font-medium">Omar Ikbal</h3>
                            <time datetime="2021-02-18" className="text-sm dark:text-gray-400">May 20, 2022</time>
                        </div>
                    </div>
                </article>
            </div>
            <div className=" p-6 overflow-hidden rounded-lg shadow bg-gray-100">
                <article>
                    <h2 className="text-xl font-bold">Difference between SQL and NoSQL</h2>
                    <p className="mt-4 dark:text-gray-400">
                        When choosing a modern database, one of the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both are viable options, there are key differences between the two that users must keep in mind when making a decision. <br />
                        Here, we break down the most important distinctions and discuss the best SQL and NoSQL database systems available. <br />
                        The five critical differences between SQL vs NoSQL are:
                        <br />
                        1. SQL databases are relational, NoSQL databases are non-relational. <br />
                        2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. <br />
                        3. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                    </p>
                    <div className="flex items-center mt-8 space-x-4">
                        <img src="https://i.ibb.co/WnZNh4W/profile.png" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
                        <div>
                            <h3 className="text-sm font-medium">Omar Faruk</h3>
                            <time datetime="2021-02-18" className="text-sm dark:text-gray-400">Feb 18th 2022</time>
                        </div>
                    </div>
                </article>
            </div>
            <div className=" p-6 overflow-hidden rounded-lg shadow bg-gray-100">
                <article>
                    <h2 className="text-xl font-bold">
                        How does NodeJS handle multiple requests at the same time?
                    </h2>
                    <p className="mt-4 dark:text-gray-400">
                    How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                    </p>
                    <div className="flex items-center mt-8 space-x-4">
                        <img src="https://i.ibb.co/WnZNh4W/profile.png" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
                        <div>
                            <h3 className="text-sm font-medium">Leroy Jenkins</h3>
                            <time datetime="2021-02-18" className="text-sm dark:text-gray-400">Feb 18th 2021</time>
                        </div>
                    </div>
                </article>
            </div>
            <div className=" p-6 overflow-hidden rounded-lg shadow bg-gray-100">
                <article>
                    <h2 className="text-xl font-bold">
                        What is JWT, and how does it work?
                    </h2>
                    <p className="mt-4 dark:text-gray-400">
                        JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
                    </p>
                    <div className="flex items-center mt-8 space-x-4">
                        <img src="https://i.ibb.co/WnZNh4W/profile.png" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500" />
                        <div>
                            <h3 className="text-sm font-medium">Mamun Islam</h3>
                            <time datetime="2021-02-18" className="text-sm dark:text-gray-400">Feb 20th 2021</time>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Blog;