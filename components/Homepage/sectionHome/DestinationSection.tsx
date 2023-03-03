import React, { useRef } from 'react'
import Link from 'next/link'
// import { useDispatch, useSelector } from 'react-redux'
// import { AppDispatch, RootState } from '../../../store/store';
// import { useEffect } from 'react';
// import { fetchDestination } from '../../../slice/DestinationSlice';

const DestinationSection = () => {
    // const dispatch = useDispatch<AppDispatch>()
    // const { destinations } = useSelector((state : RootState) => state.destination); 
    // const destinationRef = useRef(false)
    // useEffect(() => {
    //     dispatch(fetchDestination())
    //   }, [dispatch])

    return (
    <div>
        <div className='flex items-end mx-20 mb-40'>
            <div>
            <h4 className='text-md font-semibold text-dark-orange'>Top Destination</h4>
            <h1 className='text-[2.5rem] font-bold capitalize w-[60%]'>Let’s Explore The Destination You Want.</h1>
            </div>
                <Link href={'/'} className='bg-[#f5f5f5] py-3 px-6 rounded-md ml-auto shadow-md'>Show all</Link>
        </div>
        <div>
            {/* {
              destinations?.map((val: any) => (
                <div key={val.id}>

                </div>
              ))
            } */}
        </div>
    </div>
  )
}

export default DestinationSection