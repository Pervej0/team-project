import React from 'react';
import image from '../../../images/banner2.jpg'

const Banner = () => {
    return (
        <>
            <div className="">

                <div className="w-full relative flex items-center justify-center">
                    <img src={image} alt="dining" className="w-full h-full absolute z-0 hidden xl:block" />
                    <img src={image} alt="dining" className="w-full h-full absolute z-0 hidden sm:block xl:hidden" />
                    <img src={image} alt="dining" className="w-full h-full absolute z-0 sm:hidden" />
                    <div className="bg-gray-800 bg-opacity-80 md:my-16 lg:py-28 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
                        <h1 className="lg:text-5xl text-4xl font-semibold leading-9 text-white text-center">Donate Blood & Save a Life</h1>
                        <p className="lg:text-lg text-base font-lighter font-sans leading-8 text-center text-white mt-6">
                            We believe that access to safe water is the most effective and powerful way to ensure sustainable community development worldwide. Thanks to your support, trust, and belief in universal access to safe water, <br /> One Drop can increase our scope year after year; the positive impact of our projects grows exponentially.
                        </p>
                        <div className="sm:border border-white flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
                            <input className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white" placeholder="Email Address" />
                            <button className="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-4 px-6 hover:bg-opacity-75">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;