import React from 'react';
import HeroSection from '../components/HeroSection';
import AllFriends from '../components/AllFriends';

const HomePage = () => {
    return (
        <div className='bg-[#F8FAFC]'>
            <div className='container mx-auto'>
                <HeroSection></HeroSection>
            <AllFriends></AllFriends>
            </div>
        </div>
    );
};

export default HomePage;