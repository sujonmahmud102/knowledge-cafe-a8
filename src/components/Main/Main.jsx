import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import './Main.css'
import Bookmark from '../Bookmark/Bookmark';

const Main = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('/public/fakeDb.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const handleBookmark = (data)=>{
        console.log(data)
    }


    return (
        <div className='main flex mx-12 gap-6 my-8'>
            <div className="card-container w-[60%]">
                {
                    data.map(singleData => <Cards handleBookmark={handleBookmark} key={singleData.id} data={singleData}></Cards>)
                }
            </div>
            <div className="bookmark-container w-[40%]">
                <div>
                    <h2 className='spent-time'>Spent time on read : <span></span> min</h2>
                    <Bookmark></Bookmark>

                </div>
            </div>
        </div>
    );
};

export default Main;