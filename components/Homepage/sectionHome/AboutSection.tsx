import React from 'react'
import { Content } from '../../../utils'
import Image from 'next/image'
import { Jurnal } from '../../../utils/index';

const aboutSection: Content = {
    subtitle : 'About Us',
    title : 'We are always update our best destination',
    content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores minus earum aliquam culpa voluptatum repellendus unde deserunt quam, vero magni impedit eaque quae iste veniam eum omnis. Architecto, ea facilis.',
    image : require('../../../public/assets/bg-about.png')
}

const jurnal: Jurnal[] = [
  {
    title : "Destinations",
    rates : "20+"
  },
  {
    title : "Our Visitors Website",
    rates : "1000+"
  },
  {
    title : "Likes Website",
    rates : "300+"
  },
]

const AboutSection = () => {
  return (
    <div className='flex space-x-20 mx-20 mb-40 justify-center'>
        <Image src={aboutSection.image} alt="" className='w-[45%]'/>
        <div className='mt-20 space-y-3'>
            <h4 className='text-md font-semibold text-dark-orange'>{aboutSection.subtitle}</h4>
            <h1 className='text-[2.5rem] font-bold capitalize'>{aboutSection.title}.</h1>
            <p className='text-gray w-[80%] pb-5'>{aboutSection.content}</p>
        <ul className='grid grid-cols-3 gap-5'>
          {
            jurnal.map((val, idx) => (
              <li key={idx}>
                <h4 className='text-[1.5rem] font-bold'>{val.rates}</h4>
                <p className='text-gray'>{val.title}</p>
              </li>
            ))
          }
        </ul>
        </div>
    </div>
  )
}

export default AboutSection