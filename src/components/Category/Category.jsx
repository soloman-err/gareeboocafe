import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ meal }) => {
    const { idCategory, strCategory, strCategoryDescription, strCategoryThumb } = meal;
    return (
        <div className='flex flex-col justify-between bg-cyan-100 border border-cyan-300 rounded-md shadow-sm px-5 py-3'>
            <div>
                <img className='w-[80%] mx-auto' src={strCategoryThumb} alt="" />
                <div className=''>
                    <h1 className='font-bold text-xl bg-cyan-100 px-1'>{strCategory}</h1>
                    <p className='text-slate-600 py-2'>{strCategoryDescription.substring(0, 100)}..
                        <Link to='/meal-detail'><button className='text-cyan-700'>Read more</button></Link>
                    </p>
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