import React from 'react';

const CartCard = ({item}) => {
    return (
        <div className='flex justify-between items-center gap-4 bg-[#F9FAFC] border-none rounded-2xl p-5'>
            <div className=' flex justify-between items-center gap-3'>
                <div className='w-12 h-12 p-2 rounded-full bg-white'>
                    <img className='w-full object-contain' src={item.icon} alt="" />
                </div>
                <div>
                    <h2 className='md:text-lg font-semibold'>{item.name}</h2>
                    <p className=' text-gray-400'>${item.price}</p>
                </div>
            </div>
            <h2 className='text-red-400 font-semibold cursor-pointer'>Remove</h2>
        </div>
    );
};

export default CartCard;