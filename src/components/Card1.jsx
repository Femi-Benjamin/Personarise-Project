import React from 'react'
import images from '../constants/images'

const Card1 = () => {
  return (
    <div className='w-auto h-auto bg-[#DDE1F0]'>
      <div className='md:px-[40px] px-[17px] md:pt-[45px] pt-[19.13px] font-mulish'>
        <div>
          <h1 className='font-medium md:text-[18px] text-[15.65157px] md:leading-[32px] leading-[19px] md:pb-[85.78px] pb-[36.38px]'>“I found my dream internship through <br /> this platform and gained valuable <br /> experience that helped me land a job <br /> after following their roadmap.”</h1>
        </div>
        <div>
          <div className="flex md:gap-[16px] gap-[6.8px] pb-7 items-center">
            <img src={images.picture2} alt="circle" />
            <div>
              <h3 className='font-bold md:text-[20px] text-[15.80139px] md:leading-[26px] leading-[16px] text-[#121217]'>Mary Sokoh</h3>
              <h4 className='font-normal md:text-[15px] text-[11.95122px] md:leading-[22px] leading-[18px] text-[#566068]'>Intern @Spotify</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card1