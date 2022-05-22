import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';

const Review = ({review : data}) => {
    const {name, img, review, rating } = data;
    return (
        <div className='py-4 sm:py-3'>
        <div className='reveiw' title={review}>
            <p className=''>{review.slice(0, 100)}...</p>
            <div className="clint-img">
                <img src={img} alt="" />
            </div>


            <h3>{name}</h3>
            <h3 className="pt-1 w-2/6 mx-auto">
                <Rating
                    initialRating={rating}
                    emptySymbol={<FontAwesomeIcon style={{ color: 'gray' }} icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon style={{ color: '#f15048' }} icon={faStar} />}
                    readonly
                ></Rating>
            </h3>
        </div>
    </div>
    );
};

export default Review;