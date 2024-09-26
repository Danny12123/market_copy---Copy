import Image from 'next/image'
import React from 'react'
import { FaDownload } from 'react-icons/fa'
import { saveAs } from 'file-saver'

const SummaryModal = ({ setIsSummary, isSummary, apparatuses }) => {
  const totalAvailable = apparatuses?.reduce(
    (acc, item) => acc + parseInt(item?.available),
    0,
  )
  const calculateApparatusTotals = (apparatus) => {
    const totalApparatus = apparatus.length
    const totalAvailableApparatus = apparatus.reduce(
      (total, item) => total + parseInt(item.available),
      0,
    )

    return {
      totalApparatus,
      totalAvailableApparatus,
    }
  }

  const downloadApparatusCSV = () => {
    const { totalApparatus, totalAvailableApparatus } =
      calculateApparatusTotals(apparatuses)

    // Get the current date
    const currentDate = new Date()
    const formattedDate = currentDate.toISOString().split('T')[0] // YYYY-MM-DD format

    // Create CSV content
    let csvContent = `Date: ${formattedDate}\nName,Description,Location,Available\n`
    apparatuses?.forEach((item) => {
      csvContent += `${item.name},${item.description},${item.location},${item.available}\n`
    })

    // Append totals at the end of the CSV
    csvContent += `\nTotal Apparatus:,${totalApparatus}\n`
    csvContent += `Total Available Apparatus:,${totalAvailableApparatus}\n`

    // Convert CSV content to Blob and trigger download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    saveAs(blob, 'apparatus.csv')
  }
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
          <div className="flex items-center gap-5 ">
            <div
              onClick={downloadApparatusCSV}
              className=" cursor-pointer hover:border border-gray-300 p-2 rounded-md"
            >
              <FaDownload />
            </div>
            <h1
              onClick={() => setIsSummary(false)}
              className="text-xl font-medium cursor-pointer"
            >
              X
            </h1>
          </div>
        </div>
        <div className="mt-9">
          <p className="text-sm mb-3">
            This a general summary of apparatus add.
          </p>
          <h1>Total apparatus : {apparatuses?.length}</h1>
          <h1>Available apparatus : {totalAvailable}</h1>
        </div>

        <div className="mt-5">
          {apparatuses?.map((item, index) => {
            return (
              <div key={index} className="w-full flex items-center gap-3">
                <div>
                  <div className="w-[150px] h-[100px] object-cover rounded-lg">
                    <Image
                      src={item?.imageUrl}
                      width={1000}
                      height={1000}
                      alt="apparatus"
                      className="w-full h-full rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <h1 className="text-sm font-semibold mb-3">{item?.name}</h1>
                  <h1 className="text-sm">{item?.available}</h1>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SummaryModal
