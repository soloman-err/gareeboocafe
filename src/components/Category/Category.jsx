import React from 'react';

const Category = ({ meal }) => {
    const { idCategory, strCategory, strCategoryDescription, strCategoryThumb } = meal;
    return (
        <div className='bg-cyan-50 border border-cyan-300 rounded shadow-sm my-2'>
            <img className='w-32 mx-auto' src={strCategoryThumb} alt="" />
            <div className='px-5'>
                <h1 className='font-bold text-xl bg-cyan-100 px-1'>{strCategory}</h1>
                <p>{strCategoryDescription}</p>
            </div>
        </div>
    );
};

export default Category;