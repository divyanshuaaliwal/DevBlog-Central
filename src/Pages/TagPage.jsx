import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';


const TagPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    
    return (
        <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center mt-[100px] mb-[70px]">
            
            <Header/>
            
            <div className='w-11/12 max-w-[670px] flex space-x-5 items-center justify-start'>
                <button onClick={() => navigation(-1)} className="border-2 border-gray-300 py-1 px-4 rounded-md">
                    Back
                </button>
                <h2 className='font-bold text-[15px] text-center'> 
                    <span>Blogs Tagged</span>
                </h2>
                <h2 className='font-bold text-[15px] text-center'> 
                    <span>#{tag}</span>
                </h2>
            </div>

            <Blogs/>

            <Pagination/>

        </div>
  )
}

export default TagPage;