import React from 'react';

const Counter = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-15'>
            <div className='w-6/12 mx-auto grid md:grid-cols-3 gap-7 lg:gap-15'>
                <div className='p-3 border-b-2 md:border-b-0 md:border-r-2 border-gray-400 space-y-2'>
                    <h2 className='text-4xl text-white font-bold '>50K+</h2>
                    <p className='text-gray-300'>Active Users</p>
                </div>
                <div className='p-3 border-b-2 md:border-b-0 md:border-r-2 border-gray-400 space-y-2'>
                    <h2 className='text-4xl text-white font-bold '>200+</h2>
                    <p className='text-gray-300'>Premium Tools</p>
                </div>
                <div className='p-3 border-gray-500 space-y-2'>
                    <h2 className='text-4xl text-white font-bold '>4.9</h2>
                    <p className='text-gray-300'>Rating</p>
                </div>
            </div>
            
        </div>
    );
};

export default Counter;