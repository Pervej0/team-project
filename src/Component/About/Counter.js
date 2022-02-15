import React from 'react';

const Counter = ({ counter }) => {
    const { name, count, icon } = counter

    return (
        <>
            <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                <div className="">
                    <img className="mb-3 w-20   mx-auto" src={icon} alt="product designer" />
                </div>
                <div className="text-center">
                    <p className="text-4xl text-red-500 font-bold mb-2">{count}</p>
                    <p className="text-2xl  text-gray-900 font-normal">{name}</p>
                </div>
            </div>
        </>
    );
};

export default Counter;