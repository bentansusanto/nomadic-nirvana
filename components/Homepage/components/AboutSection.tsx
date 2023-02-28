import React from 'react'
import { Content } from '../../../utils'
import Image from 'next/image'

const aboutSection: Content = {
    subtitle : 'About Us',
    title : 'We are always update our best destination',
    content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores minus earum aliquam culpa voluptatum repellendus unde deserunt quam, vero magni impedit eaque quae iste veniam eum omnis. Architecto, ea facilis.',
    image : require('../../../public/assets/bg-about.svg')
}

const AboutSection = () => {
  return (
    <div className='flex space-x-20'>
        <Image src={aboutSection.image} alt=""/>
        <div>
            <h4>{aboutSection.subtitle}</h4>
            <h1>{aboutSection.title}</h1>
            <p>{aboutSection.content}</p>
        </div>
    </div>
  )
}

export default AboutSection