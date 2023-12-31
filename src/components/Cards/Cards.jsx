import './Cards.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'


const Cards = (props) => {
    const { author_img, author_name, blog_cover_img, blog_title, publish_date, read_time } = props.data;
    const handleBookmark = props.handleBookmark;
    const markRead = props.markRead;

    return (
        <div className="card w-full bg-base-100 shadow-xl mb-3 ">
            <figure><img src={blog_cover_img} alt="Blog Cover Image" /></figure>
            <div className="card-body p-2">
                <div className='author-and-bookmark flex justify-between items-center'>
                    <div className="author-info flex gap-3">
                        <div>
                            <img src={author_img} alt="" />
                        </div>
                        <div>
                            <h3 className='name'>{author_name}</h3>
                            <p className='date'>{publish_date}</p>
                        </div>

                    </div>
                    <div className="bookmark">
                        <p className='bookmark-time'>{read_time} min read <span onClick={() => handleBookmark(props.data)}><FontAwesomeIcon icon={faBookmark} /></span></p>
                    </div>
                </div>
                <div>
                    <h2 className="blogTitle my-3">{blog_title}</h2>
                    <p className='tags'>#beginners #programming</p>
                    <button onClick={() => markRead(props.data)} className='btn-mark-as-read'>Mark as read</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;