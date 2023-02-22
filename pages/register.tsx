import React from 'react'
import LayoutAuth from '../layouts/layoutAuth'
import Register from '../components/Auth/Register'

const RegisterPage = () => {
  return (
    <div>
        <LayoutAuth>
            <Register/>
        </LayoutAuth>
    </div>
  )
}

export default RegisterPage