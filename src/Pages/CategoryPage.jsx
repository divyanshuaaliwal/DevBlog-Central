import React from 'react';
import Header from '../components/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const CategoryPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

    return (
        <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center relative mt-[100px] mb-[70px]">
            <Header/>
            <div className='w-11/12 max-w-[670px] flex space-x-5 items-center justify-start'>
                <button onClick={() => navigation(-1)} className="border-2 border-gray-300 py-1 px-4 rounded-md">
                    Back
                </button>
                <span>
                <h2 className='font-bold text-[15px] text-center'> 
                    Blogs on <span>{category}</span>
                </h2>
                </span>
            </div>
            <Blogs/>
            <Pagination/>
        </div>
    )
}

export default CategoryPage;
