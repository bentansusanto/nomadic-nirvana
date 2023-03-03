import React from 'react'
import { Content } from '../../../utils'
import Image from 'next/image'
import Link from 'next/link'

const heroSection: Content = {
    subtitle : 'Explore our islands',
    title : 'Traveling for a relaxing weeekend away.',
    content : 'We have some intersting places in riau islands that you can visit to fill your vacation.' ,
    image : require('../../../public/assets/bg-home.svg')
}


const HeroSection = () => {
  return (
    <div className='flex space-x-20 mt-20 mx-20 mb-40'>
        <div className='mt-20 space-y-3'>
            <h4 className='text-md font-semibold text-dark-orange'>{heroSection.subtitle}</h4>
            <h1 className='text-[2.5rem] font-bold'>{heroSection.title}</h1>
            <p className='text-gray w-[80%] pb-5'>{heroSection.content}</p>
            <button className='bg-orange py-3 px-6 rounded-md shadow-lg'><Link href={'/'}>Explore now</Link></button>
        </div>
        <Image src={heroSection.image} alt=""/>
    </div>
  )
}

export default HeroSection