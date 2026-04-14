import React from 'react';
import HeroSection from '../components/HeroSection';
import AllFriends from '../components/AllFriends';
import { useParams } from 'react-router';

const HomePage = () => {

    const params = useParams()
    console.log(params)

    return (
        <div className='bg-[#F8FAFC] p-2'>
            <div className='container mx-auto'>
                <HeroSection></HeroSection>
                <AllFriends></AllFriends>
            </div>
        </div>
    );
};

export default HomePage;