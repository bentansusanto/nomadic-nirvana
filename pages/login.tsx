import React from 'react'
import Login from '../components/Auth/Login'
import LayoutAuth from '../layouts/layoutAuth'

const LoginPage = () => {
  return (
    <>
        <LayoutAuth>
            <Login/>
        </LayoutAuth>
    </>
  )
}

export default LoginPage