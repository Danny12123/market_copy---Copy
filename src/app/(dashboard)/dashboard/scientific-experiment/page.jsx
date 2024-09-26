'use client'

import AddExperimentModal from '@/app/component/Modal/AddExperimentModal'
import { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { db } from '@/app/config'
import { getDocs, collection } from 'firebase/firestore'

const ScientificExperiment = () => {
  const [isItemSelected, setIsItemSelected] = useState(false)
  const [isAdd, setIsAdd] = useState(false)
  const [apparatuses, setApparatuses] = useState([])
  const [getAllIsLoading, setGetAllIsLoading] = useState(false)

  useEffect(() => {
    const fetchApparatuses = async () => {
      try {
        // const querySnapshot = await getDocs(collection(db, 'experiment'))
        // const apparatusList = querySnapshot.docs.map((doc) => ({
        //   id: doc.id,
        //   ...doc.data(),
        // }))
        if (typeof window !== 'undefined') {
          setGetAllIsLoading(true)
          const storedApparatus = localStorage.getItem('experiment')
          if (storedApparatus) {
            const apparatusData = JSON.parse(storedApparatus)
            setApparatuses(apparatusData)
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
  }, [isAdd])
  // console.log(apparatuses)

  if (getAllIsLoading) {
    return <p>Loading...</p>
  }
  return (
    <div className="p-5">
      <div className="w-full">
        <h1 className="text-base text-blue-500">Scientific Experiment</h1>
        <hr className="my-3" />
      </div>
      <div className="w-full">
        <h1 className="text-base text-blue-400 text-center">Experiment</h1>
        <p className="text-xs mt-3">
          scientific experiment is a method used by scientists to test a
          hypothesis or explore a scientific question. It involves a controlled
          investigation where variables are manipulated, and observations or
          measurements are made to draw conclusions
        </p>
      </div>
      <>
        <div className="w-full flex items-end justify-end mt-3">
          <button
            onClick={() => setIsAdd(true)}
            className="py-2 px-4 rounded-full bg-green-400 text-sm text-[#fff]"
          >
            Add
          </button>
        </div>
        <div className="w-full">
          {/* <h1 className="text-center text-lg text-blue-500 mb-3">
            Choose an experiment
          </h1> */}

          <Accordion type="single" collapsible className="w-full">
            {apparatuses?.map((item, index) => (
              <AccordionItem value={index} key={index}>
                <AccordionTrigger>{item?.name}</AccordionTrigger>
                <AccordionContent>
                  <ul>
                    <li className="my-2">
                      <h1 className="text-sm">Controlled Variable</h1>{' '}
                      <div className="text-xs">{item?.controlledVariable}</div>
                    </li>
                    <li className="my-2">
                      <h1 className="text-sm">Independent Variable</h1>
                      <div className="text-xs">{item?.independentVariable}</div>
                    </li>
                    <li className="my-2">
                      <h1 className="text-sm">Dependent Variable</h1>
                      <div className="text-xs">{item?.dependentVariable}</div>
                    </li>
                    <li className="my-2">
                      <h1 className="text-sm">Procedure</h1>
                      <div className="text-xs">{item?.controlGroup}</div>
                    </li>
                    <li className="my-2">
                      <h1 className="text-sm">Hypothesis</h1>
                      <div className="text-xs">{item?.hypothesis}</div>
                    </li>

                    <li className="my-2">
                      <h1 className="text-sm">Out come</h1>
                      <div className="text-xs">{item?.procedure}</div>{' '}
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </>
      <AddExperimentModal setIsAdd={setIsAdd} isAdd={isAdd} />
    </div>
  )
}
export default ScientificExperiment
