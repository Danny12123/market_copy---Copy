'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Pic1 from '../../../../../public/image/b1.png'
import StockItemsC from '@/app/component/Modal/StockItemsC'
import { format, render, cancel, register } from 'timeago.js'
import ChemicalStock from '@/app/component/Modal/ChemicalStock'
import { MdDeleteForever } from 'react-icons/md'

const Apparatus = () => {
  const [isStocks, setIsStocks] = useState(false)
  const [isApparatusBox, setIsApparatusBox] = useState(false)

  const [isAdd, setIsAdd] = useState(false)
  const [apparatuses, setApparatuses] = useState([])
  const [stock_apparatuses, setStock_Apparatuses] = useState([])
  const [getAllIsLoading, setGetAllIsLoading] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    const fetchApparatuses = async () => {
      try {
        if (typeof window !== 'undefined') {
          setGetAllIsLoading(true)
          const storedApparatus = localStorage.getItem('chemical_stock')
          const stock_Apparatus = localStorage.getItem('stock')
          if (storedApparatus) {
            const apparatusData = JSON.parse(storedApparatus)
            const sa = JSON.parse(stock_Apparatus)
            setApparatuses(apparatusData)
            setStock_Apparatuses(sa)
            setGetAllIsLoading(false)
          } else {
            setGetAllIsLoading(false)
          }
        }
      } catch (error) {
        console.error('Error fetching apparatuses: ', error)
      }
    }

    fetchApparatuses()
  }, [isStocks, isApparatusBox])

  const handleDelete = () => {
    // Get the stored apparatus from localStorage
    const storedApparatus =
      JSON.parse(localStorage.getItem('chemical_stock')) || []

    // Find the index of the selected item in the stored chemical_stock
    const selectedItemIndex = storedApparatus.findIndex(
      (item) => item?.id === selectedItem?.id,
    )

    // Remove the selected item from the stored apparatus
    storedApparatus.splice(selectedItemIndex, 1)

    // Update localStorage with the updated apparatus
    localStorage.setItem('chemical_stock', JSON.stringify(storedApparatus))

    // Close the modal
    // setIsBigModal(false)
    window.location.reload()
  }

  const handleDelete2 = () => {
    // Get the stored apparatus from localStorage
    const storedApparatus = JSON.parse(localStorage.getItem('stock')) || []

    // Find the index of the selected item in the stored stock
    const selectedItemIndex = storedApparatus.findIndex(
      (item) => item?.id === selectedItem?.id,
    )

    // Remove the selected item from the stored apparatus
    storedApparatus.splice(selectedItemIndex, 1)

    // Update localStorage with the updated apparatus
    localStorage.setItem('stock', JSON.stringify(storedApparatus))

    // Close the modal
    // setIsBigModal(false)
    window.location.reload()
  }

  if (getAllIsLoading) {
    return <p>Loading...</p>
  }
  return (
    <div className="w-full h-full p-4 relative">
      <div className="w-full mb-3">
        <button className="text-blue-500 text-base">Stocks</button>
        <hr className="my-3" />
        <div className="w-full flex items-center gap-3">
          <button
            onClick={() => setIsApparatusBox(true)}
            className="w-fit py-1 px-5 text-xs border-2 border-[#eee] hover:bg-[#f5f5f5f5] hover:shadow  rounded-md"
          >
            Apparatus
          </button>
          <h3
            onClick={() => setIsStocks(true)}
            className="w-fit py-1 px-5 text-xs border-2 border-[#eee] hover:bg-[#f5f5f5f5] hover:shadow  rounded-md"
          >
            Chemical/material
          </h3>
          {/* <h3 className="text-sm">Records</h3> */}
        </div>
      </div>
      <div className="w-full h-full flex flex-col gap-3 ">
        {apparatuses?.map((apparatus, index) => (
          <div
            key={index}
            onClick={() => setSelectedItem(apparatus)}
            className="w-full h-auto border border-[#eee] rounded-lg p-3"
          >
            <div className="w-full flex justify-between">
              <div>
                <h1 className="text-sm mb-1">Item</h1>
                <p className="text-xs">{apparatus?.chemical}</p>
              </div>
              <MdDeleteForever
                onClick={handleDelete}
                className="text-xl cursor-pointer hover:text-blue-600"
              />
            </div>
            <div className="w-full h-auto bg-[#fff] rounded-lg shadow mt-3 p-5">
              <div className="w-full flex items-center justify-between">
                <div className="p-2 text-start">
                  <h1 className="text-sm">Available</h1>
                  <p className="text-xs">{apparatus?.quantity} containers</p>
                </div>
                <div className="w-[2px] h-[30px] bg-[#000]"></div>
                <div className="p-2 text-end">
                  <h1 className="text-sm">Purity</h1>
                  <p className="text-xs">{apparatus?.purity}</p>
                </div>
              </div>
              <div className="w-full flex items-center justify-between">
                <div className="p-2 text-start">
                  <h1 className="text-sm">Location</h1>
                  <p className="text-xs">{apparatus?.location}</p>
                </div>
                <div className="w-[2px] h-[30px] bg-[#000]"></div>
                <div className="p-2 text-end">
                  <h1 className="text-sm">Stock Date</h1>
                  <p className="text-xs">In. {format(apparatus?.date)}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div>
          <h1></h1>
          <hr />
        </div>
        {stock_apparatuses?.map((apparatus, index) => (
          <div
            key={index}
            onClick={() => setSelectedItem(apparatus)}
            className="w-full h-auto border border-[#eee] rounded-lg p-3"
          >
            <div className="w-full flex justify-between">
              <div>
                <h1 className="text-sm mb-1">Item</h1>
                <p className="text-xs">{apparatus?.name_st}</p>
              </div>
              <MdDeleteForever
                onClick={handleDelete2}
                className="text-xl cursor-pointer hover:text-blue-600"
              />
            </div>
            <div className="w-full h-auto bg-[#fff] rounded-lg shadow mt-3 p-5">
              <div className="w-full flex items-center justify-between">
                <div className="p-2 text-start">
                  <h1 className="text-sm">Model number</h1>
                  <p className="text-xs">{apparatus?.model} </p>
                  <p className="text-xs">Condition: {apparatus?.condition} </p>
                </div>
                <div className="w-[2px] h-[30px] bg-[#000]"></div>
                <div className="p-2 text-end">
                  <h1 className="text-sm">Manufacturer</h1>
                  <p className="text-xs">{apparatus?.manufacturer}</p>
                </div>
              </div>
              <div className="w-full flex items-center justify-between">
                <div className="p-2 text-start">
                  <h1 className="text-sm">Quantity</h1>
                  <p className="text-xs">{apparatus?.quantity}</p>
                </div>
                <div className="w-[2px] h-[30px] bg-[#000]"></div>
                <div className="p-2 text-end">
                  <h1 className="text-sm">Stock Date</h1>
                  <p className="text-xs">In. {format(apparatus?.date)}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <StockItemsC setIsStocks={setIsStocks} isStocks={isStocks} />
      <ChemicalStock
        setIsApparatusBox={setIsApparatusBox}
        isApparatusBox={isApparatusBox}
      />
    </div>
  )
}
export default Apparatus
