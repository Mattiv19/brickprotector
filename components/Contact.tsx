import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Contact = () => {
    return (
        <div className='pt-38 flex items-center justify-center bg-white '>
            <div className='w-full md:max-w-3xl sm:max-w-md max-w-sm z-1'>
                <h1 className='text-3xl md:text-5xl font-bold text-navy-blue my-4 pb-8'>Contact</h1>
                <form action="#" method="POST" className="space-y-4">
                    <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                        <input
                            type="text"
                            name="first-name"
                            autoComplete='given-name'
                            placeholder="First Name *"
                            className="w-full md:w-1/2 px-4 py-2 border border-slate-900 rounded-xl focus:outline-none focus:ring-1 focus:ring-slate-900 text-navy-blue"
                            required
                        />
                        <input
                            type="text"
                            name="last-name"
                            autoComplete='family-name'
                            placeholder="Last Name *"
                            className="w-full md:w-1/2 px-4 py-2 border border-slate-900 rounded-xl focus:outline-none focus:ring-1 focus:ring-slate-900 text-navy-blue"
                        />
                    </div>
                    <input
                        type="email"
                        name="email"
                        autoComplete='email'
                        placeholder="Email *"
                        className="w-full px-4 py-2 border border-slate-900 rounded-xl focus:outline-none focus:ring-1 focus:ring-slate-900 text-navy-blue"
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        autoComplete='tel'
                        placeholder="Phone"
                        className="w-full px-4 py-2 border border-slate-900 rounded-xl focus:outline-none focus:ring-1 focus:ring-slate-900 text-navy-blue"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Message *"
                        className="w-full px-4 py-2 border border-slate-900 rounded-xl focus:outline-none focus:ring-1 focus:ring-dark-blue h-32 resize-none text-navy-blue"
                        required
                    />
                    <Button
                        type="submit"
                        className="bg-navy-blue hover:bg-gray-100 text-white hover:text-navy-blue font-medium py-5 px-6 rounded transition duration-200 hover:scale-102"
                    >
                        Let's talk
                    </Button>
                    <p className='text-navy-blue/80 text-xs'>
                        By submitting this form, I agree to the <span></span>
                        <Link href="/privacy" className="text-navy-blue font-bold hover:underline">
                            privacy policy
                        </Link>
                        .
                    </p>
                </form>
            </div>
        </div>

    )
}

export default Contact