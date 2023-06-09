import React, { useState } from 'react'
import icons from '../constants/icons'
import Sidebar from './dashboard/Sidebar'
import Authen from '../components/Authen'

const Advanced = () => {
  const tabItems = [
    { text: 'View  Career description' },
    { text: 'Change career path' },
  ]
  const [active, setActive] = useState(tabItems[0].text)

  {
    /* /////////// */
  }
  const handleClick = () => {
    console.log('Button clicked!')
  }

  return (
    <div className="flex relative">
      <div className="hidden md:block h-screen">
        <Sidebar />
      </div>

      <div className="my-10 m-10">
        <h1 className="md:font-medium lg:text-5xl md:text-4xl text-3xl leading-10 mb-7">
          Welcome, Mary!
        </h1>
        <div className="my-2">
          <div className="flex md:flex-row flex-col flex-wrap md:items-center md:gap-4">
            <p className="lg:text-2xl md:text-xl text-base md:font-bold leading-8">
              Your career path status
            </p>
            <div>
              <span className="md:p-3 p-2 bg-[#0DA8FF] text-white uppercase text-base rounded-lg ">
                mobile software engineer
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          {tabItems.map((item, index) => (
            <div
              key={index}
              className={`text-[#304351] text-sm md:mr-6 mr-4 py-2 cursor-pointer ${
                active === item.text ? 'border-b border-[#111010]' : ''
              }`}
              onClick={() => setActive(item.text)}
            >
              {item.text}
            </div>
          ))}
          <span>
            <img src={icons.infoIcon} />
          </span>
        </div>
        <Authen />
      </div>
    </div>
  )
}

export default Advanced
