'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'
import { Textarea, TextInput } from '@tremor/react'
import { db, storage } from '@/app/config'
import { addDoc, collection } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const ViewApparatusModal = ({ isBigModal, setIsBigModal, selectedItem }) => {
  const [isNewModal, setIsNewModal] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [available, setAvailable] = useState(0)
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleImageChange = (e) => {
    setImage(e.target.files[0])
  }

  useEffect(() => {
    if (selectedItem) {
      setName(selectedItem?.name)
      setDescription(selectedItem?.description)
      setLocation(selectedItem?.location)
      setAvailable(selectedItem?.available)
    }
  }, [selectedItem])

  const handleSave = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Get the stored apparatus from localStorage
    const storedApparatus = JSON.parse(localStorage.getItem('apparatus')) || []

    // Find the index of the selected item in the stored apparatus
    const selectedItemIndex = storedApparatus.findIndex(
      (item) => item?.id === selectedItem?.id,
    )

    // Update the selected item in the stored apparatus
    storedApparatus[selectedItemIndex] = {
      id: selectedItem?.id,
      name,
      description,
      location,
      available,
      imageUrl: selectedItem.imageUrl, // Keep the image URL
    }

    // Update localStorage with the updated apparatus
    localStorage.setItem('apparatus', JSON.stringify(storedApparatus))

    // Reset the form and loading state
    setName('')
    setDescription('')
    setLocation('')
    setAvailable(0)
    setImage(null)
    setLoading(false)
    setIsNewModal(false)
    window.location.reload()
  }

  const handleDelete = () => {
    // Get the stored apparatus from localStorage
    const storedApparatus = JSON.parse(localStorage.getItem('apparatus')) || []

    // Find the index of the selected item in the stored apparatus
    const selectedItemIndex = storedApparatus.findIndex(
      (item) => item?.id === selectedItem?.id,
    )

    // Remove the selected item from the stored apparatus
    storedApparatus.splice(selectedItemIndex, 1)

    // Update localStorage with the updated apparatus
    localStorage.setItem('apparatus', JSON.stringify(storedApparatus))

    // Close the modal
    setIsBigModal(false)
    window.location.reload()
  }

  return (
    <div
      className={`fixed ${
        !isBigModal ? 'hidden' : 'flex'
      }  top-0 left-0 right-0 bottom-0 z-[1000] bg-[rgba(0,0,0,0.15)] backdrop-blur-sm  items-center justify-center`}
    >
      <div
        onClick={() => setIsBigModal(false)}
        className="w-full h-full absolute top-0 left-0"
      ></div>
      {!isNewModal ? (
        <div className="rounded-lg w-full md:w-[480px] h-auto p-5 bg-white z-[1000] flex items-center justify-center">
          <div className="w-full h-auto relative">
            <div className="w-[150px] h-[150px] object-cover flex items-center justify-center">
              <Image
                width={100}
                height={100}
                className="w-full h-full object-cover"
                src={selectedItem?.imageUrl}
                alt="Product"
              />
            </div>
            <div className="w-full h-auto my-3">
              <h1 className="text-sm font-medium">{selectedItem?.name}</h1>
              <h1 className="text-sm ">
                Description : {selectedItem?.description}
              </h1>
              <p className="text-sm">Location : {selectedItem?.location}</p>
              <p className="text-sm">Available : {selectedItem?.available}</p>
            </div>
            <div className="absolute top-2 right-2">
              <div className="flex gap-3 items-end justify-end">
                <FaRegEdit
                  onClick={() => setIsNewModal(true)}
                  className="text-xl cursor-pointer hover:text-blue-600"
                />
                <MdDeleteForever
                  onClick={handleDelete}
                  className="text-xl cursor-pointer hover:text-blue-600"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-lg w-full md:w-[480px] h-auto p-5 bg-white z-[1000] ">
          <div className="w-full flex items-center justify-between">
            <h1 className="text-xl font-medium">Edit apparatus</h1>
            <h1
              onClick={() => setIsNewModal(false)}
              className="text-sm font-medium cursor-pointer"
            >
              Cancel
            </h1>
          </div>
          <form onSubmit={handleSave}>
            <div className="w-full my-2 flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <label>Apparatus name</label>
                <TextInput
                  value={name}
                  onValueChange={(value) => setName(value)}
                  placeHolder="Enter product"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Description</label>
                <Textarea
                  value={description}
                  onValueChange={(value) => setDescription(value)}
                  placeHolder="Give your apparatus a description"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Location</label>
                <TextInput
                  value={location}
                  onValueChange={(value) => setLocation(value)}
                  placeHolder="Enter location"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Available</label>
                <TextInput
                  value={available}
                  onValueChange={(value) => setAvailable(value)}
                  type="number"
                  placeHolder="How many are available"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Upload an image</label>
                <input required onChange={handleImageChange} type="file" />
              </div>
            </div>
            <div className="w-full flex items-end justify-end mt-5">
              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="w-[80px] h-[40px] text-sm bg-blue-700 text-[#fff] rounded-md"
                >
                  {loading ? 'Loading...' : 'Save'}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default ViewApparatusModal
