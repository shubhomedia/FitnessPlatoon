import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/title_logo.png'
const Footer = () => {
    return (
        <div>
            <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
                <div className="mx-auto max-w-screen-xl text-center">
                    <div className='flex flex-col justify-center items-center'>
                        <img className='h-100 w-80' src={Logo} alt="" srcset="" />
                    </div>

                    <p className="my-6 text-gray-500 dark:text-gray-400">Top In The Town, Fitness Training Program With Us. Get, Set, Go </p>
                    <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                        <li>
                            <Link to="/" className="mr-4 hover:underline md:mr-6 ">Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className="mr-4 hover:underline md:mr-6">About</Link>
                        </li>
                        <li>
                            <Link to="/service" className="mr-4 hover:underline md:mr-6">Services</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="mr-4 hover:underline md:mr-6">Contact</Link>
                        </li>
                    </ul>
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022-2023 <a href="#" className="hover:underline">Fitness Platoon™</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;