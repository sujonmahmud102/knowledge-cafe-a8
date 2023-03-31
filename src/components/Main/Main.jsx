import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import './Main.css'
import Bookmark from '../Bookmark/Bookmark';

const Main = () => {
    const [data, setData] = useState([])
    const [blog, setBlog] = useState([])
    const [readTime, setReadTime] = useState([])

    useEffect(() => {
        fetch('/public/fakeDb.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const handleBookmark = (data) => {
        const newBlog = [...blog, data];
        setBlog(newBlog);
    }

    const markRead = (data) => {
        console.log(data.read_time)
        const newReadTime = [...readTime, data.read_time]
        setReadTime(newReadTime);
    }
    // const nums = [5, 5, 5, 10, 12, 15, 15, 15];
    let sum = 0;
    for (const num of readTime) { sum = sum + num };
    console.log(sum)



    return (
        <div className='main flex mx-12 gap-6 my-8'>
            <div className="card-container w-[60%]">
                {
                    data.map(singleData => <Cards markRead={markRead} handleBookmark={handleBookmark} key={singleData.id} data={singleData}></Cards>)
                }
            </div>
            <div className="bookmark-container w-[40%]">
                <div className='spent-time-and-bookmark'>
                    <h2 className='spent-time'>Spent time on read : {sum} min</h2>
                    <Bookmark blog={blog}></Bookmark>
                </div>
            </div>
        </div>
    );
};

export default Main;