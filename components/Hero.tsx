import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className='pt-28 w-full'>
            <Image src="/img/hero.png" alt="Brickprotector" style={{ width: '100%', height: 'auto' }} width={1088} height={254} />
            <div className="flex flex-col items-center justify-center text-center mt-10 md:absolute md:top-[19%] lg:top-[22%] xl:top-[25%] md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:bg-white md:px-7 md:py-5 lg:px-13 lg:py-10 xl:px-17 md:rounded-lg md:shadow-lg md:text-center md:z-10">
                <h2 className="text-2xl lg:text-4xl font-bold mb-8 md:mb-5 lg:mb-8 xl:mb-10 text-navy-blue">Protect your collectibles</h2>
                <Link href="/products">
                    <Button className="bg-navy-blue hover:bg-gray-100 text-white hover:text-navy-blue font-medium py-5 px-6 rounded transition duration-300 hover:scale-102">
                        Shop All
                    </Button>
                </Link>
            </div>
        </div>

    )
}

export default Hero

//         