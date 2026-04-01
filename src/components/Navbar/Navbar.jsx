import React from 'react';
import { IoCartOutline } from "react-icons/io5";


const Navbar = () => {
    return (
        <div className='shadow-sm'>
            <div className='w-10/12 mx-auto p-5 flex justify-between items-center'>
                <h2 className='text-3xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</h2>
                <ul className='hidden md:flex justify-between items-center gap-5 text-sm'>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
                <div className='flex justify-between items-center gap-5 '>
                    <button className='relative cursor-pointer text-lg'>
                        <IoCartOutline />
                        <span className='absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1'>0</span>
                    </button>
                    <button className='cursor-pointer'>Login</button>
                    <button className='btn btn-primary bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full'>Get Started</button>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;