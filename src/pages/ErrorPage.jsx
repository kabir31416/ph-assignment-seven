import React from 'react';
import { useNavigate } from 'react-router';


const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#FDFBF9] text-[#244D3F] flex flex-col justify-center items-center px-6 py-12">
            <div className="flex justify-center items-center mb-10 md:mb-16">
                <div className="relative">
                    <div className="absolute -inset-4 md:-inset-6 bg-[#244D3F] rounded-full opacity-10 blur-xl"></div>
                    
                    <h1 className="text-[120px] md:text-[180px] font-black leading-none tracking-tighter text-[#244D3F] relative">
                        404
                    </h1>

                    <div className="absolute -right-6 -bottom-6 md:-right-10 md:-bottom-10 w-28 h-28 md:w-40 md:h-40 border-2 border-[#C1B299] rounded-2xl p-4 shadow-xl bg-white flex flex-col justify-center items-center text-center rotate-6">
                        <span className="text-3xl md:text-4xl mb-1">🍃</span>
                        <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#7A6A53]">Empty Shelf</p>
                    </div>
                </div>
            </div>

            <div className="max-w-xl text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Oops! Page not found.</h2>
                <p className="text-base md:text-lg text-[#3E6257] opacity-90">
                    The connection you're looking for seems to be missing from our shelf. 
                    Let's get you back to safety.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <button 
                        onClick={() => navigate('/')}
                        className="cursor-pointer px-8 py-3 bg-[#244D3F] text-white font-semibold rounded-full hover:bg-[#1C3D32] transition-all duration-200 shadow-lg active:scale-95"
                    >
                        Back to Home
                    </button>
                    
                    <button 
                        onClick={() => navigate(-1)}
                        className="cursor-pointer px-8 py-3 bg-transparent border-2 border-[#244D3F] text-[#244D3F] font-semibold rounded-full hover:bg-[#244D3F] hover:text-white transition-all duration-200 active:scale-95"
                    >
                        Go Back
                    </button>
                </div>
            </div>

            <p className="text-xs text-[#7A6A53] mt-20 opacity-60 font-medium tracking-widest uppercase">
                KeenKeeper © 2026
            </p>
        </div>
    );
};

export default ErrorPage;