import React from 'react'

const Testimonials = () => {
    return (
        <section className='w-full py-10 px-4 bg-slate-100'>
            <div className='max-w-6xl mx-auto'>
                <h2 className='text-3xl md:text-5xl font-bold text-navy-blue my-4 pb-8'>What others say...</h2>
                <div className='flex flex-col md:flex-row gap-8 mb-13'>
                    <div className='flex flex-col rounded-2xl bg-slate-200 md:w-1/3'>
                        <div className="p-6">
                            <h3 className='font-semibold md:text-xl text-lg text-navy-blue mb-2'>Jeff</h3>
                            <p className=' text-navy-blue/80 leading-relaxed'>A must-have for any LEGO collector. The cases are sturdy, transparent, and make my collection look professional. Couldn’t be happier with the quality!</p>
                        </div>
                    </div>

                    <div className='flex flex-col rounded-2xl bg-slate-200 md:w-1/3'>
                        <div className="p-6">
                            <h3 className="font-semibold md:text-xl text-lg text-navy-blue mb-2">Peter</h3>
                            <p className=' text-navy-blue/80 leading-relaxed'>Good quality cases that do the job. They fit my LEGO sets well and provide the protection I was looking for.</p>
                        </div>
                    </div>

                    <div className='flex flex-col rounded-2xl bg-slate-200 md:w-1/3'>
                        <div className="p-6">
                            <h3 className="font-semibold md:text-xl text-lg text-navy-blue mb-2">Boris</h3>
                            <p className=' text-navy-blue/80 leading-relaxed'>This is exactly what I needed! My LEGO collection feels safe now. The shipping was quick, and placing the LEGO box in the protector was super easy!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials