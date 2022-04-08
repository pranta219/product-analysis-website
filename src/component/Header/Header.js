import React from 'react';
import useReviews from '../../hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';
import './Header.css'

const Header = () => {
    const [reviews] = useReviews()
    return (
        <div>
            <div className='flex'>
                <div>
                    <h1 className='text'>Make the perfect connection. <br />
                        <span className='text-xl'>When the content creators get the benefits they deserve, your brand gets highlighted. Join our community of artists, athletes, celebrities, and people like you and me. Let’s take your content around the world. </span>
                    </h1> <br />
                    <a href="/reviews">Reviews</a>
                </div>
                <div>
                    <img className='img' src={'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK0U3_FV404?wid=1420&hei=930&fmt=png-alpha&.v=1645143356602.jpg'} alt="#" />
                </div>
            </div>
            <div className='reviews'>
                <h1>Customer Reviews</h1>
                {
                    reviews.slice(0, 3).map(review => <SingleReview
                        key={review.id}
                        review={review}
                    ></SingleReview>)
                }
            </div>
            <button></button>
        </div>
    );
};

export default Header;