import React from 'react';
import './SingleReview.css'

const SingleReview = (props) => {
    let { name, review, retting, img } = props.review
    return (
        <div className='review'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h6>{review}</h6>
            <p>Rating: {retting}</p>
        </div>
    );
};

export default SingleReview;