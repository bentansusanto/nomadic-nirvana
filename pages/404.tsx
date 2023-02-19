import React from 'react'
import Link from 'next/link'

const ErrorPage = () => {
  return (
    <div>
        <h1>...Opps page not found</h1>
        <Link href={'/'}>Homepage</Link>
    </div>
  )
}

export default ErrorPage