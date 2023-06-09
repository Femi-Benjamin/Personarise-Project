import React, { useState, useEffect } from 'react'
import InternetReading from './InternetReading'
import InternetWatching from './InternetWatching'

const Internet = () => {
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
      {/* INTERNET */}
      <div className="mt-[44px]">
        <div
          onClick={openModal}
          className="w-[588px] h-[75px] bg-[#E4FEE3] rounded-[16px] font-mulish font-semibold text-[24px] leading-[30px] cursor-pointer"
        >
          <div className="flex px-[40px] justify-between items-center p-5 justify-center">
            <h1>1</h1>
            <h1>Internet</h1>
            <h1>1/6</h1>
          </div>
        </div>
      </div>

      {/* modal */}
      {isOpen && (
        <div
          id="modal-container"
          className="fixed inset-0 flex items-center justify-center z-50 font-mulish"
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute right-0 top-0 h-full w-[812px] px-[38px] bg-white shadow-lg overflow-y-auto">
            {/* Modal content goes here */}
            <h2 className="text-2xl pb-4 mt-[150px] text-[48px] leading-[60px] font-bold uppercase">
              Internet
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
                The Internet is a global network of computers connected to each
                other which communicate through a standardized set of protocols.
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

              {isReadingActive && <InternetReading />}
              {isWatchingActive && <InternetWatching />}
              {/* Buttons */}

              <h1 className="pb-5 text-[18px] leading-[20px] font-medium">
                Take a quiz to see how much you have learned about the internet
              </h1>

              <button className="bg-[#5668B2] w-[311px] h-[55px] rounded-[8px] text-center font-semibold text-[24px] leading-[30px] text-white">
                Test Skill
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Internet
