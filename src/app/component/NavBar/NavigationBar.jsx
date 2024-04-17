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
import Profile from "../../../../public/images/testimonial-1.jpg";
import logoImage from "../../../../public/images/logo/favicon.ico";
import ArrowUp from "../.../../../../../public/images/icons/arrow-up-s-line.svg";
import ArrowDown from "../.../../../../../public/images/icons/arrow-down-s-line.svg";
import shopping from "../.../../../../../public/images/icons/shopping.png";
import { Input } from "@/components/ui/input";

const NavigationBar = () => {
  const [navBox, setNavBox] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className="w-full">
      <div className="w-full py-2 bg-white shadow-sm sticky top-0 z-50 px-5">
        <nav className="flex justify-between items-center relative">
          <div>
            <Image src={logoImage} className="w-6" />
          </div>
          <div className="w-[40%] hidden  rounded-lg md:flex items-center">
            <div>
              <Select className=" focus:ring-0 focus:ring-transparent focus:ring-offset-0">
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>North America</SelectLabel>
                    <SelectItem value="est">
                      Eastern Standard Time (EST)
                    </SelectItem>
                    <SelectItem value="cst">
                      Central Standard Time (CST)
                    </SelectItem>
                    <SelectItem value="mst">
                      Mountain Standard Time (MST)
                    </SelectItem>
                    <SelectItem value="pst">
                      Pacific Standard Time (PST)
                    </SelectItem>
                    <SelectItem value="akst">
                      Alaska Standard Time (AKST)
                    </SelectItem>
                    <SelectItem value="hst">
                      Hawaii Standard Time (HST)
                    </SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Europe & Africa</SelectLabel>
                    <SelectItem value="gmt">
                      Greenwich Mean Time (GMT)
                    </SelectItem>
                    <SelectItem value="cet">
                      Central European Time (CET)
                    </SelectItem>
                    <SelectItem value="eet">
                      Eastern European Time (EET)
                    </SelectItem>
                    <SelectItem value="west">
                      Western European Summer Time (WEST)
                    </SelectItem>
                    <SelectItem value="cat">
                      Central Africa Time (CAT)
                    </SelectItem>
                    <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full ml-1 relative">
              <Input
                className="w-full"
                placeholder="Search for any product..."
              />
              {/* <div className="w-full min:h-[36vh] h-auto overflow-auto bg-slate-50 absolute top-10 left-0 z-[1000] shadow rounded-md p-2">
                <h1 className="text-sm mb-2 px-2 ">Related search</h1>
                <hr />
                <h6 className="text-sm text-gray-400 hover:bg-[#f5f5f5] py-1 px-2 my-1">
                  Tops
                </h6>
                <h6 className="text-sm text-gray-400 hover:bg-[#f5f5f5] py-1 px-2 my-1">
                  Tops
                </h6>
                <h6 className="text-sm text-gray-400 hover:bg-[#f5f5f5] py-1 px-2 my-1">
                  Tops
                </h6>
                <h6 className="text-sm text-gray-400 hover:bg-[#f5f5f5] py-1 px-2 my-1">
                  Tops
                </h6>
              </div> */}
            </div>
          </div>
          <div className="flex items-center cursor-pointer">
            <div className="relative mr-3">
              <Image src={shopping} className=" size-7 " />
              <h1 className=" absolute top-0 left-5">10</h1>
            </div>
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
              className="text-sm text-black"
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
          {dropDown && (
            <div className="w-fit md:w-[13%] h-auto bg-[#fff] absolute top-[52px] right-0 rounded-md z-50 shadow py-1 ">
              <ul className="m-0 p-0 ">
                <li className="text-sm px-2 py-1 hover:bg-slate-200 hover:text-base cursor-pointer">
                  <Link
                    href="account/signUp"
                    onClick={() => setDropDown(!dropDown)}
                    role="button"
                  >
                    Sign Up
                  </Link>
                </li>
                <li className="text-sm px-2 py-1 hover:bg-slate-200 hover:text-base cursor-pointer">
                  Log IN
                </li>
                <li className="text-sm px-2 py-1 hover:bg-slate-200 hover:text-base cursor-pointer">
                  Sell with us
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
      <div className="w-full px-3 py-2 md:hidden  rounded-lg flex justify-center items-center">
        <div>
          <SearchSelect defaultValue="1">
            <SearchSelectItem value="1">Option One</SearchSelectItem>
            <SearchSelectItem value="2">Option Two</SearchSelectItem>
            <SearchSelectItem value="3">Option Three</SearchSelectItem>
          </SearchSelect>
        </div>
        <div className="w-full ml-1 relative">
          <TextInput
            className="w-full"
            placeholder="Search for any product..."
          />
          {/* <div className="w-full min:h-[36vh] h-auto overflow-auto bg-slate-50 absolute top-10 left-0 z-[1000] shadow rounded-md p-2">
            <h1 className="text-sm mb-1 px-2 ">Related search</h1>
            <hr />
            <h6 className="text-xs text-gray-400 hover:bg-[#f5f5f5] py-1 px-2 my-1">
              Tops
            </h6>
            <h6 className="text-xs text-gray-400 hover:bg-[#f5f5f5] py-1 px-2 my-1">
              Tops
            </h6>
            <h6 className="text-xs text-gray-400 hover:bg-[#f5f5f5] py-1 px-2 my-1">
              Tops
            </h6>
            <h6 className="text-xs text-gray-400 hover:bg-[#f5f5f5] py-1 px-2 my-1">
              Tops
            </h6>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
