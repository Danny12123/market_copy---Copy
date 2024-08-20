import Image from 'next/image'
import Logo from '../../../../public/image/logo.jpg'
import { FaSearch } from 'react-icons/fa'
import { IoMdSettings } from "react-icons/io";
import { RiNotification4Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="w-full h-auto px-4 py-5 bg-blue-900 sticky top-0 z-50">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-[30px] h-[30px] object-cover">
            <Image
              src={Logo}
              width={100}
              height={100}
              className="w-full h-full"
            />
          </div>
          <h4 className="text-base text-[#fff]">
            Wesly Grammar Senior High School
          </h4>
        </div>
        <div>
          <div className="flex items-center bg-[#fff]  rounded-full gap-2">
            <input
              type="text"
              className="w-full px-3 ml-3 border-none outline-none rounded-full"
              placeholder="Search"
            />
            <div className="border-l-2 border-[#000] flex items-center justify-center px-3">
              <FaSearch className="text-[#000] text-3xl" />
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between gap-3'>
        <IoMdSettings className='text-lg text-[#fff]' />
        <RiNotification4Fill className='text-lg text-[#fff]' />
        <FaUser className='text-lg text-[#fff]' />
        </div>
      </div>
    </div>
  )
}
export default TopBar
