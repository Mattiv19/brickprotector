import React from 'react'
import { Button } from '../ui/button'



const products = [
    {
        id: 1,
        name: 'Lego BrickHeadz Protector',
        href: '#',
        price: '$10',
        imageSrc: './img/lego_brickheadz.jpg',
        imageAlt: 'Lego BrickHeadz Protector Case',
    },
    {
        id: 2,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
]

const Products = () => {
    return (
        <div className='pt-20 bg-white'>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h1 className='text-3xl md:text-5xl font-bold text-navy-blue mb-12'>Products</h1>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div className='border-1 border-navy-blue rounded-2xl p-4 bg-slate-50'>
                            <a key={product.id} href={product.href} className="group">
                                <img
                                    alt={product.imageAlt}
                                    src={product.imageSrc}
                                    className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                                />
                                <h3 className="mt-4 text-lg font-semibold  text-navy-blue">{product.name}</h3>
                                <p className="my-2 text-lg text-navy-blue/85">{product.price}</p>
                            </a>
                            <div className='mt-4 items-center justify-center text-center'>
                                <Button
                                    className="bg-gray-100 hover:bg-navy-blue text-navy-blue hover:text-gray-100 font-medium py-5 px-20 transition duration-200 hover:scale-102 border-1 rounded-2xl border-navy-blue"
                                >
                                    Add to cart
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products