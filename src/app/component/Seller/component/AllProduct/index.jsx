
import React from 'react'
import Image from 'next/image'
import GridHolder from '@/app/component/Cards/GridHolder/GridHolder'
import { products } from '@/app/utilites/products'
import MainProduct from '@/app/component/ProductHolder/MainProduct'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { Input } from '@/components/ui/input'

const AllSellerProduct = () => {
  return (
    <div >
      <div className='w-full flex items-center justify-center'>
        <div className='flex items-center gap-3'>
            <Input className='w-full' placeholder='Search for a product' />
            <Select className=" focus:ring-0 focus:ring-transparent focus:ring-offset-0 w-full">
                  <SelectTrigger className="w-[200px] focus:ring-0 focus:ring-transparent focus:ring-offset-0">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel className="text-xs">
                        North America
                      </SelectLabel>
                      <SelectItem value="est" className="text-xs">
                        Eastern Standard Time (EST)
                      </SelectItem>
                      <SelectItem value="cst" className="text-xs">
                        Central Standard Time (CST)
                      </SelectItem>
                      <SelectItem value="mst" className="text-xs">
                        Mountain Standard Time (MST)
                      </SelectItem>
                      <SelectItem value="pst" className="text-xs">
                        Pacific Standard Time (PST)
                      </SelectItem>
                      <SelectItem value="akst" className="text-xs">
                        Alaska Standard Time (AKST)
                      </SelectItem>
                      <SelectItem value="hst" className="text-xs">
                        Hawaii Standard Time (HST)
                      </SelectItem>
                    </SelectGroup>
                    
                  </SelectContent>
                </Select>
        </div>
      </div>
      <GridHolder>
      {products.map((item, index) => (
            <MainProduct key={index} product={item} />
          ))}
      </GridHolder>
    </div>
  )
}

export default AllSellerProduct
