import React from 'react';
import Banner from './Banner';
import BussinesSummury from './BussinesSummury';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Parts></Parts>
            <BussinesSummury></BussinesSummury>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;