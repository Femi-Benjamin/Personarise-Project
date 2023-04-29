import React from 'react'
import images from '../constants/images'

const Card2 = () => {
  return (
    <div className='w-auto h-auto border'>
    <div className='md:px-[40px] px-[17px] md:pt-[45px] pt-[19.13px] font-mulish'>
      <div>
        <h1 className='font-medium md:text-[18px] text-[15.65157px] md:leading-[32px] leading-[19px] md:pb-[65.78px] pb-[36.38px]'>“Our company was struggling to find <br /> qualified interns before we <br /> discovered this platform. Now we <br /> have a steady steam of talented <br /> candidates to choose from.”</h1>
      </div>
      <div>
        <div className="flex md:gap-[16px] gap-[6.8px] pb-7 items-center">
          <img src={images.picture1} alt="circle" />
          <div>
            <h3 className='font-bold md:text-[20px] text-[15.80139px] md:leading-[26px] leading-[16px] text-[#121217]'>Femi Benjamin</h3>
            <h4 className='font-normal md:text-[15px] text-[11.95122px] md:leading-[22px] leading-[18px] text-[#566068]'>Founder @Samsung</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card2