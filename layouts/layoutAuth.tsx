import React, { ReactNode } from 'react'
import NavbarAuth from '../components/Navbar/NavbarAuth'

const LayoutAuth = ({children} : {children : ReactNode}) => {
  return (
    <div>
        <NavbarAuth/>
        <main>{children}</main>
    </div>
  )
}

export default LayoutAuth