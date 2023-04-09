import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';

const Home = () => {
    const loadedMeals = useLoaderData();
    const meals = loadedMeals.categories;
    console.log(typeof meals, meals)
    console.log(meals.length)

    return (
        <div>
            <h1 className='font-bold bg-slate-100 p-1 text-center'>Categories</h1>
            <div className='grid md:grid-cols-2 gap-2 px-5'>
                {
                    meals.map(meal => <Category
                        key={meal.idCategory}
                        meal={meal}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Home;