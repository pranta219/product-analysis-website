import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SingleReview.css'

const SingleReview = (props) => {
    let { name, review, retting, img } = props.review
    return (
        <div className='review'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h6>{review}</h6>
            <Rating
                initialRating={retting}
                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                readonly
            ></Rating>
        </div>
    );
};

export default SingleReview;