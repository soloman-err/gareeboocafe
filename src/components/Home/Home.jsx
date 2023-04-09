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
            <h1 className='font-bold bg-slate-100 p-1 text-center md:text-lg'>Meal Categories</h1>
            <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5 px-5 py-10'>
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