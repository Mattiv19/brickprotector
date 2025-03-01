import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='pt-25 h-screen bg-no-repeat w-full'>
            <Image src="/img/hero.png" alt="Brickprotector" layout='responsive' width={1088} height={254} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-bold mb-6">Protect your collectibles</h2>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition duration-300">
                    Shop All
                </button>
            </div>
        </div>

    )
}

export default Hero

//         