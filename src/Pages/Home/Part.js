import React from 'react';

const part = ({ part }) => {
    const { name, img, description, price, minimumOrderQuanity, availableQuanity } = part;
    return (
        <div  className='w-[350px] border hover:shadow-2xl transition text-secondary px-2 py-5 m-8 rounded'>
            <img className='h-[230px] mx-auto' src={img} alt="" />
            <div>
                <h5  style={{fontFamily:'Roboto', letterSpacing:'1px',fontSize:'1.1rem' }} className="uppercase">{name}</h5>
                <h6 className="text-2xl mt-1 font-semibold">${price}</h6>
                <p style={{fontFamily:'Open Sans,sans-serif'}} className='italic text-sm px-4 py-2'>{description.slice(0,100)}</p>
                <div className='px-5 pt- mb-5 mx-2'>
                    <div className='flex justify-between px-2 border-b py-1'>
                        <h5>Minimum Order Qunatity</h5>
                        <h5>{minimumOrderQuanity}</h5>
                    </div>
                    <div className='flex justify-between px-2 border-b py-1'>
                    <h5>Stock</h5>
                    <h5>{availableQuanity}</h5>
                </div>
                </div>
            </div>
            <button class="hover:bg-primary transition hover:text-white rounded-full text-primary border border-primary px-10 py-2">Buy Now</button>
        </div>
    );
};

export default part;