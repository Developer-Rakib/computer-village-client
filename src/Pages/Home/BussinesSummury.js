import React from 'react';
import { FaTools } from 'react-icons/fa';
import { MdReviews } from 'react-icons/md';
import { RiCustomerService2Fill } from 'react-icons/ri';


const BussinesSummury = () => {
    return (
        <div className='flex justify-evenly flex-wrap sm:flex-nowrap Container'>
            <div  style={{fontFamily:'Open Sans', boxShadow:'#f15048 0px 1px 4px'}} className='flex w-11/12 sm:w-[370px] h-24 px-6 sm:h-auto sm:px-6 py-6 rounded-xl m-4 sm:m-2 justify-center items-center'>
                <FaTools className='text-primary text-5xl'></FaTools>
                <h1 className="text-2xl sm:text-3xl ml-3">50+ Parts</h1>
            </div>


            <div style={{fontFamily:'Open Sans', boxShadow:'rgba(0, 0, 0, 0.16) 0px 1px 4px'}} className='flex w-11/12 sm:w-[370px] bg-primary sm:h-auto h-24 text-white px-6 py-6 rounded-xl m-4 sm:m-2 justify-center items-center'>
                <MdReviews className=' text-5xl'></MdReviews>
                <h1 className="text-2xl sm:text-3xl ml-3">33K+ Reviews</h1>
            </div>
            <div  style={{fontFamily:'Open Sans', boxShadow:'#f15048 0px 1px 4px'}}  className='flex w-11/12 sm:w-[370px] h-24 px-6 sm:h-auto sm:px-6 py-6  rounded-xl m-4 sm:m-2 justify-center items-center'>
                <RiCustomerService2Fill className='text-primary text-5xl'></RiCustomerService2Fill>
                <h1 className="text-2xl sm:text-3xl ml-">100M+ Customers</h1>
            </div>
        </div>
    );
};

export default BussinesSummury;