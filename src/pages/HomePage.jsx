import React, { Suspense } from 'react';
import HeroSection from '../components/HeroSection';
import AllFriends from '../components/AllFriends';
import { useLoaderData, useParams } from 'react-router';

const HomePage = () => {

    const params = useParams()
    console.log(params)

    const { friends } = useLoaderData();

    return (
        <div className='bg-[#F8FAFC] p-2'>
            <div className='container mx-auto'>
                <HeroSection></HeroSection>
                <Suspense fallback={<div className='text-center py-10'><span className="loading loading-spinner loading-md"></span></div>}>
                    <AllFriends friendsPromise={friends} />
                </Suspense>
            </div>
        </div>
    );
};

export default HomePage;