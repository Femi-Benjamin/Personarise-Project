import React from 'react'
import { DropDownLayout } from '../layout'
import DropDown from './DropDown'


const Patth = () => {
    return (
        <div className='bg-[#E4E4E4] h-full'>
            <div className='flex justify-center items-center pt-[214px]'>
                <div className='w-[657px] h-[376.06px] border border-[#7C7E80] rounded-[7.11231px] bg-[#FFFFFF] text-center items-center'>
                    <h1 className='font-mulish font-bold text-[28.4493px] leading-[36px] text-black pt-[84.46px] pb-[47.57px]'>Fill in your preferred career path</h1>

                    <div>
                        <DropDownLayout />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Patth