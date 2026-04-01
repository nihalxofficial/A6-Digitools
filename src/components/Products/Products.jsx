import React, { use } from 'react';

import ProductCard from '../ProductCard/ProductCard';


const Products = ({productPromise}) => {
    const products = use(productPromise)    
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
                <div className='grid grid-cols-3 gap-10'>
                    {/* Products Card */}
                    {products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)}
                    
                </div>


            </div>
            
        </div>
    );
};

export default Products;