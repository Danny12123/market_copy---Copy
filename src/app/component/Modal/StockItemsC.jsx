'use client'

import { Textarea, TextInput } from '@tremor/react'
import { useState } from 'react'
import { DateRangePicker, DatePicker } from '@tremor/react'

const StockItemsC = ({ setIsStocks, isStocks }) => {
  const [chemical, setChemical] = useState('')
  const [cas, setCas] = useState('')
  const [quantity, setQuantity] = useState('')
  const [location, setLocation] = useState('')
  const [date, setDate] = useState(null)
  const [purity, setPurity] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setIsLoading(true)
      let apparatus = JSON.parse(localStorage.getItem('chemical_stock')) || []

      // Add new apparatus to the array
      apparatus.push({
        id: Math.random(),
        chemical,
        cas,
        quantity,
        location,
        date,
        purity,
      })

      // Save updated apparatus array to localStorage
      localStorage.setItem('chemical_stock', JSON.stringify(apparatus))

      alert('Stock added successfully!')
      setChemical('')
      setCas('')
      setQuantity('')
      setLocation('')
      setLocation('')
      setDate(null)
      setPurity('')
      setIsLoading(false)
      setIsStocks(false)
    } catch (error) {
      setIsLoading(false)
      console.error('Error adding apparatus: ', error)
      alert('Error adding apparatus.')
    }
  }

  return (
    <div
      className={`fixed ${
        !isStocks ? 'hidden' : 'flex'
      }  top-0 left-0 right-0 bottom-0 z-[1000] bg-[rgba(0,0,0,0.15)] backdrop-blur-sm  items-center justify-center`}
    >
      <div
        onClick={() => setIsStocks(false)}
        className="w-full h-full absolute top-0 left-0"
      ></div>

      <div className="rounded-lg w-full md:w-[580px] h-fit p-5 bg-white z-[1000]">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-2xl font-medium">Add Chemical Inventory</h1>
          <h1
            onClick={() => setIsStocks(false)}
            className="text-sm font-medium cursor-pointer"
          >
            X
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="w-full my-2 flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <label>Chemical name</label>
              <TextInput
                value={chemical}
                onValueChange={(value) => setChemical(value)}
                placeHolder="Enter chemical name "
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>CAS number</label>
              <Textarea
                value={cas}
                onValueChange={(value) => setCas(value)}
                placeHolder="Enter CAS number"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Expiration date</label>
              <DatePicker
                // id="alertDate"
                className="w-full ml-2 flex items-center justify-center bg-[#fff] z-30"
                enableSelect={false}
                enableYearNavigation={true}
                value={date}
                onValueChange={(value) => setDate(value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Concentration/purity</label>
              <TextInput
                value={purity}
                onValueChange={(value) => setPurity(value)}
                placeHolder="Enter concentration/purity"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Quantity</label>
              <TextInput
                value={quantity}
                onValueChange={(value) => setQuantity(value)}
                type="number"
                placeHolder="Enter quantity on hand"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Storage location</label>
              <TextInput
                value={location}
                onValueChange={(value) => setLocation(value)}
                type="text"
                placeHolder="Enter quantity on hand"
              />
            </div>
          </div>
          <div className="w-full flex items-end justify-end mt-5">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsStocks(false)}
                className="w-[80px] h-[40px] text-sm border border-[#eee] rounded-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-[80px] h-[40px] text-sm bg-blue-700 text-[#fff] rounded-md"
              >
                {isLoading ? 'Loading...' : 'Save'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default StockItemsC
