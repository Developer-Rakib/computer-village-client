import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../Shared/Loader';
import Part from './Part';

const Parts = () => {
    const { isLoading, error, data: parts } = useQuery('parts', () =>
        axios.get('https://shielded-waters-86658.herokuapp.com/parts')

    )

    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='my-10 sm:px-10'>
            <h1 className="text-4xl border-b-4 mb-2 mt-4 border-primary inline-block">Products</h1>
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