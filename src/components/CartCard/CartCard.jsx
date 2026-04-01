import React from 'react';
import { toast } from 'react-toastify';

const CartCard = ({item,cartItems, setCartItems}) => {
    const deleteItem = (id) => {
        const deletedArray = cartItems.filter(item => item.id !== id)
        setCartItems(deletedArray)
        toast.success(`${item.name} removed from cart!`)
    }
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
            <h2 onClick={()=>deleteItem(item.id)} className='text-red-400 font-semibold cursor-pointer'>Remove</h2>
        </div>
    );
};

export default CartCard;