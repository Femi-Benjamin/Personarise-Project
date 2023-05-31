import React, { useState } from 'react'

const Authen = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div>
      {/* Authentication */}
      <div className="mt-[44px]">
        <div
          onClick={openModal}
          className="w-[588px] h-[75px] bg-[#E4FEE3] rounded-[16px] font-mulish font-semibold text-[24px] leading-[30px] cursor-pointer"
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
          <div className="absolute right-0 top-0 h-full w-[812px] px-[38px] bg-white shadow-lg overflow-y-auto ">
            {/* Modal content goes here */}
            <h2 className="text-2xl pb-4 mt-[150px] text-[45px] leading-[60px] font-bold uppercase">
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
                <ul className='list-disc pl-[38px]'>
                  <li>Basic Authentication</li>
                  <li>Session Based Authentication</li>
                  <li> Token Based Authentication</li>
                  <li>JWT Authentication</li>
                  <li>OAuth</li>
                  <li>SSO</li>
                </ul>
                You don’t
                necessarily need to learn all of these, how to implement and the
                ins and outs from the get go. But it’s important to know what
                they are and how they work. This will help you make better
                decisions when choosing an authentication strategy for your
                application.
              </h1>

              <div className="pb-[42px] font-mulish">
                <button className="w-[150px] h-[50px] bg-[#5668B2] rounded-tl-[8px] rounded-bl-[8px] font-semibold text-[24px] leading-[30px] text-white">
                  Reading
                </button>
                <button className="w-[150px] h-[50px] border rounded-tr-[8px] rounded-br-[8px] font-semibold text-[24px] leading-[30px]">
                  Watching
                </button>
              </div>

              <h1 className="pb-[54px] font-mulish font-normal text-[24px] leading-[30px]">
                Visit the following resources to learn more:
              </h1>

              <ul className="list-disc pb-[146px] pl-[38px] text-[20px]">
                <li className="cursor-pointer">
                  <a
                    className="hover:bg-blue-100 hover:underline"
                    href=""
                    target="_blank"
                  >
                    Basic Authentication
                  </a>
                </li>

                <li className="cursor-pointer ">
                  <a
                    className="hover:bg-blue-100 hover:underline"
                    href=""
                    target="_blank"
                  >
                   Session Based Authentication
                  </a>
                </li>

                <li className="cursor-pointer ">
                  <a
                    className="hover:bg-blue-100 hover:underline"
                    href=""
                    target="_blank"
                  >
                Token Based Authentication
                  </a>
                </li>

                <li className="cursor-pointer ">
                  <a
                    className="hover:bg-blue-100 hover:underline"
                    href=""
                    target="_blank"
                  >
                    JWT Authentication
                  </a>
                </li>

                <li className="cursor-pointer ">
                  <a
                    className="hover:bg-blue-100 hover:underline"
                    href=""
                    target="_blank"
                  >
                   OAuth
                  </a>
                </li>

                <li className="cursor-pointer ">
                  <a
                    className="hover:bg-blue-100 hover:underline"
                    href=""
                    target="_blank"
                  >
                    OWASP Cheatsheets
                  </a>
                </li>

                <li className="cursor-pointer ">
                  <a
                    className="hover:bg-blue-100 hover:underline"
                    href=""
                    target="_blank"
                  >
                    SSO - Single Sign On
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Authen
