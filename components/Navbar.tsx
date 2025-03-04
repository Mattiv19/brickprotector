'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '/products' },
        { name: 'Contact', href: '/contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            // Determine scroll direction and visibility rules
            const isScrollingDown = prevScrollPos < currentScrollPos;
            const isScrollingUp = prevScrollPos > currentScrollPos;
            const isAtTop = currentScrollPos < 10;

            // Show nav when at top, scrolling up, or scrolling down but still near top
            setVisible(isAtTop || isScrollingUp || (isScrollingDown && currentScrollPos < 110));

            // Save current position for next comparison
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    // Handler for mobile menu toggle
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`fixed w-full backdrop-blur-lg border-b border-white/10 z-50 transition-transform duration-300 ${visible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}
        >

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex-shrink-0 py-2 m-2 drop-shadow-md">
                        <Link href="/" className="text-black">
                            <Image src="/img/logo.png" alt="Brickprotector" width={80} height={80} />
                        </Link>
                    </div>
                    {/* Desktop Navigation */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
                        <div className="flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-navy-blue hover:text-gray-600 hover:border-b-2 hover:border-gray-600 px-3 py-2 text-sm font-semibold drop-shadow-md"
                                    style={{ textShadow: "0 0px 20px rgba(255, 255, 255, 0.7)" }}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            className="text-navy-blue px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-100 transition-colors hover:scale-107 drop-shadow-md"
                            style={{ textShadow: "0 0px 20px rgba(255, 255, 255, 0.9)" }}
                        >
                            <Link href="/login">
                                Log in
                            </Link>
                        </button>
                        <div>
                            <button className=" relative p-2 px-5 rounded-full hover:bg-blue-100 transition-all duration-200 transform hover:scale-110 group-hover:text-white drop-shadow-md">
                                <Link href="/cart">
                                    <svg data-testid="geist-icon" height="20" strokeLinejoin="round" viewBox="0 0 16 16" width="20" style={{ color: "black" }}>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0 2.5L0.958427 2.5C1.41012 2.5 1.82194 2.74308 2.04258 3.12774L2.5 4.5L3.93019 8.79057C4.27047 9.81142 5.22582 10.5 6.3019 10.5H12.4505C13.6422 10.5 14.6682 9.65885 14.9019 8.49029L15.7 4.5L16 3H14.4703L4.5 3L3.62309 3L3.50287 2.70678C3.07956 1.67431 2.0743 1 0.958427 1H0V2.5ZM4.08114 4.5L5.35321 8.31623C5.48933 8.72457 5.87147 9 6.3019 9H12.4505C12.9272 9 13.3376 8.66354 13.4311 8.19612L14.1703 4.5H4.5H4.08114ZM12.5 15C11.6716 15 11 14.3284 11 13.5C11 12.6716 11.6716 12 12.5 12C13.3284 12 14 12.6716 14 13.5C14 14.3284 13.3284 15 12.5 15ZM4.5 13.5C4.5 14.3284 5.17157 15 6 15C6.82843 15 7.5 14.3284 7.5 13.5C7.5 12.6716 6.82843 12 6 12C5.17157 12 4.5 12.6716 4.5 13.5Z" fill="currentColor"></path>
                                    </svg>
                                </Link>
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className={`inline-flex items-center justify-center p-2 rounded-md text-navy-blue hover:scale-105 focus:outline-none transition duration-200 ${isOpen ? 'text-white bg-navy-blue' : ''}`}
                            aria-expanded={isOpen}
                        >
                            <div className="w-6 h-6 flex items-center justify-center relative">
                                {/* Three lines that transform to X */}
                                <span
                                    className={`absolute h-0.5 w-5 bg-current transform transition duration-400 ease-out ${isOpen ? 'rotate-45' : '-translate-y-1.5'
                                        }`}
                                ></span>
                                <span
                                    className={`absolute h-0.5 w-5 bg-current transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'
                                        }`}
                                ></span>
                                <span
                                    className={`absolute h-0.5 w-5 bg-current transform transition duration-400 ease-out ${isOpen ? '-rotate-45' : 'translate-y-1.5'
                                        }`}
                                ></span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="bg-white/85 mt-3 rounded-lg bg-opacity-50 md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-navy-blue hover:text-gray-600 block px-3 py-2 text-base font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="mt-4 space-y-2">
                                <button className=" bg-white text-navy-blue px-4 py-2 rounded-full text-base font-medium hover:bg-blue-100 transition-colors ">
                                    <Link href="/login" className='hover:scale-102'>Log in</Link>
                                </button>
                            </div>
                            <div className='mt-4 space-y-2'>
                                <button className=" bg-white text-navy-blue px-4 py-2 rounded-full text-base font-medium hover:bg-blue-100">
                                    <Link href="/cart">
                                        <div className="px-3 rounded-full hover:bg-blue-100 transition-all duration-200 transform hover:scale-110 group-hover:text-white">
                                            <svg data-testid="geist-icon" height="20" strokeLinejoin="round" viewBox="0 0 16 16" width="20" style={{ color: "black" }}>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M0 2.5L0.958427 2.5C1.41012 2.5 1.82194 2.74308 2.04258 3.12774L2.5 4.5L3.93019 8.79057C4.27047 9.81142 5.22582 10.5 6.3019 10.5H12.4505C13.6422 10.5 14.6682 9.65885 14.9019 8.49029L15.7 4.5L16 3H14.4703L4.5 3L3.62309 3L3.50287 2.70678C3.07956 1.67431 2.0743 1 0.958427 1H0V2.5ZM4.08114 4.5L5.35321 8.31623C5.48933 8.72457 5.87147 9 6.3019 9H12.4505C12.9272 9 13.3376 8.66354 13.4311 8.19612L14.1703 4.5H4.5H4.08114ZM12.5 15C11.6716 15 11 14.3284 11 13.5C11 12.6716 11.6716 12 12.5 12C13.3284 12 14 12.6716 14 13.5C14 14.3284 13.3284 15 12.5 15ZM4.5 13.5C4.5 14.3284 5.17157 15 6 15C6.82843 15 7.5 14.3284 7.5 13.5C7.5 12.6716 6.82843 12 6 12C5.17157 12 4.5 12.6716 4.5 13.5Z" fill="currentColor"></path>
                                            </svg>
                                        </div>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav >
    );
};

export default Navbar;