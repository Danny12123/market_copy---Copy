import { Input } from "@/components/ui/input";
import React from "react";

const AddNewAddressModal = ({ isAddNewAddress, setIsAddNewAddress }) => {
  return (
    <div
      className={`fixed ${
        !isAddNewAddress ? "hidden" : "flex"
      }  top-0 left-0 right-0 bottom-0 z-[1000] bg-[rgba(0,0,0,0.15)] backdrop-blur-sm  items-center justify-center`}
    >
      <div
        onClick={() => setIsAddNewAddress(false)}
        className="w-full h-full absolute top-0 left-0"
      ></div>
      <div className="rounded-lg w-full md:w-[580px] h-fit p-5 bg-white z-[1000]">
        <h1 className="text-xl font-semibold">Add new address</h1>
        <hr />
        <form>
          <div className="w-full flex items-center gap-3 my-3">
            <div className="w-full">
              <label htmlFor="#" className="text-sm text-[#000] mb-3">
                Contact name
              </label>
              <Input className="mt-2" />
            </div>
            <div className="w-full">
              <label htmlFor="#" className="text-sm text-[#000] ">
                Mobile number
              </label>
              <Input className="mt-2" placeholder="Accra" />
            </div>
          </div>
          <div className="w-full flex items-center gap-3 my-3">
            <div className="w-full">
              <label htmlFor="#" className="text-sm text-[#000] mb-3">
                Country name
              </label>
              <Input className="mt-2" />
            </div>
            <div className="w-full">
              <label htmlFor="#" className="text-sm text-[#000] ">
                State/region name
              </label>
              <Input className="mt-2" placeholder="Accra" />
            </div>
          </div>
          <div className="w-full flex items-center gap-3 my-3">
            <div className="w-full">
              <label htmlFor="#" className="text-sm text-[#000] mb-3">
                Address
              </label>
              <Input className="mt-2" />
            </div>
            <div className="w-full">
              <label htmlFor="#" className="text-sm text-[#000] ">
                Zip code
              </label>
              <Input className="mt-2" placeholder="Accra" />
            </div>
          </div>
          <div className="w-full flex items-center gap-3 my-3">
            <input type="checkbox" />
            <span>Set as default shipping address</span>
          </div>
          <div className="w-full flex items-center gap-3 mt-6">
            <button
              onClick={() => setIsAddNewAddress(false)}
              className="w-full  p-2 text-sm rounded-md border border-[#eee]"
            >
              Cancel
            </button>
            <button className="w-full  p-2 text-sm rounded-md border border-[#eee] bg-green-500 hover:bg-green-600 transition-all ease-in delay-75 text-white">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewAddressModal;
