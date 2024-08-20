'use client'
import { useState } from 'react'
import BgImage from '../../../../../public/images/loginBg.jpeg'
import { useRouter } from 'next/navigation';
import { TextInput } from '@tremor/react'
import Link from 'next/link'
import { MdEmail } from 'react-icons/md'
import Image from 'next/image'
import Logo from '../../../../../public/image/logo.jpg'
import { RiLockPasswordFill } from 'react-icons/ri'
import { FiEye } from 'react-icons/fi'
import { FiEyeOff } from 'react-icons/fi'
import {  createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/app/config'

const SignUpPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [errorMessPass, setErrorMessPass] = useState('')
  const [isError, setIsError] = useState('')
  const [formCheck, setFormCheck] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter();
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
      setErrorMessage('')
    }
  }
  const handlePasswordBlur = (value) => {
    if (!isValidPassword(value)) {
      setErrorMessPass(`Your password is not strong!`)
    } else {
      setErrorMessPass('')
    }
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      if (
        email.length === 0 ||
        password.length === 0 ||
        confirmPassword.length === 0
      ) {
        setFormCheck('Please fill all the fields')
      } else if (!validateEmail(email)) {
        setFormCheck('Please enter a valid email address')
      } else if (!isValidPassword(password)) {
        setFormCheck('Your password is not strong')
      } else if (password !== confirmPassword) {
        setFormCheck('Password dose not match')
      } else {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user
            setIsLoading(false)
            router.replace('/')
          })
          .catch((error) => {
            setIsLoading(false)
            const errorCode = error.code
            const errorMessage = error.message
            // console.log(errorCode, errorMessage)
          })
      }
    }catch (error) {
      setIsLoading(false)
      setFormCheck(error.message)
    }
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#fff] p-2">
      <div className="w-full h-screen flex justify-center items-center relative">
        <div className="w-auto h-auto absolute top-3 left-3">
          <div className="w-full flex items-center gap-2">
            <div className="w-[40px] h-[40px] object-cover">
              <Image src={Logo} alt="logo" width={100} height={100} />
            </div>
            <div className="flex flex-col border-l px-2">
              <p className="text-lg font-bold text-blue-500">
                Wesley Grammar Senior High School
              </p>
              <p className="text-sm text-blue-300">Chemistry Department</p>
            </div>
          </div>
        </div>

        <div className="w-[400px] h-auto p-10 bg-[#fff] shadow rounded-lg p-3">
          <div className="w-full flex items-center justify-center">
            <div className="w-[50px] h-[50px] rounded-full shadow-lg">
              <Image
                src={Logo}
                alt="logo"
                width={100}
                height={100}
                className="rounded-full w-full h-full"
              />
            </div>
          </div>
          {formCheck && (
            <p className="text-red-500 text-xs text-center mt-3">{formCheck}</p>
          )}
          <div className="flex flex-col gap-5 mt-10 mb-5">
            <div className="w-full h-auto rounded-lg shadow bg-[#fff] flex gap-2 items-center px-2 py-1">
              <MdEmail className="text-sm text-gray-400" />
              <input
                type="text"
                className="w-full h-full px-3 py-2 text-sm border-none outline-none bg-[#fff]"
                placeholder="Admin email"
                value={email}
                onBlur={(e) => handleEmailBlur(e.target.value)}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {errorMessage && (
              <p className="text-xs text-red-500">{errorMessage}</p>
            )}
            <div className="w-full h-auto rounded-lg shadow bg-[#fff] flex items-center gap-2 px-2 py-1">
              <RiLockPasswordFill className="text-sm text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full h-full px-3 py-2 text-sm border-none ring-none outline-none bg-[#fff]"
                placeholder="Enter Password"
                value={password}
                onBlur={(e) => handlePasswordBlur(e.target.value)}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <FiEye
                  className="text-sm text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <FiEyeOff
                  className="text-sm text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
            {errorMessPass && (
              <p className="text-xs text-red-500">{errorMessPass}</p>
            )}
            <div className="w-full h-auto rounded-lg shadow bg-[#fff] flex items-center gap-2 px-2 py-1">
              <RiLockPasswordFill className="text-sm text-gray-400" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                className="w-full h-full px-3 py-2 text-sm border-none ring-none outline-none bg-[#fff]"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {showConfirmPassword ? (
                <FiEye
                  className="text-sm text-gray-400 cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              ) : (
                <FiEyeOff
                  className="text-sm text-gray-400 cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              )}
            </div>
          </div>

          <Link href="/">
            <p className="text-xs text-blue-300 text-end">Sign In</p>
          </Link>
          <div className="w-full flex justify-center items-center mt-10">
            <button
              onClick={handleSignUp}
              className="w-[100px] h-10 rounded-lg shadow bg-blue-500 text-white text-sm font-bold"
            >
              {isLoading ? "Loading.." : "Sigin Up"}
              
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
