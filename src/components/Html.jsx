import React, { useState } from 'react'

const Html = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <div onClick={openModal} className="mt-[44px]">
        <div className="md:w-[588px] w-auto h-[75px] bg-[#E4FEE3] rounded-[16px] font-mulish font-semibold text-[24px] leading-[30px] cursor-pointer">
          <div className="flex px-[40px] justify-between items-center p-5 justify-center">
            <h1>2</h1>
            <h1>HTML</h1>
            <h1>0/6</h1>
          </div>
        </div>
      </div>

      {/* modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 font-mulish">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute right-0 md:top-0 top-5 h-full md:rounded-tl-[0px] rounded-tl-[50px] md:rounded-tr-[0px] rounded-tr-[40px] md:w-[812px]  w-auto px-[38px] bg-white shadow-lg overflow-y-auto">
            {/* Modal content goes here */}
            <h2 className="text-2xl pb-4 mt-[150px] text-[48px] leading-[60px] font-bold">
              HTML
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
                The HyperText Markup Language or HTML is the standard markup
                language for documents designed to be displayed in a web
                browser. It is often assisted by technologies such as Cascading
                Style Sheets and scripting languages such as JavaScript.
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
                    HTML Explained
                  </a>
                </li>

                <li className="cursor-pointer">
                  <a
                    className="hover:bg-blue-100 hover:underline"
                    href=""
                    target="_blank"
                  >
                    How Does the HTML Work?
                  </a>
                </li>

                <li className="cursor-pointer">
                  <a
                    className="hover:bg-blue-100 hover:underline"
                    href=""
                    target="_blank"
                  >
                    How Does the HTML Work? MDN Docs
                  </a>
                </li>

                <li className="cursor-pointer">
                  <a
                    className="hover:bg-blue-100 hover:underline"
                    href=""
                    target="_blank"
                  >
                    Introduction to HTML
                  </a>
                </li>

                <li className="cursor-pointer">
                  <a
                    className="hover:bg-blue-100 hover:underline"
                    href=""
                    target="_blank"
                  >
                    How does the HTML work?
                  </a>
                </li>

                <li className="cursor-pointer">
                  <a
                    className="hover:bg-blue-100 hover:underline"
                    href=""
                    target="_blank"
                  >
                    How to work with HTML in 5 Minutes
                  </a>
                </li>
              </ul>

              <h1 className="pb-5 text-[18px] leading-[20px] font-medium">
                Take a quiz to see how you much you have learnt about the
                internet
              </h1>

              <button className="bg-[#5668B2] w-[311px] h-[55px] rounded-[8px] text-center font-semibold text-[24px] leading-[30px] text-white mb-7">
                Test Skill
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Html
