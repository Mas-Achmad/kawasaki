import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../public/kawasaki-logo.png';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="fixed w-full flex justify-between items-center px-8 py-4 bg-transparent text-white transition-all duration-300 shadow-md z-10">
            <div className="flex items-center">
                <img src={Logo} alt="Kawasaki Logo" className="h-10 mr-4" />
            </div>

            <ul className="flex space-x-8 text-lg font-semibold relative">
                {['Home', 'Motorcycle', 'Accessories', 'About'].map((item, index) => (
                    <li key={index} className="group relative">
                        <Link 
                            to={`/${item.toLowerCase().replace(' ', '')}`} 
                            className="hover:text-red-600 transition duration-300"
                        >
                            {item}
                        </Link>
                        <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </li>
                ))}
            </ul>

            <div className="relative flex items-center">
                <button 
                    className="text-sm bg-red-600 text-white px-3 py-1.5 rounded-full hover:bg-red-700 transition duration-300 shadow-md transform hover:scale-105"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    Login
                </button>
                {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg z-20 transition duration-300 ease-in-out transform scale-100 opacity-100">
                        <Link to="/login" className="block px-4 py-2 hover:bg-gray-200 transition duration-300 rounded-lg">Login</Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
