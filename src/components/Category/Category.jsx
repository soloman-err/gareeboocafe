import React from 'react';

const Category = ({ meal }) => {
    const { idCategory, strCategory, strCategoryDescription, strCategoryThumb } = meal;
    return (
        <div className='bg-cyan-50 border border-cyan-300 rounded shadow-sm px-5 py-2'>
            <img className='w-32 mx-auto' src={strCategoryThumb} alt="" />
            <div className=''>
                <h1 className='font-bold text-xl bg-cyan-100 px-1'>{strCategory}</h1>
                <p className='text-slate-800 py-2'>{strCategoryDescription}</p>
            </div>
            <div className='flex gap-2'>
                <button className='bg-cyan-400 w-[50%] px-3 py-1 text-white font-bold rounded-l-full'>Add to cart</button>
                <button className='bg-cyan-400 w-[50%] px-3 py-1 text-white font-bold rounded-r-full'>Buy Now</button>
            </div>
        </div>
    );
};

export default Category;