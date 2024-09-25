import React from 'react'

const SummaryModal = ({ setIsSummary, isSummary, apparatuses }) => {
  const totalAvailable = apparatuses?.reduce(
    (acc, item) => acc + parseInt(item?.available),
    0,
  )
  return (
    <div
      className={`fixed ${
        !isSummary ? 'hidden' : 'flex'
      }  top-0 left-0 right-0 bottom-0 z-[1000] bg-[rgba(0,0,0,0.15)] backdrop-blur-sm  items-center justify-center`}
    >
      <div
        onClick={() => setIsSummary(false)}
        className="w-full h-full absolute top-0 left-0"
      ></div>

      <div className="rounded-lg w-full md:w-[580px] h-fit p-5 bg-white z-[1000]">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-xl font-medium">Apparatus summary</h1>
          <h1
            onClick={() => setIsSummary(false)}
            className="text-sm font-medium cursor-pointer"
          >
            X
          </h1>
        </div>
        <div className="mt-9">
          <p className="text-sm mb-3">
            This a general summary of apparatus add.
          </p>
          <h1>Total apparatus : {apparatuses?.length}</h1>
          <h1>Available apparatus : {totalAvailable}</h1>
        </div>
      </div>
    </div>
  )
}

export default SummaryModal
