'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Pic1 from '../../../../../public/image/b1.png'
import Pic2 from '../../../../../public/image/b2.png'
import Pic3 from '../../../../../public/image/b3.png'
import Pic4 from '../../../../../public/image/b4.jpg'
import ApparatusModal from '@/app/component/Modal/ApparatusModal'
import { db } from '@/app/config'
import { getDocs, collection } from 'firebase/firestore'
import ViewApparatusModal from '@/app/component/Modal/ViewApparatusModal'
import SummaryModal from '@/app/component/Modal/Summary'

const Home = () => {
  const [isModal, setIsModal] = useState(false)
  const [isSummary, setIsSummary] = useState(false)
  const [apparatuses, setApparatuses] = useState([])
  const [getAllIsLoading, setGetAllIsLoading] = useState(false)
  const [isBigModal, setIsBigModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  const router = useRouter()

  const handleShowData = () => {
    router.replace('/dashboard/stocks')
  }

  useEffect(() => {
    const fetchApparatuses = async () => {
      try {
        if (typeof window !== 'undefined') {
          setGetAllIsLoading(true)
          const storedApparatus = localStorage.getItem('apparatus')
          if (storedApparatus) {
            const apparatusData = JSON.parse(storedApparatus)
            // const querySnapshot = await getDocs(collection(db, 'apparatus'))
            // const apparatusList = querySnapshot.docs.map((doc) => ({
            //   id: doc.id,
            //   ...doc.data(),
            // }))
            setApparatuses(apparatusData)
            setGetAllIsLoading(false)
          } else {
            setGetAllIsLoading(false)
          }
        }
      } catch (error) {
        setGetAllIsLoading(false)
        console.error('Error fetching apparatuses: ', error)
      }
    }

    fetchApparatuses()
  }, [isModal])
  // console.log(apparatuses)

  if (getAllIsLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className="w-full h-full flex flex-col relative">
      <div className="w-full h-[20vh] relative rounded-b-[20px] flex justify-center items-center">
        <div className="w-full h-full bg-slate-200 absolute top-0 left-0 opacity-50"></div>
        <div className="w-full">
          <div className="w-full flex flex-col items-center">
            <h1 className="text-xl font-bold tracking-[10px] text-blue-800">
              WELCOME
            </h1>
            {/* <p></p> */}
          </div>
        </div>
      </div>
      <div className="w-full h-auto mt-10 px-10">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-blue-500 text-base">Latest</h1>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSummary(!isSummary)}
              className="w-fit py-1 px-5 text-xs border-2 border-[#eee] hover:bg-[#f5f5f5f5] hover:shadow  rounded-md"
            >
              Summary
            </button>
            <button
              onClick={() => setIsModal(!isModal)}
              className="w-fit py-1 px-5 text-xs border-2 border-[#eee] hover:bg-[#f5f5f5f5] hover:shadow  rounded-md"
            >
              Add apparatus
            </button>
          </div>
        </div>
        <hr className="my-3" />
        <div className="w-full">
          <h1 className="text-base text-center">Apparatus</h1>
          <div className="w-full mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4 gap-3">
            {apparatuses?.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setIsBigModal(!isBigModal)
                  setSelectedItem(item)
                }}
                className="w-[100%] h-[20vh] bg-[#fff] hover:bg-gray-400 hover:shadow border p-2 rounded-lg flex items-center justify-center"
              >
                <div>
                  <div className="w-[150px] h-[100px] object-cover">
                    <Image
                      src={item?.imageUrl}
                      width={100}
                      height={100}
                      alt="apparatus"
                      className="w-full h-full "
                    />
                  </div>
                  <h1 className="text-sm text-center">{item?.name}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ApparatusModal setIsModal={setIsModal} isModal={isModal} />
      <SummaryModal
        setIsSummary={setIsSummary}
        isSummary={isSummary}
        apparatuses={apparatuses}
      />
      <ViewApparatusModal
        setIsBigModal={setIsBigModal}
        isBigModal={isBigModal}
        selectedItem={selectedItem}
      />
    </div>
  )
}
export default Home
