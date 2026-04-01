import React from 'react';
import { FaCheck } from "react-icons/fa6";


const Pricing = () => {
    return (
        <div className='w-9/12 mx-auto py-25 space-y-5'>
            <h2 className='text-4xl font-bold text-center'>Simple, Transparent Pricing</h2>
            <p className='text-sm text-gray-400 text-center'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            <div className='grid md:grid-cols-3 gap-7'>
                {/* Pricing Card - 01 */}
                <div className='p-5 bg-[#F9FAFC] rounded-xl shadow-sm flex flex-col gap-6'>
                    <div className='flex-1'>
                        <h2 className='text-lg font-semibold mb-2'>Starter</h2>
                        <p className='text-sm text-gray-500'>Perfect for getting started</p>
                        <h2 className='my-6 text-3xl font-bold'>$0<span className='text-sm text-gray-500'>/Month</span> </h2>
                        <div className='flex justify-start items-center gap-2'>
                            <FaCheck className='text-green-400 text-sm'/>
                            <p className='text-sm text-gray-500'>Access to 10 free tools</p>
                        </div>
                        <div className='flex justify-start items-center gap-2'>
                            <FaCheck className='text-green-400 text-sm'/>
                            <p className='text-sm text-gray-500'>Basic templates</p>
                        </div>
                        <div className='flex justify-start items-center gap-2'>
                            <FaCheck className='text-green-400 text-sm'/>
                            <p className='text-sm text-gray-500'>Community support</p>
                        </div>
                        <div className='flex justify-start items-center gap-2'>
                            <FaCheck className='text-green-400 text-sm'/>
                            <p className='text-sm text-gray-500'>1 project per month</p>
                        </div>

                    </div>
                    <button className='btn btn-primary border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-full'>Get Started Free</button>

                </div>
                {/* Pricing Card - 02 */}
                <div className='p-5 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-xl shadow-sm flex flex-col gap-6'>
                    <div className='flex-1 '>
                        <h2 className='text-lg font-semibold mb-2'>Pro</h2>
                        <p className='text-sm text-white/80'>Best for professionals</p>
                        <h2 className='my-6 text-3xl font-bold'>$29<span className='text-sm text-white/80'>/Month</span> </h2>
                        <div className='flex justify-start items-center gap-2'>
                            <FaCheck className='text-green-400 text-sm'/>
                            <p className='text-sm text-white/80'>Access to all premium tools</p>
                        </div>
                        <div className='flex justify-start items-center gap-2'>
                            <FaCheck className='text-green-400 text-sm'/>
                            <p className='text-sm text-white/80'>Unlimited templates</p>
                        </div>
                        <div className='flex justify-start items-center gap-2'>
                            <FaCheck className='text-green-400 text-sm'/>
                            <p className='text-sm text-white/80'>Priority support</p>
                        </div>
                        <div className='flex justify-start items-center gap-2'>
                            <FaCheck className='text-green-400 text-sm'/>
                            <p className='text-sm text-white/80'>Unlimited projects</p>
                        </div>
                        <div className='flex justify-start items-center gap-2'>
                            <FaCheck className='text-green-400 text-sm'/>
                            <p className='text-sm text-white/80'>Cloud sync</p>
                        </div>
                        <div className='flex justify-start items-center gap-2'>
                            <FaCheck className='text-green-400 text-sm'/>
                            <p className='text-sm text-white/80'>Advanced analytics</p>
                        </div>

                    </div>
                    <button className='btn border-none rounded-full bg-white'>
                        <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Start Pro Trial</span>
                    </button>
                </div>
                {/* Pricing Card - 03 */}
                <div className='p-5 bg-[#F9FAFC] rounded-xl shadow-sm flex flex-col gap-6'>
                    <div className='flex-1'>
                        <h2 className='text-lg font-semibold mb-2'>Enterprise</h2>
                        <p className='text-sm text-gray-500'>For teams and businesses</p>
                        <h2 className='my-6 text-3xl font-bold'>$99<span className='text-sm text-gray-500'>/Month</span> </h2>
                        <div className='flex justify-start items-center gap-2'>
                            <FaCheck className='text-green-400 text-sm'/>
                            <p className='text-sm text-gray-500'>Everything in Pro</p>
                        </div>
                        <div className='flex justify-start items-center gap-2'>
                            <FaCheck className='text-green-400 text-sm'/>
                            <p className='text-sm text-gray-500'>Team collaboration</p>
                        </div>
                        <div className='flex justify-start items-center gap-2'>
                            <FaCheck className='text-green-400 text-sm'/>
                            <p className='text-sm text-gray-500'>Custom integrations</p>
                        </div>
                        <div className='flex justify-start items-center gap-2'>
                            <FaCheck className='text-green-400 text-sm'/>
                            <p className='text-sm text-gray-500'>Dedicated support</p>
                        </div>
                        <div className='flex justify-start items-center gap-2'>
                            <FaCheck className='text-green-400 text-sm'/>
                            <p className='text-sm text-gray-500'>SLA guarantee</p>
                        </div>
                        <div className='flex justify-start items-center gap-2'>
                            <FaCheck className='text-green-400 text-sm'/>
                            <p className='text-sm text-gray-500'>Custom branding</p>
                        </div>

                    </div>
                    <button className='btn btn-primary border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-full'>Contact Sales</button>

                </div>
            </div>
        </div>
    );
};

export default Pricing;