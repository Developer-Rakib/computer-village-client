import React from 'react';

const NewsLetter = () => {
    return (
        <div style={{ backgroundImage: 'url("https://dlcdnimgs.asus.com/websites/global/products/eZwnQPTSRcn68Lwd/img/kv/OPTIMIZATION_banner.jpg")', fontFamily: 'Oswald' }} className='h-[400px] bg-center bg-cover mb-16 w-full flex justify-center items-center text-white Container'>
            <div>
                <h3 className="text-2xl uppercase text-white tracking-wider">SPECIAL <span className='text-primary'>OFFER</span> FOR SUBSCRIPTION</h3>
                <h2 style={{ fontFamily: '' }} className="text-3xl font-bold">GET INSTANT DISCOUNT FOR MEMBERSHIP</h2>
                <p style={{ fontFamily: 'Open Sans,sans-serif' }} className='italic text-white py-2'>Subscribe our newsletter and all latest news of our
                    latest product, promotion and offers </p>
                    <div style={{ fontFamily: 'Open Sans,sans-serif' }} >
                    <input className='h-12 w-6/12 px-5 mx-auto border-2 bg-inherit rounded-full' type="text" name="" id="" placeholder='Enter Email'/>
                    <button style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '2px' }} class="hover:bg-white transition w-40 mx-auto text-center bg-primary  hover:text-primary rounded-full text-white border-2 border-primary py-2.5 ml-[-40px]">Subscribe</button>
                    </div>
            </div>

        </div>
    );
};

export default NewsLetter;