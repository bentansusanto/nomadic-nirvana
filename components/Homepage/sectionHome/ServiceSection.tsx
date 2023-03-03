import React from 'react'
import { Service } from '../../../utils'
import Image from 'next/image'
import Patern from '../../../public/assets/patern.svg'

const services : Service[] = [
    {
        title : 'Complete information',
        content : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, quisquam!',
        icon : require('../../../public/assets/icon-info.svg')
    },
    {
        title : 'Free access to our website',
        content : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, quisquam!',
        icon : require('../../../public/assets/icon-free-access.svg')
    },
    {
        title : 'Always update destination',
        content : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, quisquam!',
        icon : require('../../../public/assets/icon-always-update.svg')
    }
]

const ServiceSection = () => {
  return (
    <div className='mb-40 relative'>
        <Image src={Patern} alt="" className='absolute  right-20'/>
        <h4 className='text-md font-semibold text-dark-orange text-center'>Our Service</h4>
        <h1 className='text-[2.5rem] font-bold capitalize text-center'>Why Choose Us ?</h1>
        <ul className='grid grid-cols-3 gap-5 ml-40 mt-20 justify-items-center'>
            {
                services.map((val, idx) => (
                    <li key={idx} className="space-y-2">
                        <Image src={val.icon} alt="" className='w-10'/>
                        <h4 className='font-semibold'>{val.title}</h4>
                        <p className='text-[.8rem] w-[68%] text-gray'>{val.content}</p>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default ServiceSection