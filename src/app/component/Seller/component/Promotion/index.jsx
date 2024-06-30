
import React from 'react'
import Image from 'next/image'
import GridHolder from '@/app/component/Cards/GridHolder/GridHolder'

const AllSellerPromotion = () => {
  return (
    <div>
      <div className='w-full h-[30vh] flex items-center justify-center'>
        <div className='text-center'>
            <p className='text-sm'>This seller has no product under promotion.</p>
        </div>
      </div>
      <GridHolder></GridHolder>
    </div>
  )
}

export default AllSellerPromotion
