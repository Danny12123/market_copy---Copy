
import React from 'react'
import SectionHolder from '../Cards/SectionHolder'
import Image from 'next/image'
import BackImage from '../../../../public/images/banna/banner-4.jpeg'
import logo from '../../../../public/images/logo/logo.svg'

const Seller = () => {
  return (
    <div>
      <SectionHolder>
        <div>
        <div className='w-full h-auto rounded-lg relative'>
            <div className='w-full h-[20vh] rounded-lg  object-cover'>
                <Image src={BackImage} width={100} heigth={100} className='w-full h-full rounded-lg' />
            </div>
            <div className='w-[100px] h-[100px] absolute bottom-[4px] left-[20px] rounded-full bg-[#eee]'></div>
        </div>
        </div>
      </SectionHolder>
      
    </div>
  )
}

export default Seller
