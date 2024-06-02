"use client";
import { useState } from "react";
import { TextInput, SearchSelect, SearchSelectItem } from "@tremor/react";
import Image from "next/image";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Moon, Sun } from "lucide-react";
import Profile from "../../../../public/images/testimonial-1.jpg";
import logoImage from "../../../../public/images/logo/favicon.ico";
import ArrowUp from "../.../../../../../public/images/icons/arrow-up-s-line.svg";
import ArrowDown from "../.../../../../../public/images/icons/arrow-down-s-line.svg";
import shopping from "../.../../../../../public/images/icons/shopping.png";
import { Input } from "@/components/ui/input";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAccountNavigator } from '@/app/context/AccountContext'

const NavigationBar = () => {
  const { setIsTab } = useAccountNavigator()
  const [navBox, setNavBox] = useState(false)
  const [dropDown, setDropDown] = useState(false)
  const { setTheme } = useTheme()
  return (
    <div className="w-full dark:bg-black bg-white sticky top-0 left-0 z-50">
      <div className="relative w-full">
        <div className="w-full py-2  shadow-sm sticky top-0 z-50 md:px-5 px-3">
          <nav className="flex justify-between items-center relative">
            <Link href="/">
              <div>
                <Image src={logoImage} className="w-6" />
              </div>
            </Link>
            <div className="w-[40%] hidden  rounded-lg md:flex items-center">
              <div>
                <Select className=" focus:ring-0 focus:ring-transparent focus:ring-offset-0">
                  <SelectTrigger className="w-[200px] focus:ring-0 focus:ring-transparent focus:ring-offset-0">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel className="text-xs">
                        North America
                      </SelectLabel>
                      <SelectItem value="est" className="text-xs">
                        Eastern Standard Time (EST)
                      </SelectItem>
                      <SelectItem value="cst" className="text-xs">
                        Central Standard Time (CST)
                      </SelectItem>
                      <SelectItem value="mst" className="text-xs">
                        Mountain Standard Time (MST)
                      </SelectItem>
                      <SelectItem value="pst" className="text-xs">
                        Pacific Standard Time (PST)
                      </SelectItem>
                      <SelectItem value="akst" className="text-xs">
                        Alaska Standard Time (AKST)
                      </SelectItem>
                      <SelectItem value="hst" className="text-xs">
                        Hawaii Standard Time (HST)
                      </SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel className="text-xs">
                        North America
                      </SelectLabel>
                      <SelectItem value="est" className="text-xs">
                        Eastern Standard Time (EST)
                      </SelectItem>
                      <SelectItem value="cst" className="text-xs">
                        Central Standard Time (CST)
                      </SelectItem>
                      <SelectItem value="mst" className="text-xs">
                        Mountain Standard Time (MST)
                      </SelectItem>
                      <SelectItem value="pst" className="text-xs">
                        Pacific Standard Time (PST)
                      </SelectItem>
                      <SelectItem value="akst" className="text-xs">
                        Alaska Standard Time (AKST)
                      </SelectItem>
                      <SelectItem value="hst" className="text-xs">
                        Hawaii Standard Time (HST)
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full ml-1 relative">
                <Link href={`/products/searched/${'sd'}`}>
                  <Input
                    className="w-full"
                    placeholder="Search for any product..."
                  />
                </Link>
                {/* <div className="w-full min:h-[36vh] h-auto overflow-auto bg-[#fff] dark:bg-slate-800 absolute top-10 left-0 z-[1000] shadow rounded-md px-2 py-1">
                <h6 className="text-sm text-gray-500 dark:text-white hover:bg-[#f5f5f5] hover:dark:bg-slate-900 py-1 px-2 my-1">
                  Tops
                </h6>
                <h6 className="text-sm text-gray-500 dark:text-white hover:bg-[#f5f5f5] hover:dark:bg-slate-900 py-1 px-2 my-1">
                  Tops
                </h6>
              </div> */}
              </div>
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme('light')}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme('dark')}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme('system')}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/cart">
                <div className="relative mr-3">
                  <Image src={shopping} className=" size-7 " />
                  <h1 className=" absolute top-0 left-5">10</h1>
                </div>
              </Link>
              <div
                onClick={() => setDropDown(!dropDown)}
                className="w-10 h-10 rounded-full object-cover shadow-md mr-1"
              >
                <Image
                  src={Profile}
                  alt="profile"
                  className="w-full h-full rounded-full"
                />
              </div>
              <h3
                onClick={() => setDropDown(!dropDown)}
                className="text-sm text-black dark:text-white"
              >
                Daniel Acquah
              </h3>
              {dropDown ? (
                <span>
                  <Image src={ArrowUp} />
                </span>
              ) : (
                <span>
                  <Image src={ArrowDown} />
                </span>
              )}
            </div>
          </nav>
        </div>
        {dropDown && (
          <div className="w-full h-screen z-[1000] absolute top-0 left-0 shadow py-1 ">
            <div
              onClick={() => setDropDown(!dropDown)}
              className=" absolute top-0 left-0 w-full h-full"
            ></div>
            <ul className="m-0 p-2 w-[50%] md:w-[20%] h-auto bg-[#fff] dark:bg-slate-900  absolute shadow top-[52px] right-0 rounded-md">
              <div className="w-full flex items-center gap-2 mb-2">
                <button className="w-[50%] bg-green-500 hover:bg-green-600 transition-all delay-75 ease-out text-white rounded-md px-3 py-2 border border-transparent text-xs">
                  <Link
                    href="/account/signUp"
                    onClick={() => setDropDown(!dropDown)}
                    role="button"
                  >
                    Sign Up
                  </Link>
                </button>
                <button className="w-[50%] border-green-500 hover:bg-slate-50 transition-all delay-75 ease-out px-3 py-2 rounded-md border text-xs">
                  <Link
                    href="/account/login"
                    onClick={() => setDropDown(!dropDown)}
                    role="button"
                  >
                    Login
                  </Link>
                </button>
              </div>
              <Link
                href="/account"
                onClick={() => {
                  setDropDown(!dropDown)
                  setIsTab(2)
                }}
              >
                <li className="text-sm px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-800  cursor-pointer">
                  My orders
                </li>
              </Link>
              <Link
                href="/account"
                onClick={() => {
                  setDropDown(!dropDown)
                  setIsTab(1)
                }}
              >
                <li className="text-sm px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-800  cursor-pointer">
                  My coins
                </li>
              </Link>
              <Link
                href="/account"
                onClick={() => {
                  setDropDown(!dropDown), setIsTab(3)
                }}
              >
                <li className="text-sm px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-800  cursor-pointer">
                  Wish list
                </li>
              </Link>
              <li className="text-sm px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-800  cursor-pointer">
                Help center
              </li>
              <li className="text-sm px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-800  cursor-pointer">
                Sell with us
              </li>
            </ul>
          </div>
        )}
        <div className="w-full px-3 py-2 md:hidden  rounded-lg flex justify-center items-center">
          <div>
            <Select className="">
              <SelectTrigger className="w-[120px] px-[8px] focus:ring-0 focus:ring-transparent focus:ring-offset-0">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent className="px-[8px]">
                <SelectGroup>
                  <SelectLabel className="text-xs">North America</SelectLabel>
                  <SelectItem value="est" className="text-xs">
                    Eastern Standard Time (EST)
                  </SelectItem>
                  <SelectItem value="cst" className="text-xs">
                    Central Standard Time (CST)
                  </SelectItem>
                  <SelectItem value="mst" className="text-xs">
                    Mountain Standard Time (MST)
                  </SelectItem>
                  <SelectItem value="pst" className="text-xs">
                    Pacific Standard Time (PST)
                  </SelectItem>
                  <SelectItem value="akst" className="text-xs">
                    Alaska Standard Time (AKST)
                  </SelectItem>
                  <SelectItem value="hst" className="text-xs">
                    Hawaii Standard Time (HST)
                  </SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel className="text-xs">North America</SelectLabel>
                  <SelectItem value="est" className="text-xs">
                    Eastern Standard Time (EST)
                  </SelectItem>
                  <SelectItem value="cst" className="text-xs">
                    Central Standard Time (CST)
                  </SelectItem>
                  <SelectItem value="mst" className="text-xs">
                    Mountain Standard Time (MST)
                  </SelectItem>
                  <SelectItem value="pst" className="text-xs">
                    Pacific Standard Time (PST)
                  </SelectItem>
                  <SelectItem value="akst" className="text-xs">
                    Alaska Standard Time (AKST)
                  </SelectItem>
                  <SelectItem value="hst" className="text-xs">
                    Hawaii Standard Time (HST)
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full ml-1 relative">
            <Link href={`/products/searched/${'sd'}`}>
              <Input
                className="w-full focus:ring-0 focus:ring-transparent focus:ring-offset-0"
                placeholder="Search for any product..."
              />
            </Link>
            {/* <div className="w-full min:h-[36vh] h-auto overflow-auto bg-[#fff] dark:bg-slate-800 absolute top-10 left-0 z-[1000] shadow rounded-md px-2 py-1">
            <h6 className="text-sm text-gray-500 dark:text-white hover:bg-[#f5f5f5] hover:dark:bg-slate-900 py-1 px-2 my-1">
              Tops
            </h6>
            <h6 className="text-sm text-gray-500 dark:text-white hover:bg-[#f5f5f5] hover:dark:bg-slate-900 py-1 px-2 my-1">
              Tops
            </h6>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavigationBar;
