import React from 'react';
import Form from './Form';

const PostForm = () => {
    return (
        <>
            <div className="bg-indigo-50 py-20 md:px-20 pt-6">

                <section className="bg-white dark:bg-gray-800">


                    <div className="mt-10 container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-lg">
                                <h1 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
                                    Create Your Post To Reach Your Donor
                                </h1>

                                <div className="mt-8 space-y-5">
                                    <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>

                                        <span className="mx-2">Create post for donate blood</span>
                                    </p>

                                    <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>

                                        <span className="mx-2">Create post for get blood</span>
                                    </p>

                                    <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>

                                        <span className="mx-2">Easy to Use</span>
                                    </p>
                                </div>
                            </div>


                        </div>

                        <div className="">
                            <Form />
                        </div>
                    </div>
                </section>

                <div className="z-50 cursor-pointer fixed inset-x-0 lg:inset-x-auto bottom-6 lg:right-8 xl:right-10 xl:bottom-8">
                    <div className="lg:w-30 lg:px-6 ">
                        <div className="p-2 bg-gray-900 rounded-full shadow-lg sm:p-3">
                            <div className="flex flex-wrap items-center justify-between">
                                <img src="https://img.icons8.com/fluency/48/000000/chat.png" alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostForm;
