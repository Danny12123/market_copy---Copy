import Link from 'next/link'
import React from 'react'

const Verification = () => {
  return (
    <div className="w-full h-screen bg-bg_secondary dark:bg-bg_dark_secondary flex justify-center items-center">
      <div className="w-full md:w-[400px] h-auto shadow dark:bg-bg_dark_secondary rounded-md md:p-4 p-2 mx-auto">
        <h1 className="text-base font-medium text-center">
          Welcome to Home shop
        </h1>
        <p className="text-sm text-center">
          Your account has been verified successful.
        </p>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[50px] h-[50px] rounded-full my-2"></div>
        </div>
        <Link href="/account/login">
          <button className="w-full rounded-sm p-2 text-xs bg-green-500 hover:bg-green-600 text-[#fff]">
            Click here to login
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Verification
