import React from 'react'
import images from '../constants/images'

const ExploreDashboardCard = ({ image, text, title }) => {
  return (
    <div className="border border-[#CDD2D5] rounded-lg px-5 py-3 md:max-w-max flex flex-col md:w-auto w-full">
      <div className="my-3 flex justify-center">
        <img src={image} />
      </div>
      <div>
        <h3 className="text-base font-bold text-[#020A0F] mb-2">{title}</h3>
        <p className=" text-xs font-normal max-w-[220px]">{text}</p>
      </div>
    </div>
  )
}

export default ExploreDashboardCard
