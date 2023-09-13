"use client"
import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/Image'



function Hero() {
    const handleScroll = ()=> {

    }
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x m-5'>
            <h1 className='hero__title'>
                Find and book a car using our fabolous website - quick and easily!
            </h1>
            <p className='hero__subtitle'>Enjoy your booking experience with seemless quick process.</p>

            <CustomButton
                title = 'Explore Cars'
                containerStyles = 'bg-primary-blue text-white rounded-full mt-10'
                handleClick ={handleScroll}
            
            
            />
        </div>
        <div className='hero__image-container'>
            
            <div className='hero__image'>
            
            <Image src="/hero.png" alt='hero' 
            fill className='object-contain'/>
            </div>
                <div className='hero__image-overlay'/>
                
        </div>
        
    </div>
  )
}

export default Hero 
