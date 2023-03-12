import React from 'react'
import icons from '../../constants/icons'

const Sidebar = () => {
  return (
    <div className="max-w-[384px] shadow-[4px_0px_8px_rgba(0,0,0,0.16)] p-9">
        <div>
          <h1> LOGO</h1>
          <span><img src={icons.reset}/></span>
        </div>
    </div>
  )
}

export default Sidebar
