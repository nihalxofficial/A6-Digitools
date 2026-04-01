import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import { toast } from 'react-toastify';

const ProductCard = ({product,cartItems,setCartItems}) => {
    const [subscriptionState, setSubscriptionState] = useState(false)
    const handleSubscription = (product) => {
        const existProduct = cartItems.find(p => p.id === product.id)
        if(existProduct){
            toast.error(`${product.name} is already in cart!`)
            return
        }else{
            setSubscriptionState(true)
            setCartItems([...cartItems, product])
            toast.success(`${product.name} added to cart!`)
        }
    }
    console.log(cartItems);
    
    return (
        <div className='flex flex-col shadow-sm rounded-2xl p-5 relative'>
            <div className='flex-1'>
                <div className='p-2.5 mb-4 rounded-full shadow-sm flex justify-center items-center h-12 w-12'>
                    <img className='object-contain w-full' src={product.icon} alt="" />
                </div>

                <h2 className='text-lg font-semibold mb-2'>{product.name}</h2>
                <p className='text-sm text-gray-500'>{product.description}</p>

                <h2 className='my-4 text-2xl font-bold'>${product.price}<span className='capitalize text-sm text-gray-500'>/{product.period}</span></h2>

                {product.features.map((feature, index) => (
                    <div key={index} className='flex items-center gap-2'>
                        <FaCheck className='text-green-400 text-sm' />
                        <p className='text-sm text-gray-500'>{feature}</p>
                    </div>
                ))}
            </div>

            <div
                className={`absolute rounded-full px-3 py-1 top-2 right-2 text-sm
                ${product.tagType === "best seller"
                        ? "text-orange-600 bg-[#FEF3C6]"
                        : product.tagType === "popular"
                            ? "text-purple-600 bg-[#E1E7FF]"
                            : "text-green-600 bg-[#DBFCE7]"
                    }`}
            >
                <h2>{product.tag}</h2>
            </div>

            {subscriptionState ? <button onClick={()=>handleSubscription(product)} className='btn btn-primary mt-4 border-none bg-green-600 rounded-full'><FaCheck className='text-white text-lg'/> Added to cart</button> 
            : <button onClick={()=>handleSubscription(product)} className='btn btn-primary mt-4 border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full'>Buy Now</button>}
        </div>
    );
};

export default ProductCard;