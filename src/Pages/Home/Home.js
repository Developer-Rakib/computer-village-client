import React from 'react';
import BussinesSummury from './BussinesSummury';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div className='mt-[80px]'>
            <Parts></Parts>
            <BussinesSummury></BussinesSummury>
            <Reviews></Reviews>
            this is home
        </div>
    );
};

export default Home;