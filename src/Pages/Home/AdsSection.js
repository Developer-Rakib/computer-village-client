import React from 'react';

const AdsSection = () => {
    return (
        <div className='flex flex-wrap Container justify-between py-16'>
            
            <div className='w-[48%] overflow-hidden'>
                <img className='hover:scale-110 transition-transform duration-500'  src="https://www.computervillage.com.bd/uploads/banners/PCl3GFSUy2xwoVgACPygmJ9YyB7Sq0xCsTsbwtZS.webp" alt="" />
            </div>
            <div className='w-[48%] overflow-hidden'>
                <img className='hover:scale-110 transition-transform duration-500' src="https://www.computervillage.com.bd/uploads/banners/JCJ2bAM5KQaiEGQdG1A8BtdwMyT07d15jgZdYiXo.webp" alt="" />
            </div>

        </div>
    );
};

export default AdsSection;