import React from 'react';
import user from "../../assets/user.png"
import packageImg from "../../assets/package.png"
import rocket from "../../assets/rocket.png"

const Steps = () => {
    return (
        <div className='bg-[#F9FAFC]'>
            <div className='w-10/12 mx-auto py-25 space-y-5'>
                <h2 className='text-4xl font-bold text-center'>Get Started in 3 Steps</h2>
                <p className='text-sm text-gray-400 text-center'>
                Start using premium digital tools in minutes, not hours.
                </p>

                <div className='grid md:grid-cols-3 gap-7'>

                {/* Card 1 */}
                <div className='relative flex justify-center items-center shadow-sm bg-white rounded-lg px-4 py-16'>
                    <h2 className='absolute top-5 right-5 text-white text-sm font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full py-1 px-1.5'>01</h2>
                    <div className='text-center space-y-3'>
                    <div className='flex items-center justify-center'>
                        <div className='w-20 h-20 rounded-full bg-[#f1f1f1] p-4 flex items-center justify-center'>
                            <img className='w-full h-full object-contain' src={user} alt="user" />
                        </div>
                    </div>
                    <h3 className='text-xl font-bold'>Create Account</h3>
                    <p className='text-sm text-gray-400'>
                        Sign up for free in seconds. No credit card required to get started.
                    </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className='relative flex justify-center items-center shadow-sm bg-white rounded-lg px-4 py-16'>
                    <h2 className='absolute top-5 right-5 text-white text-sm font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full py-1 px-1.5'>02</h2>
                    <div className='text-center space-y-3'>
                    <div className='flex items-center justify-center'>
                        <div className='w-20 h-20 rounded-full bg-[#f1f1f1] p-4 flex items-center justify-center'>
                            <img className='w-full h-full object-contain' src={packageImg} alt="packageImg" />
                        </div>
                    </div>
                    <h3 className='text-xl font-bold'>Choose Products</h3>
                    <p className='text-sm text-gray-400'>
                        Browse our catalog and select the tools that fit your needs.
                    </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className='relative flex justify-center items-center shadow-sm bg-white rounded-lg px-4 py-16'>
                    <h2 className='absolute top-5 right-5 text-white text-sm font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full py-1 px-1.5'>03</h2>
                    <div className='text-center space-y-3'>
                    <div className='flex items-center justify-center'>
                        <div className='w-20 h-20 rounded-full bg-[#f1f1f1] p-4 flex items-center justify-center'>
                            <img className='w-full h-full object-contain' src={rocket} alt="rocket" />
                        </div>
                    </div>
                    <h3 className='text-xl font-bold'>Start Creating</h3>
                    <p className='text-sm text-gray-400'>
                        Download and start using your premium tools immediately.
                    </p>
                    </div>
                </div>

                </div>
            </div>
        </div>
    );
};

export default Steps;