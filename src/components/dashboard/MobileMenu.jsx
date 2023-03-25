import React from 'react'
import { NavLink } from 'react-router-dom'
import icons from '../../constants/icons'

const MobileMenu = () => {
  const links = [
    {
      name: 'Home',
      route: 'home',
      icon: icons.home,
      index: true,
    },
    {
      name: 'Roadmap',
      route: 'roadmap',
      icon: icons.roadmap,
      index: true,
    },
    {
      name: 'Jobs',
      route: 'jobs',
      icon: icons.jobs,
      index: true,
    },
    {
      name: 'Messages',
      route: 'messages',
      icon: icons.message,
      index: true,
    },
    {
      name: 'Activity',
      route: 'activity',
      icon: icons.notification2,
      index: true,
    },
  ]
  return (
    <div className="w-full px-3 py-4 shadow-[0px_4px_8px_rgba(0,0,0,0.16)]">
      <div className="flex justify-evenly">
        {links.map((item) => (
          <NavLink
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
