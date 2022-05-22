import React from 'react';
import banner from '../../img/banner3.jpg'
const Banner = () => {
    return (
        <div style={{backgroundImage:`url(${banner})`, height:"100vh", backgroundSize:'cover', backgroundRepeat:"no-repeat", backgroundPosition:'center'}} className='flex items-center '>
            <div className='Container'>
                <div className='text-left w-8/12'>
                    <h1 style={{fontFamily:"font-family: 'Roboto Slab', serif;"}} className="text-7xl text-primary font-bold">Computer Village</h1>
                    <p style={{fontFamily:'Open Sans,sans-serif'}} className='italic text-white py-4'>With up to 40 hours of battery life, Beats Solo3 Wireless is your perfect everyday headphone. With Fast Fuel, a 5-minute charge gives you 3 hours of playback.</p>
                    <button style={{fontFamily:'Roboto, sans-serif', letterSpacing:'2px'}} className='uppercase bg-primary  rounded-full text-white px-12 py-2'>see more</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;