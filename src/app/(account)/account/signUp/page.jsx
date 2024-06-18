'use client'
import { useState } from 'react'
import Image from 'next/image'
import BgImage from '../../../../../public/images/loginBg.jpeg'

import { TextInput } from '@tremor/react'
import Link from 'next/link'

const SignUpPage = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone_number, setPhone_number] = useState('')
  const [password, setPassword] = useState('')
  const [country, setCountry] = useState('')
  const [state_city, setState_city] = useState('')
  const [zip_code, setZip_code] = useState('')
  const [house_address, setHouse_address] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [errorMessPass, setErrorMessPass] = useState('')
  const [isError, setIsError] = useState(false)
  const [passCheck, setPassCheck] = useState(false)

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
  const isValidPassword = (value) =>
    value.length >= 6 &&
    value.length <= 15 &&
    /[A-Z]/.test(value) &&
    /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value)

  const handleEmailBlur = (value) => {
    if (!validateEmail(value)) {
      setErrorMessage(`Enter a valid email address`)
      setIsError(true)
    } else {
      setErrorMessage(null)
      setIsError(false)
    }
  }
  const handlePasswordBlur = (value) => {
    if (!isValidPassword(value)) {
      setErrorMessPass(`Your password is not strong!`)
      setPassCheck(true)
    } else {
      setErrorMessPass(null)
      setPassCheck(false)
    }
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    const newUser = {
      full_name: fullName,
      email: email,
      phone_number: phone_number,
      password: password,
      country: country,
      state_city: state_city,
      zip_code: zip_code,
      house_address: house_address,
      is_business: false,
    }
    console
  }

  return (
    <div className="w-full h-screen flex justify-center items-center dark:bg-bg_dark_secondary bg-bg_secondary dark:bg-bg_dark_secondaryflex p-2">
      <div className="hidden md:block w-full h-full rounded-md">
        <div className="w-full h-full relative rounded-md">
          <Image
            src={BgImage}
            className="w-full h-full rounded-md"
            alt="loginBg"
          />
          <div className=" absolute top-0 left-0 right-0 bottom-0 bg-[#00000062] pt-5 px-5 rounded-md">
            <h1 className="text-2xl text-[#fff]">Welcome to Ordvel</h1>
          </div>
        </div>
      </div>
      <div className=" w-full md:w-1/2 flex justify-center items-center">
        <div className="w-full md:mx-8 mx-4">
          <div className="mb-4 mx-auto w-full">
            <h1 className="text-lg font-semibold ">Create Account</h1>
            <p className="text-xs text-gray-400">
              Your details are safe with us
            </p>
          </div>
          <form onSubmit={handleSignUp}>
            <div className="my-2 w-full">
              <label className="text-sm">Full name</label>
              <TextInput
                required
                placeholder="Enter your name"
                value={fullName}
                onValueChange={(value) => setFullName(value)}
              />
            </div>
            <div className="my-2 w-full">
              <label className="text-sm">Email</label>
              {errorMessage && (
                <p className="text-xs text-red-400">{errorMessage}</p>
              )}
              <TextInput
                type="email"
                required
                placeholder="Enter your email"
                error={isError}
                value={email}
                onBlur={(e) => handleEmailBlur(e.target.value)}
                onValueChange={(value) => setEmail(value)}
              />
            </div>
            <div className="my-2 w-full">
              <label className="text-sm ">Phone</label>
              <TextInput
                type="number"
                required
                placeholder="Enter your phone number"
                value={phone_number}
                onValueChange={(value) => setPhone_number(value)}
              />
            </div>
            <div className="my-2 w-full">
              <label className="text-sm ">Zip code</label>
              <TextInput
                type="number"
                required
                placeholder="Enter your zip code"
                value={zip_code}
                onValueChange={(value) => setZip_code(value)}
              />
            </div>
            <div className="my-2 w-full">
              <label className="text-sm ">Password</label>
              {errorMessPass && (
                <p className="text-xs text-red-400">{errorMessPass}</p>
              )}
              <TextInput
                type="password"
                required
                placeholder="Enter your name"
                value={password}
                error={passCheck}
                onBlur={(e) => handlePasswordBlur(e.target.value)}
                onValueChange={(value) => setPassword(value)}
              />
            </div>
            <div className="my-2 w-full">
              <label className="text-sm ">Country</label>
              <TextInput
                type="text"
                required
                placeholder="Enter your country"
                value={country}
                onValueChange={(value) => setCountry(value)}
              />
            </div>
            <div className="my-2 w-full">
              <label className="text-sm ">State/city</label>
              <TextInput
                type="text"
                required
                placeholder="Enter your state/city"
                value={state_city}
                onValueChange={(value) => setState_city(value)}
              />
            </div>
            <button className="w-full p-2 bg-green-600 text-[#fff] text-sm rounded-md mt-2">
              Submit
            </button>
          </form>
          <p className="mt-4 text-xs text-gray-400 text-center">
            Already have an account?{' '}
            <Link href="/account/login" className="text-red-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
