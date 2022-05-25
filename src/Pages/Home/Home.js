import React from 'react';
import AdsSection from './AdsSection';
import Banner from './Banner';
import BussinesSummury from './BussinesSummury';
import NewsLetter from './NewsLetter';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Parts></Parts>
            <BussinesSummury></BussinesSummury>
            <Reviews></Reviews>
            <AdsSection></AdsSection>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;