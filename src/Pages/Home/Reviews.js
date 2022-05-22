import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    let [reviews , setReviews]= useState([])
    useEffect(()=>{
        axios.get('reviews.json')
        .then(data => {
            setReviews(data.data)
            console.log(data.data);
        })
    },[])
    return (
        <div className='Container py-10'>
            <h1 className="text-4xl border-b-4 mb-2 mt-4 border-primary inline-block">Reviews</h1>
            <div className='flex flex-wrap justify-evenly'>
                {
                    reviews.map((review , i)=> <Review
                    key={i}
                    review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;