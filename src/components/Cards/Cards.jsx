import React from 'react';
import './Cards.css'
import ReactDOM from 'react-dom'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'



const Cards = () => {
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl ">
                <figure><img src="https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" /></figure>
                <div className="card-body p-2">
                    <div className='author-and-bookmark flex justify-between items-center'>
                        <div className="author-info flex gap-3">
                            <div>
                                <img src="https://pfpmaker.com/_nuxt/img/demo-thumb-2.32e1fcb.png" alt="" />
                            </div>
                            <div>
                                <h3 className='name text-xl font-bold'>Mr. Raju</h3>
                                <p className='date'>Mar 14</p>
                            </div>

                        </div>
                        <div className="bookmark">
                            <p className='bookmark-time'>05 min read <span><FontAwesomeIcon icon={faBookmark} /></span></p>
                        </div>
                    </div>
                    <div>
                        <h2 className="card-title font-bold text-3xl my-3">How to get your first job as a self-taught programmer</h2>
                        <p className='tags'>#beginners #programming</p>
                        <button className='btn-mark-as-read'>Mark as read</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cards;