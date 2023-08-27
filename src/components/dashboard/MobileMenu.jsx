import React from 'react'
import { NavLink } from 'react-router-dom'
import icons from '../../constants/icons'
import { links } from '../../constants/data'

const MobileMenu = () => {
  return (
    <div className="w-full px-3 py-4 shadow-[0px_4px_8px_rgba(0,0,0,0.16)] bg-white">
      <div className="flex justify-evenly">
        {links.map((item) => (
          <NavLink
          key={item.route}
            to={`/dashboard/${item.route}`}
            className={({ isActive }) => {
              return (
                'flex flex-col items-center  px-4 py-2 my-4 h-16 justify-between ' +
                (isActive && 'bg-[#D2FCCF] rounded-lg ')
              )
            }}
          >
            <img className=" w-8" src={item.icon} />
            <p className=" text-xs">{item.name}</p>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default MobileMenu
