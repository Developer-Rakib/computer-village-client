import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loader from '../Shared/Loader';
import Review from './Review';

const Reviews = () => {
    const { isLoading, error, data: reviews } = useQuery('reviews', () =>
        axios.get('https://computer-village.onrender.com/reviews')
    )

    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='Container py-7 sm:py-10'>
            <h1 className="text-3xl sm:text-4xl border-b-4  mb-2 mt-4 border-primary inline-block">Reviews</h1>
            <div className='flex flex-wrap justify-evenly'>
                {
                    reviews.data.map(review => <Review
                        key={review._id}
                        review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;