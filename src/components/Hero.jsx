import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <div className='relative w-full h-screen overflow-hidden bg-black'>
            {/* Background Image */}
            <img 
                src={assets.bg_img} 
                alt="background" 
                className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* Dark overlay for better text visibility */}
            <div className='absolute inset-0 bg-black/60'></div>

            {/* Content Overlay */}
            <div className='absolute inset-0 z-10 h-full flex items-center justify-center'>
                <div className='text-center text-white px-4'>
                    <div className='flex items-center justify-center gap-2 mb-4'>
                        <p className='w-8 md:w-11 h-1 bg-white'></p>
                        <p className='font-medium text-sm md:text-base'>New Collection</p>
                        <p className='w-8 md:w-11 h-1 bg-white'></p>
                    </div>
                    <h1 className='prata-regular text-4xl sm:text-5xl lg:text-7xl leading-relaxed font-bold mb-6'>
                        Latest Fashion
                    </h1>
                    <p className='text-lg md:text-xl mb-8 font-light'>
                        Discover our premium collection of track suits and jerseys
                    </p>
                    <a href="/collection" className='bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition cursor-pointer inline-block'>
                        Shop Now
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero
