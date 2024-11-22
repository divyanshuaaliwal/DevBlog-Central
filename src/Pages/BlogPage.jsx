import React, { useContext } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';
import { newBaseUrl } from '../baseUrl';

const BlogPage = () => {

    const [blog, setBlog] = useState(null);
    const[relatedblogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading, loading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        
        setLoading(true);
        
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        
        console.log("URL is: ");
        console.log(url);
        
        try {
            const res = await fetch(url);
            const data = await res.json();

            console.log(data);
            
            
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error) {
            console.log("There is an Error in blog id.");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect( () => {
        if(blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname] )

    return (

        <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center mt-[100px] mb-[20px]">
            
            <Header/>

            <div className='w-11/12 max-w-[670px] flex space-x-5 items-center justify-start'>    
                <button onClick={() => navigation(-1)} className='border-2 border-gray-300 py-1 px-4 rounded-md' >
                    Back
                </button>
            </div>

            {
                loading ? (

                    <div className="min-h-[80vh] w-full flex justify-center items-center">
                        <p className="text-center font-bold text-3xl">Loading</p>
                    </div>

                ) : blog ? (

                    <div>
                        <div className='w-11/12 max-w-[670px] pt-3 flex flex-col gap-y-4'>
                            <BlogDetails post={blog} />
                            <h2 className='font-bold text-lg'>Related Blogs</h2>
                        </div>
                        <div className='w-11/12 max-w-[670px] pt-3 flex flex-col gap-y-7'>
                            {
                                relatedblogs.map( (post) => (
                                    <div key = {post.id}>
                                        <BlogDetails post={post} />
                                    </div>
                                ) )
                            }
                        </div>
                    </div>

                ) : (
                    
                    <div className="min-h-[80vh] w-full flex justify-center items-center">
                        <p className="text-center font-bold text-3xl">No Blogs Found !</p>
                    </div>
                )
            }

        </div>
    )
}

export default BlogPage
