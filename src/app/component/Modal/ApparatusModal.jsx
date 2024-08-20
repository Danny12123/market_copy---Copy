'use client'
import { useState, useEffect } from 'react'
import { Textarea, TextInput } from '@tremor/react'
import React from 'react'
import { db, storage } from '@/app/config'
import { addDoc, collection } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const ApparatusModal = ({ isModal, setIsModal }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [available, setAvailable] = useState('')
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleImageChange = (e) => {
    setImage(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      let imageUrl = ''

      if (image) {
        // Upload image to Firebase Storage
        const imageRef = ref(storage, `apparatus/${image.name}`)
        const snapshot = await uploadBytes(imageRef, image)
        imageUrl = await getDownloadURL(snapshot.ref)
      }

      // Add document to Firestore
      await addDoc(collection(db, 'apparatus'), {
        name,
        description,
        location,
        available,
        imageUrl,
      })

      alert('Apparatus added successfully!')
      setName('')
      setDescription('')
      setLocation('')
      setAvailable('')
      setImage(null)
      setLoading(false)
      setIsModal(false)
    } catch (error) {
      setLoading(false)
      console.error('Error adding apparatus: ', error)
      alert('Error adding apparatus.')
    }
  }

  return (
    <div
      className={`fixed ${
        !isModal ? 'hidden' : 'flex'
      }  top-0 left-0 right-0 bottom-0 z-[1000] bg-[rgba(0,0,0,0.15)] backdrop-blur-sm  items-center justify-center`}
    >
      <div
        onClick={() => setIsModal(false)}
        className="w-full h-full absolute top-0 left-0"
      ></div>

      <div className="rounded-lg w-full md:w-[580px] h-fit p-5 bg-white z-[1000]">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-2xl font-medium">Add apparatus</h1>
          <h1
            onClick={() => setIsModal(false)}
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
                onClick={() => setIsModal(false)}
                className="w-[80px] h-[40px] text-sm border border-[#eee] rounded-md"
              >
                Cancel
              </button>
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
    </div>
  )
}

export default ApparatusModal
