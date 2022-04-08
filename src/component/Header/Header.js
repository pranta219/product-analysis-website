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
                    <img className='img' src={'https://images.pexels.com/photos/1714202/pexels-photo-1714202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt="#" />
                </div>
            </div>
            <h1 className='mt-60 text-center'>Customer Reviews</h1>
            <div className='reviews'>
                {
                    reviews.slice(0, 3).map(review => <SingleReview
                        key={review.id}
                        review={review}
                    ></SingleReview>)
                }
                <a href="/reviews">See All Reviews</a>
            </div>
        </div>
    );
};

export default Header;