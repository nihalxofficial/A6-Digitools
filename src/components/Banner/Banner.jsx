import React from 'react';
import bannerBadgeImg from "../../assets/Group 5.png"
import { CiPlay1 } from "react-icons/ci";
import bannerImg from "../../assets/banner.png"


const Banner = () => {
    return (
        <div className='w-10/12 mx-auto py-5 lg:py-20 flex flex-col-reverse md:flex-row justify-between  items-center gap-10'>
            <div className='space-y-3'>
                <div className='flex justify-start items-center gap-1.5 font-semibold bg-[#E1E7FF] rounded-full py-2 px-3 text-sm max-w-67'>
                    <img src={bannerBadgeImg} alt="bannerBadgeImg" />
                    <h2 className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</h2>
                </div>
                <h2 className=' text-4xl lg:text-5xl font-bold leading-normal'>Supercharge Your <br /> Digital Workflow</h2>
                <p className='text-gray-400 max-w-110'>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products</p>
                <div className='flex justify-start items-center gap-3'>
                    <button className='btn btn-primary border-none bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-2 px-3 rounded-full'>Explore Products</button>
                    <button className='flex justify-between items-center gap-2 border-blue-600 bg-white btn hover:border-none hover:bg-linear-to-r hover:from-[#4F39F6] hover:to-[#9514FA] hover:text-white py-2 px-3 rounded-full'><CiPlay1 /> Watch Demo</button>
                </div>
            </div>
            <div>
                <img className='h-147.5 object-contain' src={bannerImg} alt="bannerImg" />
            </div>
        </div>
    );
};

export default Banner;