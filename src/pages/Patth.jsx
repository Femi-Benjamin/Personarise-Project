import React from 'react'
import { DropDownLayout } from '../layout'


const Patth = () => {
    return (
        <div className='bg-[#E4E4E4] h-screen'>
            <div className='flex justify-center items-center pt-[214px]'>
                <div className='md:w-[657px] sm:w-auto md:h-[376.06px] sm:h-auto border sm:px-5 border-[#7C7E80] rounded-[7.11231px] bg-[#FFFFFF] text-center items-center'>
                    <h1 className='font-mulish font-bold text-[28.4493px] leading-[36px] text-black pt-[84.46px] pb-[47.57px]'>Fill in your preferred career path</h1>

                    <div>
                        <DropDownLayout />
                    </div>

                    <button  className='w-[369.84px] h-[48.9px] bg-[#071D2E] rounded-[8px] text-white mb-9 mt-[57.57px]'>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Patth