import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';

const Main = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('/public/fakeDb.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    return (
        <div className='main flex mx-12 gap-6 my-8'>
            <div className="card-container w-[60%]">
                {
                    data.map(singleData => <Cards key={singleData.id} data={singleData}></Cards>)
                }
            </div>
            <div className="bookmark-container w-[40%] bg-red-600">
                <h2>bookmark</h2>
            </div>
        </div>
    );
};

export default Main;