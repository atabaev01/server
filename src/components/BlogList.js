import React from 'react';
import BlogItem from './BlogItem';

const BlogList = ({list}) => {
    return (
        <div>
            {list.map((item)=> <BlogItem item={item} key={item.id}/>)}
        </div>
    );
};

export default BlogList;