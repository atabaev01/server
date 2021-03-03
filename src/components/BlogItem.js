import React from 'react';

const BlogItem = ({item}) => {

    console.log(item)

    return (
        <div className="card">
            <img className="card-img-top" src={'https://nurkadyrnur.pythonanywhere.com'+item.image_blog} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.short_body}</p>
                </div>
        </div>
    );
};

export default BlogItem;