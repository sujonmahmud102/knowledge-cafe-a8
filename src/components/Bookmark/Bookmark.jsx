import React from 'react';
import './Bookmark.css'

const Bookmark = (props) => {
    console.log(props)
    return (
        <div className='bookmark-blog'>
            <h2>Bookmarked Blogs : {props.blogLength} </h2>

            <p className="blog-title">Master Microsoft Power Platform and Become an In-Demand!</p>
        </div>
    );
};

export default Bookmark;