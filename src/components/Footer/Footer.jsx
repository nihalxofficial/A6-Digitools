import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";




const Footer = () => {
    return (
        <div className='bg-[#101727]'>
            {/* Footer container */}
            <div className='w-9/12 mx-auto pt-15'>
                {/* footer upper part */}
                <div className='grid grid-cols-2 md:grid-cols-5 gap-5 border-b-2 border-gray-700 pb-15'>
                    <div>
                        <h2 className='text-2xl lg:text-3xl font-bold text-white mb-4'>DigiTools</h2>
                        <p className='text-xs text-white/60 leading-relaxed'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>
                    <div>
                        <h2 className='text-lg font-bold text-white mb-4'>Product</h2>
                        <ul className='text-white/60 leading-relaxed text-xs space-y-3'>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Templates</li>
                            <li>Integrations</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-lg font-bold text-white mb-4'>Company</h2>
                        <ul className='text-white/60 leading-relaxed text-xs space-y-3'>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Press</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-lg font-bold text-white mb-4'>Product</h2>
                        <ul className='text-white/60 leading-relaxed text-xs space-y-3'>
                            <li>Documentation</li>
                            <li>Help Center</li>
                            <li>Community</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h2 className='text-lg font-bold text-white mb-4'>Social Links</h2>
                        <div className=' flex justify-start items-center gap-3 text-xl'>
                            <div className='bg-white p-2 rounded-full cursor-pointer'><FaInstagram /></div>
                            <div className='bg-white p-2 rounded-full cursor-pointer'><FaFacebookSquare /></div>
                            <div className='bg-white p-2 rounded-full cursor-pointer'><FaSquareXTwitter /></div>
                        </div>
                    </div>
                </div>

                {/* Footer lower part */}
                <div className='flex flex-col md:flex-row justify-between items-center text-white/40 text-sm py-7 gap-5'>
                    <h2>&copy; 2026 DigiTools. All rights reserved.</h2>
                    <div className='flex justify-between gap-10'>
                        <p>Privacy Policy </p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>


            </div>
            
        </div>
    );
};

export default Footer;