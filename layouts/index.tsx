import React, { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Providers from '../provider'

const Layouts = ({children} : {children : ReactNode}) => {
  return (
    <>
    <Providers>
        <Navbar/>
        <main>{children}</main>
    </Providers>
    </>
  )
}

export default Layouts