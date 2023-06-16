import React, { useState } from 'react'
import AdvancedReading from './AdvancedReading'
import AdvancedWatching from './AdvancedWatching'

const Authen = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }
  ////////////
  const [isReadingActive, setIsReadingActive] = useState(true)
  const [isWatchingActive, setIsWatchingActive] = useState(false)

  const activateReading = () => {
    setIsReadingActive(true)
    setIsWatchingActive(false)
  }

  const activateWatching = () => {
    setIsReadingActive(false)
    setIsWatchingActive(true)
  }
  ///////////

  return (
    <div>
      {/* Authentication */}
      <div className="mt-[44px]">
        <div
          onClick={openModal}
          className="md:w-[588px] w-auto h-[75px] bg-[#E4FEE3] rounded-[16px] font-mulish font-semibold md:text-[24px] text-[14px] leading-[30px] cursor-pointer"
        >
          <div className="flex px-[40px] justify-between items-center p-5 justify-center">
            <h1>1</h1>
            <h1>Authentication Strategies</h1>
            <h1>0/6</h1>
          </div>
        </div>
      </div>

      {/* modal */}

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 font-mulish">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute right-0 md:top-0 top-5 h-full md:rounded-tl-[0px] rounded-tl-[60px] md:rounded-tr-[0px] rounded-tr-[40px] md:w-[812px] w-[428px] px-[38px] bg-white shadow-lg overflow-y-auto">
            {/* Modal content goes here */}
            <h2 className="text-2xl pb-4 mt-[150px] md:text-[45px] text-[32px] leading-[60px] font-bold uppercase">
              Authentication Strategies
            </h2>

            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/*  */}
            <div>
              <h1 className="font-mulish font-normal text-[24px] leading-[30px] text-[#304351] pb-[50px]">
                Authentication strategies are methods or techniques used to
                verify the identity of a user or system in order to grant access
                to a protected resource. There are several different
                authentication strategies that can be used, including:
                <ul className="list-disc pl-[38px]">
                  <li>Basic Authentication</li>
                  <li>Session Based Authentication</li>
                  <li> Token Based Authentication</li>
                  <li>JWT Authentication</li>
                  <li>OAuth</li>
                  <li>SSO</li>
                </ul>
                You don’t necessarily need to learn all of these, how to
                implement and the ins and outs from the get go. But it’s
                important to know what they are and how they work. This will
                help you make better decisions when choosing an authentication
                strategy for your application.
              </h1>

              {/* Buttons */}
              <div className="pb-[42px] font-mulish">
                <button
                  className={`w-[150px] h-[50px] bg-[#5668B2] rounded-tl-[8px] rounded-bl-[8px] font-semibold text-[24px] leading-[30px] text-white ${
                    isReadingActive ? '' : 'opacity-50'
                  }`}
                  onClick={activateReading}
                >
                  Reading
                </button>
                <button
                  className={`w-[150px] h-[50px] border rounded-tr-[8px] rounded-br-[8px] font-semibold text-[24px] leading-[30px] ${
                    isWatchingActive ? '' : 'opacity-50'
                  }`}
                  onClick={activateWatching}
                >
                  Watching
                </button>
              </div>

              {isReadingActive && <AdvancedReading />}
              {isWatchingActive && <AdvancedWatching />}
              {/* Buttons */}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Authen
