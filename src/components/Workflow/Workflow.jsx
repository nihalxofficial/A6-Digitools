import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='w-9/12 mx-auto py-25'>
                <h2 className='text-3xl font-bold text-white text-center mb-4'>Ready to Transform Your Workflow?</h2>
                <p className='text-sm text-white/70 text-center'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
                <div className='mt-8 flex justify-center items-center gap-3'>
                    <button className='btn border-none rounded-full bg-white'><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Explore Products</span></button>
                    <button className='btn border-white text-white bg-white/0 rounded-full'>View Pricing</button>
                </div>
                <p className='text-sm text-white/70 mt-4 text-center'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
            
        </div>
    );
};

export default Workflow;