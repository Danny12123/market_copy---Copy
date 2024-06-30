'use client'
import { useState } from 'react'
import SectionHolder from '../Cards/SectionHolder'
import Image from 'next/image'
import BackImage from '../../../../public/images/banna/banner-4.jpeg'
import logo from '../../../../public/images/logo/logo.svg'
import GridHolder from '../Cards/GridHolder/GridHolder'
import AllSellerProduct from './component/AllProduct'
import AllSellerPromotion from './component/Promotion'
import AllSellerReviews from './component/Reviews'

const Seller = () => {
  const [tab, setTab] = useState(1);
  const handleTabChange = (num) => setTab(num)
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
        <div className='mt-3'>
          <div className='flex items-center gap-3'>
          <h3 className='text-lg '>Shalome shop</h3>
          <p className='text-xs text-green-700'>Verify</p>
          <h3 className=' text-xs'>100 followers</h3>
          </div>
          <p className='text-xs mt-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati culpa facere amet ipsam vero maxime eligendi neque nesciunt architecto consequatur officia hic quas consequuntur assumenda, tempore quod dolores. Cumque, quia!</p>
        </div>
        <div className='w-full mt-4 flex items-center gap-3'>
          <h2 onClick={() =>handleTabChange(1)} className={`text-sm ${tab === 1 && "border-b border-[#333]"} pb-2`}>All product</h2>
          <h2 onClick={() =>handleTabChange(2)} className={`text-sm ${tab === 2 && "border-b border-[#333]"} pb-2`}>Promotion</h2>
          <h2 onClick={() =>handleTabChange(3)} className={`text-sm ${tab === 3 && "border-b border-[#333]"} pb-2`}>Reviews</h2>
        </div>
        </div>
        <div className='mt-3'>
          {tab === 1 ? <AllSellerProduct /> : tab === 2 ? <AllSellerPromotion/> :tab===3 ? <AllSellerReviews /> : null}
        </div>
      </SectionHolder>
      
    </div>
  )
}

export default Seller
