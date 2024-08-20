"use client";
import { useState } from "react";
import SectionHolder from "@/app/component/Cards/SectionHolder";
import OverView from "@/app/component/Account/OverView";
import MyOrders from "@/app/component/Account/Orders";
import WishList from "@/app/component/Account/WishList";
import NavigationBar from "@/app/component/NavBar/NavigationBar";
import HolderTransparent from "@/app/component/Cards/HolderTransparent";
import { useAccountNavigator } from '@/app/context/AccountContext'

const AccountPage = () => {
  const { setIsTab, isTab } = useAccountNavigator()
  return (
    <div className="w-full min-h-screen bg-bg_secondary dark:bg-bg_dark_secondary">
      <NavigationBar />
      <SectionHolder className="bg-transparent">
        <div className="w-full">
          <div className="w-full">
            <div>
              <div className="w-full block sm:flex justify-between items-center">
                <h1 className="text-lg">Account</h1>
                <ul className="m-0 p-0 flex items-center gap-4">
                  <li
                    onClick={() => setIsTab(1)}
                    className={`my-2 border-b-2 ${
                      isTab === 1
                        ? 'border-b-green-500'
                        : 'border-b-transparent'
                    } py-1 text-sm cursor-pointer`}
                  >
                    OverView
                  </li>
                  <li
                    onClick={() => setIsTab(2)}
                    className={`my-2 border-b-2 ${
                      isTab === 2
                        ? 'border-b-green-500'
                        : 'border-b-transparent'
                    } py-1 text-sm cursor-pointer`}
                  >
                    My orders
                  </li>
                  <li
                    onClick={() => setIsTab(3)}
                    className={`my-2 border-b-2 ${
                      isTab === 3
                        ? 'border-b-green-500'
                        : 'border-b-transparent'
                    } py-1 text-sm cursor-pointer`}
                  >
                    Wish list
                  </li>
                  <li
                    onClick={() => setIsTab(4)}
                    className={`my-2 border-b-2 ${
                      isTab === 4
                        ? 'border-b-green-500'
                        : 'border-b-transparent'
                    } py-1 text-sm cursor-pointer`}
                  >
                    Settings
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className={isTab === 1 ? 'block' : 'hidden'}>
              <OverView setIsTab={setIsTab} />
            </div>
            <div className={isTab === 2 ? 'block' : 'hidden'}>
              <MyOrders />
            </div>
            <div className={isTab === 3 ? 'block' : 'hidden'}>
              <WishList />
            </div>
          </div>
        </div>
      </SectionHolder>
    </div>
  )
}

export default AccountPage;
