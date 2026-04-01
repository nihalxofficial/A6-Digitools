import React, { use, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import CartCard from '../CartCard/CartCard';


const Products = ({productPromise}) => {
    const products = use(productPromise)    
    const [activeTab, setActiveTab] = useState("products")
    const [cartItems, setCartItems] = useState([])
    
    return (
        <div>
            <div className='w-9/12 mx-auto py-25'>
                <h2 className='text-3xl md:text-4xl font-bold text-center'>Premium Digital Tools</h2>
                <p className='text-sm text-gray-400 text-center my-4'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className='flex justify-center items-center mb-10'>
                    <div className='flex justify-between items-center shadow-sm rounded-full p-1 gap-5'>
                        <button onClick={()=>setActiveTab("products")} className={` ${activeTab==="products" ? "btn btn-primary border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full px-6" : "cursor-pointer pl-2"} `}>Products</button>
                        <button onClick={()=>setActiveTab("carts")} className={` ${activeTab==="carts" ? "btn btn-primary border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full px-6 " : "cursor-pointer pr-2"} `}>Cart (0)</button>
                    </div>
                </div>

                {activeTab==="products"? 
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {products.map(product => <ProductCard key={product.id} product={product} cartItems={cartItems} setCartItems={setCartItems}></ProductCard>)}
                </div>
                : <div className='shadow-sm rounded-2xl p-10'>
                    <h2 className='text-2xl font-bold mb-4'>Your Cart</h2>

                    {/* Cart Card */}
                    <div className='space-y-5'>
                        {cartItems.map(item=> <CartCard key={item.id} item={item}></CartCard>)}
                    </div>
                    

                    <div className='flex justify-between items-center gap-4 my-6'>
                        <p className='text-gray-400'>Total:</p>
                        <h2 className='font-semibold text-xl'>$<span>78</span> </h2>
                    </div>
                    <button className='btn btn-primary border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-full'>Proceed to Checkout</button>
                </div>}


            </div>
            
        </div>
    );
};

export default Products;