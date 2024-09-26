'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useSidebar } from '../../context/SideBarContext'
import {
  ChevronDown,
  LucideArrowLeftToLine,
  LucideArrowRightToLine,
} from 'lucide-react'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaUser } from 'react-icons/fa'

const Links = [
  // { name: 'Recent', path: '/dashboard/recent' },
  { name: 'Home', path: '/dashboard/home' },
  {
    name: 'Scientific Experiment',
    path: '/dashboard/scientific-experiment',
  },
  // {
  //   name: 'Stocks',
  //   path: '/dashboard/stocks',
  // },

  // { name: 'Settings', path: '/dashboard/settings' },
]

const SideBar = ({ children }) => {
  const { mainSideBar, toggleMainSideBar, isSidebarOpen, toggleSidebar } =
    useSidebar()

  const router = useRouter()
  const pathname = usePathname()
  const [activeSubMenu, setActiveSubMenu] = useState(null)
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [subItem, setSubItem] = useState(null)

  const toggleSubMenu = (index) => {
    setActiveSubMenu(activeSubMenu === index ? null : index)
    setSubItem(null)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setIsSmallScreen(window.innerWidth < 931)
      }
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (isSmallScreen === true) {
      toggleMainSideBar(mainSideBar === false)
    } else if (isSmallScreen === false) {
      toggleMainSideBar(mainSideBar === true)
    }
  }, [isSmallScreen])
  const [email, setEmail] = useState('')
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const text = localStorage.getItem('userEmail')
      if (text) {
        const data = JSON.parse(text)
        setEmail(data)
      }
    }
  }, [])
  return (
    <div className="w-full min-h-screen bg-[#fff] flex flex-col sm:flex-row relative">
      <div
        className={
          mainSideBar
            ? 'h-full w-[20%] 2xl:w-[13%]'
            : 'h-full w-[5%] 2xl:w-[3%] '
        }
        style={{ transition: 'width 0.3s ease' }}
      >
        <div
          className={`fixed ${
            mainSideBar
              ? 'h-full w-[20%] 2xl:w-[13%]'
              : 'h-full w-[5%] 2xl:w-[3%]'
          }`}
        >
          <div className="h-screen bg-blue-800 sm:block hidden overflow-y-auto">
            <div className="w-full">
              {/* This when the main side bar is open and closed */}
              {mainSideBar ? (
                <>
                  <div className="w-auto h-full  lg:p-4 p-1 relative z-50 ">
                    <div className="w-full h-full  object-cover mb-10">
                      <div className="w-full flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center text-center">
                          <div className="w-[40px] h-[40px] bg-[#fff] rounded-full flex items-center justify-center">
                            <FaUser />
                          </div>
                          <p className="text-[#fff] text-sm mt-3 ">{email}</p>
                        </div>
                      </div>
                    </div>
                    <ul className=" h-auto ">
                      {Links?.map((item, index) => (
                        <li key={item.name}>
                          {item.submenu ? (
                            <>
                              <button
                                className={` text-[#fff] hover:text-[#ccc] w-full flex items-center my-0 px-2 py-3 text-sm rounded-md focus:outline-none`}
                                onClick={() => toggleSubMenu(index)}
                              >
                                {item.name}
                                <ChevronDown
                                  size={20}
                                  className={`ml-auto transform ${
                                    activeSubMenu === index ? 'rotate-180' : ''
                                  }`}
                                />
                              </button>
                              <ul
                                className={`submenu ${
                                  activeSubMenu === index ? 'open ' : 'hidden'
                                }`}
                              >
                                {item.submenu.map((subItem, index) => (
                                  <li key={subItem.name}>
                                    <Link
                                      onClick={() => setSubItem(index)}
                                      href={subItem.path}
                                      className={`${
                                        pathname === subItem.path
                                          ? 'text-sm text-[#777]'
                                          : 'text-[#fff]'
                                      } hover:text-[#ccc] flex px-2 py-3 text-sm rounded-md items-center gap-2`}
                                    >
                                      {/* <span>
                                        <GoDash />
                                      </span>{' '} */}
                                      {subItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </>
                          ) : (
                            <div
                              onClick={() => {
                                router.push(item.path)
                              }}
                              className={`${
                                pathname === item.path
                                  ? 'bg-primary text-sm text-white hover:bg-[7777] hover:text-white'
                                  : ''
                              } text-[#fff] hover:text-[#ccc] cursor-pointer flex px-2 py-3 text-sm rounded-md `}
                            >
                              {item.name}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : null}
            </div>
            <div className=" absolute bottom-3 right-3 w-full flex justify-end items-end">
              <div className="bg-white p-2 shadow rounded-md">
                {mainSideBar ? (
                  <LucideArrowLeftToLine
                    className="text-xl"
                    onClick={() => toggleMainSideBar(!mainSideBar)}
                  />
                ) : (
                  <LucideArrowRightToLine
                    className="text-xl"
                    onClick={() => toggleMainSideBar(!mainSideBar)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          mainSideBar
            ? 'sm:w-[80%] 2xl:w-[87%] w-full bg-secondary '
            : 'sm:w-[95%] 2xl:w-[97%]  w-full'
        }
      >
        {children}
      </div>
    </div>
  )
}

export default SideBar
