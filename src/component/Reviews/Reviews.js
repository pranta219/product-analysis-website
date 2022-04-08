
import useReviews from '../../hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';
import './Reviews.css'

const Reviews = () => {
    const [reviews] = useReviews()
    return (
        <div className='containt'>
            <div>
                <h2 className='text-center text-4xl'>Customar Reviews</h2>
            </div>
            <div className='review-containt'>
                {
                    reviews.map(review => <SingleReview
                        key={review.id}
                        review={review}
                    ></SingleReview>)
                }
            </div>

        </div>
    );
};

export default Reviews;