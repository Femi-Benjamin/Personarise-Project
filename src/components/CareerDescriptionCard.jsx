import React from 'react'
import { cardItem } from '../constants/data'

const Card = ({ name, text, icon }) => (
  <div className="border border-[#CDD2D5] rounded-lg px-5 py-7 md:max-w-max md:w-auto w-full">
    <div className="flex items-center mb-3 gap-2">
      <img src={icon} />
      <h3 className="text-[#020A0F] text-base font-bold ">{name}</h3>
    </div>
    <p className="text-[#1A1A1A] font-normal text-xs max-w-[220px] mb-5">
      {text}
    </p>
  </div>
)

const CareerDescriptionCard = () => {
  return (
    <div className="flex gap-5 my-8 md:flex-row flex-col">
      {cardItem.map((item) => (
        <Card name={item.name} text={item.text} icon={item.icon} />
      ))}
    </div>
  )
}

export default CareerDescriptionCard
