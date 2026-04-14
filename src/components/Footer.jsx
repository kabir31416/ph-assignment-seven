import React from 'react';
import logo from '../assets/logo-xl.png'
import insta from '../assets/instagram.png'
import fb from '../assets/facebook.png'
import x from '../assets/twitter.png'


const Footer = () => {
    return (
            <footer className='bg-[#244D3F] text-white px-6'>
                <div className='max-w-7xl pt-16 pb-10 mx-auto'>
                    <div className='flex flex-col justify-center items-center text-center gap-6'>
                        <img src={logo} alt="KeenKeeper Logo" className="h-10 w-auto" />
                        <p className='text-sm md:text-base opacity-90'>
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                        </p>

                        <div className='flex flex-col items-center gap-3'>
                            <p className='font-bold text-lg'>Social Links</p>
                            <div className='flex gap-5'>
                                <a href="#" className="hover:opacity-80 transition-opacity"><img src={insta} alt="Instagram" /></a>
                                <a href="#" className="hover:opacity-80 transition-opacity"><img src={fb} alt="Facebook" /></a>
                                <a href="#" className="hover:opacity-80 transition-opacity"><img src={x} alt="X" /></a>
                            </div>
                        </div>
                    </div>

                    <div className='bg-gray-500/30 h-px my-8'></div>

                    <div className='flex flex-col md:flex-row justify-between items-center gap-6 text-sm opacity-80'>
                        <div>
                            <p>© 2026 KeenKeeper. All rights reserved.</p>
                        </div>
                        
                        <div className='flex flex-wrap justify-center gap-4 md:gap-6'>
                            <a href="#" className="hover:underline">Privacy Policy</a>
                            <a href="#" className="hover:underline">Terms of Service</a>
                            <a href="#" className="hover:underline">Cookies</a>
                        </div>
                    </div>
                </div>
            </footer>
    );
};

export default Footer;