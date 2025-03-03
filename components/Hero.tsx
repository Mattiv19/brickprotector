import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

const Hero = () => {
    return (
        <div className='pt-25 w-full'>
            <Image src="/img/hero.png" alt="Brickprotector" layout='responsive' width={1088} height={254} />
            <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-20 py-10 rounded-lg shadow-lg text-center z-10">
                <h2 className="text-2xl font-bold mb-6">Protect your collectibles</h2>
                <Button className="bg-navy-blue hover:bg-gray-100 text-white hover:text-navy-blue font-medium py-2 px-6 rounded transition duration-300 hover:scale-102">
                    Shop All
                </Button>
            </div>
        </div>

    )
}

export default Hero

//         