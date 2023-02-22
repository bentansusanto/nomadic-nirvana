import React from 'react'
import Image from 'next/image'
import Logo from '../../public/rivact-logo.svg'
// import {BsChevronDown} from 'react-icons/bs'

const NavbarAuth = () => {
  return (
    <div>
        <div className='px-20 py-5 flex items-center'>
            <Image src={Logo} alt="" className='w-12'/>
            {/* Language */}
            {/* <div className='flex items-center space-x-2 ml-auto bg-[#f5f5f5] py-2 px-4 rounded-sm'>
                <p>EN</p>
                <BsChevronDown/>
            </div> */}
        </div>
    </div>
  )
}

export default NavbarAuth