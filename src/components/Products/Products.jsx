import React from 'react';
import logo from "../../assets/products/writing_23274001.png"
import { FaCheck } from "react-icons/fa6";


const Products = () => {
    return (
        <div>
            <div className='w-9/12 mx-auto py-25'>
                <h2 className='text-4xl font-bold text-center'>Premium Digital Tools</h2>
                <p className='text-sm text-gray-400 text-center my-4'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className='flex justify-center items-center mb-10'>
                    <div className='flex justify-between items-center shadow-sm rounded-full p-1 gap-5'>
                        <button className='btn btn-primary border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full '>Products</button>
                        <button className='cursor-pointer '>Cart (0)</button>
                    </div>
                </div>

                {/* Products Container */}
                <div className='grid grid-cols-3'>
                    {/* Products Card */}
                    <div className='flex flex-col shadow-sm rounded-2xl p-5 relative'>
                        <div className='flex-1 '>
                            <div className='p-2 mb-4 rounded-full shadow-sm flex justify-center items-center h-12 w-12'>
                                <img className='object-contain' src={logo} alt="" />
                            </div>
                            <h2 className='text-lg font-semibold mb-2'>AI Writing Pro</h2>
                            <p className='text-sm text-gray-500'>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                            <h2 className='my-4 text-2xl font-bold'>$29<span className='capitalize text-sm text-gray-500'>/Mo</span></h2>
                            <div className='flex justify-start items-center gap-2'>
                                <FaCheck className='text-green-400 text-sm'/>
                                <p className='text-sm text-gray-500'>Unlimited AI generations</p>
                            </div>
                            <div className='flex justify-start items-center gap-2'>
                                <FaCheck className='text-green-400 text-sm'/>
                                <p className='text-sm text-gray-500'>50+ writing templates</p>
                            </div>
                            <div className='flex justify-start items-center gap-2'>
                                <FaCheck className='text-green-400 text-sm'/>
                                <p className='text-sm text-gray-500'>Grammar checker</p>
                            </div>
                            
                        </div>
                        <div className='absolute rounded-full px-2 py-1 top-2 right-2 text-sm text-orange-600 bg-[#FEF3C6]'>
                            <h2>Best Seller</h2>
                        </div>
                        <button className='btn btn-primary mt-4 border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full'>Buy Now</button>
                    </div>
                </div>


            </div>
            
        </div>
    );
};

export default Products;