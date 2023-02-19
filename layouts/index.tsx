import React, { ReactNode } from 'react'
import Navbar from '../components/Navbar'

const Layouts = ({children} : {children : ReactNode}) => {
  return (
    <div>
        <Navbar/>
        <main>{children}</main>
    </div>
  )
}

export default Layouts