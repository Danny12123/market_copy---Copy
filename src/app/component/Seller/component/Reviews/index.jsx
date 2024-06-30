'use client'
import { useState } from 'react'
import Image from 'next/image'
import SectionHolder from '@/app/component/Cards/SectionHolder'
import { RiStarFill, RiStarHalfLine, RiCheckFill } from "@remixicon/react";
import { Input } from '@/components/ui/input';


const AllSellerReviews = () => {
  const [showInput, setShowInput] = useState(false)
  const handleShowInput = () => {
    setShowInput(!showInput)
  }
  return (
    <div>
      <SectionHolder>
        <div className='w-full'>
          <div className='w-full flex gap-3'>
          <div className='w-[10%] md:w-[3%]'>
            <div className='w-[35px] h-[35px] rounded-full bg-[#777] object-cover'></div>
            </div>
            <div className='w-full'>
              <div className='mb-1'>
                <div className='flex gap-2'>
                  <h2 className='text-sm'>Danny boy <span className='text-xs'>2days ago</span></h2>
                  <h1 onClick={handleShowInput} className='text-xs text-gray-500 mt-1'>Reply</h1>
                </div>
              <div className="flex items-baseline">
                  <RiStarFill size={13} className=" text-yellow-400" />
                  <RiStarFill size={13} className=" text-yellow-400" />
                  <RiStarFill size={13} className=" text-yellow-400" />
                  <RiStarHalfLine size={13} className=" text-yellow-400" />
                  
                </div>
              </div>
              <p className='text-xs text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nostrum aut repellat optio corporis odio cupiditate reprehenderit similique, dolores, id facere cum maiores voluptatibus dolor earum distinctio alias expedita officia.</p>
              {showInput && <div className='w-full flex gap-2 mt-2'>
                <Input plaseholder="Enter your comment" />
                <button className='text-xs'>Send</button>
              </div>}
              
            </div>
          </div>
        </div>
        <div id='sub_comment' className='w-full mt-3 flex items-end justify-end'>
          <div className='w-[98%] flex gap-3'>
          <div className='w-[10%] md:w-[3%]'>
            <div className='w-[30px] h-[30px] rounded-full bg-[#777] object-cover'></div>
            </div>
            <div className='w-full'>
              <div className='mb-1'>
              <h2 className='text-sm'>Danny boy <span className='text-xs'>2days ago</span></h2>
              <div className="flex items-baseline">
                  <RiStarFill size={13} className=" text-yellow-400" />
                  <RiStarFill size={13} className=" text-yellow-400" />
                  <RiStarFill size={13} className=" text-yellow-400" />
                  <RiStarHalfLine size={13} className=" text-yellow-400" />
                  
                </div>
              </div>
              <p className='text-xs text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nostrum aut repellat optio corporis odio cupiditate reprehenderit similique, dolores, id facere cum maiores voluptatibus dolor earum distinctio alias expedita officia.</p>
            </div>
          </div>
        </div>
      </SectionHolder>
      <SectionHolder>
        <div>
          <div className='w-full flex gap-3'>
            <div className='w-[10%] md:w-[3%]'>
            <div className='w-[35px] h-[35px] rounded-full bg-[#777] object-cover'></div>
            </div>
            <div className='w-full'>
              <div className='mb-1'>
              <h2 className='text-sm'>Danny boy <span className='text-xs'>2days ago</span></h2>
              <div className="flex items-baseline">
                  <RiStarFill size={13} className=" text-yellow-400" />
                  <RiStarFill size={13} className=" text-yellow-400" />
                  <RiStarFill size={13} className=" text-yellow-400" />
                  <RiStarHalfLine size={13} className=" text-yellow-400" />
                  
                </div>
              </div>
              <p className='text-xs text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nostrum aut repellat optio corporis odio cupiditate reprehenderit similique, dolores, id facere cum maiores voluptatibus dolor earum distinctio alias expedita officia.</p>
            </div>
          </div>
        </div>
      </SectionHolder>
    </div>
  )
}

export default AllSellerReviews
