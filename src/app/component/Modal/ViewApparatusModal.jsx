import Image from 'next/image'
import React from 'react'

const ViewApparatusModal = ({ isBigModal, setIsBigModal, selectedItem }) => {
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
      <div className="rounded-lg w-full md:w-[480px] h-auto p-5 bg-white z-[1000] flex items-center justify-center">
        <div className="w-full h-auto">
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
        </div>
      </div>
    </div>
  )
}

export default ViewApparatusModal
