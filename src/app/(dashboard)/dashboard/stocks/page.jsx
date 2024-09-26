'use client'

import { useState } from 'react'
import Image from 'next/image'
import Pic1 from '../../../../../public/image/b1.png'

const Apparatus = () => {
  return (
    <div className="w-full h-full p-4">
      <div className="w-full mb-3">
        <h1 className="text-blue-500 text-base">Stocks</h1>
        <hr className="my-3" />
        <div className="w-full flex items-center gap-3">
          <h3 className="text-sm">Apparatus</h3>
          <h3 className="text-sm">Chemical/material</h3>
          <h3 className="text-sm">Records</h3>
        </div>
      </div>
      <div className="w-full h-full block md:flex gap-5 ">
        <div className="w-full h-auto px-3">
          <div className="w-full h-[70vh] bg-gray-600 rounded-xl flex items-center justify-center">
            <div>
              <div className="w-[100%] h-[40vh] object-cover">
                <Image
                  src={Pic1}
                  width={7000}
                  height={7000}
                  alt="pic"
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-sm text-center mt-3 text-[#fff]">
                Product name
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full h-auto">
          <div>
            <h1 className="text-sm mb-1">Description</h1>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda at beatae a facere, voluptates adipisci exercitationem
              aperiam aspernatur, reprehenderit totam commodi. Repudiandae
              tempora dicta quod consequatur. Quos accusantium iste quaerat?
            </p>
          </div>
          <div className="w-full h-auto bg-[#fff] rounded-lg shadow mt-10 p-5">
            <div className="w-full flex items-center justify-between">
              <div className="p-2 text-start">
                <h1 className="text-sm">Available</h1>
                <p className="text-xs">4 containers</p>
              </div>
              <div className="w-[2px] h-[30px] bg-[#000]"></div>
              <div className="p-2 text-end">
                <h1 className="text-sm">Used</h1>
                <p className="text-xs">2 containers</p>
              </div>
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="p-2 text-start">
                <h1 className="text-sm">Location</h1>
                <p className="text-xs">Chemistry Lab</p>
              </div>
              <div className="w-[2px] h-[30px] bg-[#000]"></div>
              <div className="p-2 text-end">
                <h1 className="text-sm">Stock Date</h1>
                <p className="text-xs">In. 22/07/2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Apparatus
