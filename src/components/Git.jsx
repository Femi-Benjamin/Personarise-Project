import React, { useState } from 'react'
import GitReading from './GitReading'
import GitWatching from './GitWatching'

const Git = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }
  /////////////
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

  return (
    <div>
      {/* GIT */}
      <div onClick={openModal} className="mt-[44px]">
        <div className="md:w-[588px] w-auto h-[75px] bg-[#E4FEE3] rounded-[16px] font-mulish font-semibold text-[24px] leading-[30px] cursor-pointer">
          <div className="flex px-[40px] justify-between items-center p-5 justify-center">
            <h1>6</h1>
            <h1>GIT</h1>
            <h1>0/6</h1>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 font-mulish">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute right-0 md:top-0 top-5 h-full md:rounded-tl-[0px] rounded-tl-[50px] md:rounded-tr-[0px] rounded-tr-[40px] md:w-[812px]  w-auto px-[38px] bg-white shadow-lg overflow-y-auto">
            {/* Modal content goes here */}
            <h2 className="text-2xl pb-4 mt-[150px] text-[48px] leading-[60px] font-bold">
              GIT
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
                Git is a distributed version control system that tracks changes
                in any set of computer files, usually used for coordinating work
                among programmers collaboratively developing source code during
                software development. Its goals include speed, data integrity,
                and support for distributed, non-linear workflows.
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
              {isReadingActive && <GitReading />} {/* Be Mindful */}
              {isWatchingActive && <GitWatching />} {/* Be Mindful */}
              {/* Buttons */}
              <h1 className="pb-5 text-[18px] leading-[20px] font-medium">
                Upload the link to your work below
              </h1>
              <div className=" flex items-center mb-7 gap-6">
                <input
                  className="border w-[437px] h-[55px] rounded-[8px] text-center font-semibold text-[24px] leading-[30px]"
                  type="link"
                  placeholder="Upload Link"
                />

                <input
                  className="bg-[#5668B2] md:w-[211px] w-auto h-[55px] rounded-[8px] text-center font-semibold text-[24px] leading-[30px] text-white cursor-pointer"
                  type="submit"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Git
