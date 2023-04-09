import React from 'react';

const Category = ({ meal }) => {
    const { idCategory, strCategory, strCategoryDescription, strCategoryThumb } = meal;
    return (
        <div className='flex flex-col justify-between bg-cyan-50 border border-cyan-300 rounded shadow-sm px-5 py-3'>
            <div>
                <img className='w-[50%] mx-auto' src={strCategoryThumb} alt="" />
                <div className=''>
                    <h1 className='font-bold text-xl bg-cyan-100 px-1'>{strCategory}</h1>
                    <p className='text-slate-600 py-2'>{strCategoryDescription.slice(0, 120)}...</p>
                </div>
            </div>
            <div className='flex gap-2'>
                <button className='bg-cyan-400 w-[50%] px-3 py-1 text-white font-extrabold rounded'>Add to cart</button>
                <button className='bg-cyan-400 w-[50%] px-3 py-1 text-white font-extrabold rounded'>Buy Now</button>
            </div>
        </div>
    );
};

export default Category;