import Image from 'next/image'
import React from 'react'

const Multirow = () => {
    return (
        <>
            <div className="w-full py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
                    {/* Left side - Image */}
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/img/legoprotector.jpg"
                            alt="Protective display case for LEGO collectibles"
                            width={600}
                            height={500}
                            className="w-full rounded-xl shadow-md"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold text-navy-blue mb-6">Protection</h2>
                        <p className="text-md md:text-lg text-gray-700 leading-relaxed">
                            Our cases are designed with precision to keep your collectibles safe from dust, scratches, and harmful UV rays. Each case provides a secure fit to help maintain the integrity and value of your LEGO treasures.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold text-navy-blue mb-6">High Quality</h2>
                        <p className="text-md md:text-lg text-gray-700 leading-relaxed">
                            Made with premium-grade materials, our cases are transparant and built to last. They ensure your LEGO collectibles stay in perfect condition while offering a beautiful display.
                        </p>
                    </div>
                    {/* Right side - Image */}
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/img/plastic_granules.jpg"
                            alt="Protective display case for LEGO collectibles"
                            width={600}
                            height={500}
                            className="w-full rounded-xl shadow-md"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
                    {/* Left side - Image */}
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/img/boxes-and-packages.jpg"
                            alt="Protective display case for LEGO collectibles"
                            width={600}
                            height={500}
                            className="w-full rounded-xl shadow-md"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold text-navy-blue mb-6">Fast Shipping</h2>
                        <p className="text-md md:text-lg text-gray-700 leading-relaxed">
                            Get your cases fast and worry-free! With reliable and efficient shipping, your collectible protection is just days away. Track your order from dispatch to delivery, and enjoy quick setup on arrival.
                        </p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Multirow