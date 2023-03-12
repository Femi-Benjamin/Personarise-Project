import React from 'react'
import images from '../constants/images'

const Loader = () => {
  return (
    <div className="bg-slate-100 h-full flex justify-center items-center">
      <div className="w-[60%] h-[417.32px] bg-white rounded-[4.8037px] items-center flex justify-center">
        <img className="animate-spin" src={images.loader} alt="" />
      </div>
    </div>
  )
}

export default Loader
