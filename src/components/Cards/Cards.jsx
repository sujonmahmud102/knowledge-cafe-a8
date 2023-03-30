import React from 'react';

const Cards = () => {
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src="https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" /></figure>
                <div className="card-body">
                    <div>
                        <div className="author-info">
                            <h1>author</h1>

                        </div>
                        <div className="bookmark">
                            <p>bookmark</p>
                        </div>
                    </div>
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cards;