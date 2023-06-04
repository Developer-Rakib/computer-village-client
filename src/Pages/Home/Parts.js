import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../Shared/Loader';
import Part from './Part';

const Parts = () => {
    const { isLoading, error, data: parts } = useQuery('parts', () =>
        axios.get('https://computer-village.onrender.com/parts')

    )

    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='my-7 sm:my-10 sm:px-10'>
            <h1 className="text-3xl sm:text-4xl border-b-4 sm:mb-2 sm:mt-4 border-primary inline-block">Products</h1>
            <div className='flex justify-evenly flex-wrap'>
                {
                    parts.data.map((part) => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;