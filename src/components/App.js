import axios from 'axios';
import React, { useEffect, useState } from 'react';

import BlogList from './BlogList';

const App = () => {

    const [blog, setBlog] = useState({
        count:0, 
        results: [],
    })

    useEffect(()=>{
        axios.get('https://nurkadyrnur.pythonanywhere.com/news/').then((response)=>{
            setBlog(response.data)
        })
        },[])
        console.log(blog);


    return (
        <div className='container jumbotron'>
            <BlogList list={blog.results}/>
        </div>
    );
};

export default App;