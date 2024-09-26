'use client'

import { Textarea, TextInput } from '@tremor/react'
import { useState } from 'react'
import { DateRangePicker, DatePicker } from '@tremor/react'

const ChemicalStock = ({ setIsApparatusBox, isApparatusBox }) => {
  const [name_st, setName_st] = useState('')
  const [model, setModel] = useState('')
  const [manufacturer, setManufacturer] = useState('')
  const [quantity, setQuantity] = useState('')
  const [date, setDate] = useState(null)
  const [condition, setCondition] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setIsLoading(true)
      let apparatus = JSON.parse(localStorage.getItem('stock')) || []

      // Add new apparatus to the array
      apparatus.push({
        name_st,
        model,
        manufacturer,
        quantity,
        date,
        condition,
      })

      // Save updated apparatus array to localStorage
      localStorage.setItem('stock', JSON.stringify(apparatus))

      alert('Stock added successfully!')
      setManufacturer('')
      setModel('')
      setQuantity('')
      setDate(null)
      setCondition('')
      setIsLoading(false)
      setIsApparatusBox(false)
    } catch (error) {
      setIsLoading(false)
      console.error('Error adding apparatus: ', error)
      alert('Error adding apparatus.')
    }
  }
  return (
    <div
      className={`fixed ${
        !isApparatusBox ? 'hidden' : 'flex'
      }  top-0 left-0 right-0 bottom-0 z-[1000] bg-[rgba(0,0,0,0.15)] backdrop-blur-sm  items-center justify-center`}
    >
      <div
        onClick={() => setIsApparatusBox(false)}
        className="w-full h-full absolute top-0 left-0"
      ></div>

      <div className="rounded-lg w-full md:w-[580px] h-fit p-5 bg-white z-[1000]">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-2xl font-medium">Add Apparatus Inventory</h1>
          <h1
            onClick={() => setIsApparatusBox(false)}
            className="text-sm font-medium cursor-pointer"
          >
            X
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="w-full my-2 flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <label>Apparatus name</label>
              <TextInput
                value={name_st}
                onValueChange={(value) => setName_st(value)}
                placeHolder="Enter chemical name "
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Model Number</label>
              <Textarea
                value={model}
                onValueChange={(value) => setModel(value)}
                placeHolder="Enter model number"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Manufacturer</label>
              <Textarea
                value={manufacturer}
                onValueChange={(value) => setManufacturer(value)}
                placeHolder="Enter manufacturer"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Quantity available</label>
              <TextInput
                value={quantity}
                type="number"
                onValueChange={(value) => setQuantity(value)}
                placeHolder="Enter quantity on hand"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Condition Status</label>
              <TextInput
                value={condition}
                onValueChange={(value) => setCondition(value)}
                placeHolder="Enter condition status"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Calibration Date</label>
              <DatePicker
                // id="alertDate"
                className="w-full ml-2 flex items-center justify-center bg-[#fff] z-30"
                enableSelect={false}
                enableYearNavigation={true}
                value={date}
                onValueChange={(value) => setDate(value)}
              />
            </div>
          </div>
          <div className="w-full flex items-end justify-end mt-5">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsApparatusBox(false)}
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

export default ChemicalStock
