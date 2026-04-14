import { Plus } from 'lucide-react';
import React from 'react';

const HeroSection = () => {
    return (
        <div className='container pt-20 mx-auto'>
            <div className='flex flex-col items-center justify-center gap-5'>
                <h1 className='font-bold text-5xl'>Friends to keep close in your life</h1>
                <p className='font-sm opacity-70 text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br></br> relationships that matter most.</p>

                <button className='btn text-white bg-[#244D3F] my-5'><Plus/> Add a Friend</button>
            </div>

            <div className='flex items-center justify-center gap-8'>
                <div className='card bg-base-100 card-xs shadow-sm flex flex-col items-center justify-center p-8 gap-4 w-full'>
                    <h1 className='text-4xl text-green-800 font-bold'>10</h1>
                    <p>Total Friends</p>
                </div>

                <div className='card bg-base-100 card-xs shadow-sm flex flex-col items-center justify-center p-8 gap-4 w-full'>
                    <h1 className='text-4xl text-green-800 font-bold'>3</h1>
                    <p>On Track</p>
                </div>

                <div className='card bg-base-100 card-xs shadow-sm flex flex-col items-center justify-center p-8 gap-4 w-full'>
                    <h1 className='text-4xl text-green-800 font-bold'>6</h1>
                    <p>Need Attention</p>
                </div>

                <div className='card bg-base-100 card-xs shadow-sm flex flex-col items-center justify-center p-8 gap-4 w-full'>
                    <h1 className='text-4xl text-green-800 font-bold'>12</h1>
                    <p>Interactions This Month</p>
                </div>
            </div>


            <div className='h-px bg-gray-200  my-10'></div>
        </div>
    );
};

export default HeroSection;