import React from 'react';
import banner from '../../img/banner3.jpg'
const Banner = () => {
    return (
        
        <div style={{backgroundImage:`url(${banner})`, height:"90vh", backgroundSize:'cover', backgroundRepeat:"no-repeat", backgroundPosition:'center'}} className='flex items-center mt-[60px] sm:mt-[66px]'>
            <div className='Container'>
                <div className='sm:text-left sm:w-8/12'>
                    <h1 className="text-4xl sm:text-7xl text-primary font-bold">Computer Village</h1>
                    <p style={{fontFamily:'Open Sans,sans-serif'}} className='italic text-white sm:text-base text-sm py-4'>Computer Village is one of the largest computer stores in Bangladesh offering bundle deals and discounted prices for the latest computer accessories</p>
                    <button style={{fontFamily:'Open Sans, sans-serif', letterSpacing:'2px'}} className='uppercase bg-primary border-2 border-primary hover:bg-white hover:text-primary duration-200 rounded-full text-white px-8 sm:px-12 py-1.5 sm:py-2'>see more</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;