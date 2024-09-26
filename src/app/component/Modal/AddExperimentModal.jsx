'use client'

import { useState } from 'react'
import { TextInput, Textarea } from '@tremor/react'
import React from 'react'
import { db } from '@/app/config'
import { addDoc, collection } from 'firebase/firestore'

const AddExperimentModal = ({ setIsAdd, isAdd }) => {
  const [name, setName] = useState('')
  const [hypothesis, setHypothesis] = useState('')
  const [independentVariable, setIndependentVariable] = useState('')
  const [dependentVariable, setDependentVariable] = useState('')
  const [controlGroup, setControlGroup] = useState('')
  const [materials, setMaterials] = useState('')
  const [controlledVariable, setControlledVariable] = useState('')
  const [procedure, setProcedure] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)

      // Add document to Firestore
      // await addDoc(collection(db, 'experiment'), {
      //   name,
      //   hypothesis,
      //   independentVariable,
      //   dependentVariable,
      //   controlGroup,
      //   materials,
      //   controlledVariable,
      //   procedure,
      // })
      let apparatus = JSON.parse(localStorage.getItem('experiment')) || []

      // Add new apparatus to the array
      apparatus.push({
        name,
        hypothesis,
        independentVariable,
        dependentVariable,
        controlGroup,
        materials,
        controlledVariable,
        procedure,
      })

      // Save updated apparatus array to localStorage
      localStorage.setItem('experiment', JSON.stringify(apparatus))

      alert('Experiment added successfully!')
      setName('')

      setLoading(false)
      setIsAdd(false)
    } catch (error) {
      setLoading(false)
      alert('Error adding apparatus.')
    }
  }
  return (
    <div
      className={`fixed ${
        !isAdd ? 'hidden' : 'flex'
      }  top-0 left-0 right-0 bottom-0 z-[1000] bg-[rgba(0,0,0,0.15)] backdrop-blur-sm  items-center justify-center`}
    >
      <div
        onClick={() => setIsAdd(false)}
        className="w-full h-full absolute top-0 left-0"
      ></div>
      <div className="rounded-lg w-full md:w-[580px] h-[80vh] overflow-y-auto p-5 bg-white z-[1000]">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-2xl font-medium">Add Experiment</h1>
          <h1
            onClick={() => setIsAdd(false)}
            className="text-sm font-medium cursor-pointer"
          >
            X
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="w-full my-2 flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <label>Experiment Name</label>
              <TextInput
                value={name}
                onValueChange={(value) => setName(value)}
                placeHolder="Enter product"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Hypothesis</label>
              <Textarea
                value={hypothesis}
                onValueChange={(value) => setHypothesis(value)}
                placeHolder="Enter hypothesis"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Variables</label>
              <div className="w-full flex flex-col gap-1">
                <h6 className="text-xs">Independent Variable</h6>
                <TextInput
                  value={independentVariable}
                  onValueChange={(value) => setIndependentVariable(value)}
                  type="text"
                  placeHolder="Enter independent variable"
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <h6 className="text-xs">Dependent Variable</h6>
                <TextInput
                  value={dependentVariable}
                  onValueChange={(value) => setDependentVariable(value)}
                  type="text"
                  placeHolder="Enter dependent variable"
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <h6 className="text-xs">Controlled Variables</h6>
                <TextInput
                  value={controlledVariable}
                  onValueChange={(value) => setControlledVariable(value)}
                  type="text"
                  placeHolder="Enter controlled variable"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label>Materials</label>
              <TextInput
                type="text"
                value={materials}
                onValueChange={(value) => setMaterials(value)}
                placeHolder="Give your apparatus a description"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Procedure</label>
              <Textarea
                type="text"
                value={controlGroup}
                onValueChange={(value) => setControlGroup(value)}
                placeHolder="Give your apparatus a description"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Out come</label>
              <Textarea
                type="text"
                value={procedure}
                onValueChange={(value) => setProcedure(value)}
                placeHolder="Give your apparatus a description"
              />
            </div>
          </div>
          <div className="w-full flex items-end justify-end mt-5">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsAdd(false)}
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

export default AddExperimentModal
