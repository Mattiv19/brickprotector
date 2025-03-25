import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Product from '@/components/products/Product'
import React from 'react'

const product = () => {
    return (
        <div className='min-h-screen flex flex-col justify-between'>
            <Navbar />
            <Product />
            <Footer />
        </div>
    )
}

export default product