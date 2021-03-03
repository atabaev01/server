import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BlogList from './BlogList';


const BlogDetail = () => {

    const [blog, setBlog] = useState({
        count: 0,
        results: [],
    })

    useEffect(() => {
        axios.get('https://nurkadyrnur.pythonanywhere.com/news/7/').then((response) => {
            setBlog(response.data)
        })
    }, [])
    console.log(blog);

    return (
        <div className='container jumbotron'>
            <div className="card">
                <img className="card-img-top" src={'https://nurkadyrnur.pythonanywhere.com' + blog.image_blog} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">{blog.short_body}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;