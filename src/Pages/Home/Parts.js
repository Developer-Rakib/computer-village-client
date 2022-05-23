import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts]= useState([])

    useEffect( ()=>{
        axios.get('http://localhost:5000/parts')
    .then(data => {
        setParts(data.data)
    })
    },[])
    // console.log(parts);
    return (
        <div className='my-10 sm:px-10'>
            <div className='flex justify-evenly flex-wrap'>
                {
                    parts.map( (part) => <Part
                    key={part._id}
                    part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;