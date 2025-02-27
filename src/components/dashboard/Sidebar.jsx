import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import icons from '../../constants/icons'
import images from '../../constants/images'
import { links } from '../../constants/data'

const Sidebar = () => {
  return (
    <div
      className=" shadow-[4px_0px_8px_rgba(0,0,0,0.16)] p-9 hidden md:block h-full w-full"
      id="sidebar"
    >
      <div className=" flex justify-between items-center border-b pb-5 mb-7">
        <Link to="/dashboard">
          <img src={images.Personarise} alt="logo" />
        </Link>
        <span className="flex gap-5">
          <img className="cursor-pointer" src={icons.settings} />{' '}
          <img className="cursor-pointer" src={icons.notification} alt="" />
        </span>
      </div>
      <div>
        {links.map((item) => (
          <NavLink
            index
            to={`/dashboard/${item.route}`}
            className={({ isActive }) => {
              return (
                'flex items-center gap-4 px-4 py-2 my-4 h-16' +
                (!isActive
                  ? ' hover:bg-[#D2FCCF] '
                  : ' bg-[#D2FCCF] rounded-lg')
              )
            }}
          >
            <img src={item.icon} />
            <p className=" text-xl leading-6 font-medium text-[#040F17]">
              {item.name}
            </p>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
