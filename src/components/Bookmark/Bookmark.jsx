import React from 'react';
import './Bookmark.css'

const Bookmark = (props) => {
    return (
        <div className='bookmark-blog'>
            <h2>Bookmarked Blogs : {props.blog.length} </h2>
            { props.blog?.map(singleData => <p className="blog-title">{singleData.blog_title}</p>) 
            }
            
        </div>
    );
};

export default Bookmark;