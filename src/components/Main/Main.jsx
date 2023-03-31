import React from 'react';
import Cards from '../Cards/Cards';

const Main = () => {
    return (
        <div className='main flex mx-12 gap-6 my-8'>
            <div className="card-container w-[60%]">
                <Cards></Cards>
            </div>  
            <div className="bookmark-container w-[40%] bg-red-600">
                <h2>bookmark</h2>
            </div>
        </div>
    );
};

export default Main;