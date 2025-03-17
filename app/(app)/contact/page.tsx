import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const contact = () => {
    return (
        <div className='min-h-screen flex flex-col justify-between'>
            <Navbar />
            <Contact />
            <Footer />
        </div>
    )
}

export default contact