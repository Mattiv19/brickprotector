import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-slate-800 shadow-sm dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse sm:border-1 border-gray-200">
                        <Image src="/img/logo_transparent.png" alt="Brickprotector" width={80} height={80} />
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-100 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link href="/about" className="hover:underline me-4 md:me-6">About</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline me-4 md:me-6">Licensing</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-300 text-center dark:text-gray-400">© 2025 BrickProtector™ - All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer