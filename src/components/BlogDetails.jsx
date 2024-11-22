import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {


    return (
        <div>
            
            <NavLink to={`/blog/${post.id}`}>
                <span className="font-bold text-lg">{post.title}</span>
            </NavLink>
            
            <p className='text-sm mt-[4px]'>
                By <span className='italic'>{post.author}</span> on  {" "}
        
                <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                    <span className='underline font-bold'>{post.category} </span>
                </NavLink>
            </p>

            <p className='text-sm mt-[4px]'>Posted on {post.date}</p>
            <p className='text-md mt-[14px]'>{post.content}</p>
            <div>
                {
                    post.tags.map( (tag, index) => {
                        return  <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                            <span key={index} className="text-blue-700 underline font-bold text-xs mt-[5px] mr-3">{`#${tag}`}</span>
                        </NavLink>
                    })
                }
            </div>
        </div>
    )
}

export default BlogDetails