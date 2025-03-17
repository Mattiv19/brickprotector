import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Products from '@/components/products/Products'
import React from 'react'

const products = () => {
    return (
        <div className='min-h-screen flex flex-col justify-between'>
            <Navbar />
            <Products />
            <Footer />
        </div>
    )
}

export default products