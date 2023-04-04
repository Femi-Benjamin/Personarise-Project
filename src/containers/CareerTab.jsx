import React, { useState } from 'react'
import { CareerDescriptionCard } from '../components'
import icons from '../constants/icons'

const CareerTab = () => {
  const tabItems = [
    { text: 'View  Career description'},
    { text: 'Change career path' },
  ]
  const [active, setActive] = useState(tabItems[0].text)
  return (
    <div>
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
    </div>
  )
}

export default CareerTab
