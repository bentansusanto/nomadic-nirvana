import React from 'react'
import Image from 'next/image'
import Background from '../../public/assets/bg-login.svg'
import FormLogin from './FormLogin'
import Link from 'next/link'
import PlayStore from '../../public/assets/Google Play.svg'
import AppStore from '../../public/assets/Play Store.svg'

const Login = () => {
  return (
    <div className='flex space-x-20 justify-center mt-28 mx-20'>
      {/* Background */}
        <div>
          <Image src={Background} alt=""/>

          {/* Download in playstore and app store */}
          <div className='flex space-x-4 justify-center mt-8'>
            <Image src={PlayStore} alt="" className='w-32'/>
            <Image src={AppStore} alt="" className='w-32'/>
          </div>
        </div>
          <div className='bg-[#e2e2e2] w-[1px] h-98'/>
          {/* Form Login */}
          <div className='space-y-4'>
              <h1 className='text-3xl font-semibold'>Sign In</h1>
              <p className='w-[60%]'>Do not have account? <Link href={'/register'} className="text-dark-orange">Register for access destination.</Link>
              </p>
            <FormLogin/>
          </div>
    </div>
  )
}

export default Login