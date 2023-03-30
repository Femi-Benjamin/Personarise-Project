import React from 'react'
import images from '../constants/images'
import JobCard from '../components/JobCard'

const Jobs = () => {
  return (
    <div className="mt-[57px] md:mr-[72px] m-[32px]">
      <div className="w-auto h-auto bg-[#F7F7F8] md:ml-[16px] sm:ml-[32px] mb-[28px]">
        {/* ////////////////// */}
        <form class="flex items-center w-[100%] pt-[20px] md:ml-[22px] ml-[8px]">
          <div class="relative mr-4">
            <input
              type="text"
              class="py-2 px-4 md:pl-[90px] pl-2 placeholder:text-[#979797] placeholder:text-[20px] placeholder:leading-[25px] focus:outline-none focus:shadow-outline md:w-[705px] sm:w-auto md:h-[64px] border border-[#979797] bg-white rounded-[8px] outline-none mb-[19px]"
              placeholder="Search Jobs"
            />{' '}
            {/* PLACEHOLDER */}
            <div class="absolute md:top-0 top-2 left-0 md:mt-5 ml-[52px] hidden md:block">
              {' '}
              {/* SVG STYLING */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.1333 24L13.7333 15.6C13.0667 16.1333 12.3 16.5556 11.4333 16.8667C10.5667 17.1778 9.64444 17.3333 8.66667 17.3333C6.24444 17.3333 4.19467 16.4942 2.51733 14.816C0.84 13.1378 0.000888889 11.088 0 8.66667C0 6.24444 0.839111 4.19467 2.51733 2.51733C4.19556 0.84 6.24533 0.000888889 8.66667 0C11.0889 0 13.1387 0.839111 14.816 2.51733C16.4933 4.19556 17.3324 6.24533 17.3333 8.66667C17.3333 9.64444 17.1778 10.5667 16.8667 11.4333C16.5556 12.3 16.1333 13.0667 15.6 13.7333L24 22.1333L22.1333 24ZM8.66667 14.6667C10.3333 14.6667 11.7502 14.0831 12.9173 12.916C14.0844 11.7489 14.6676 10.3324 14.6667 8.66667C14.6667 7 14.0831 5.58311 12.916 4.416C11.7489 3.24889 10.3324 2.66578 8.66667 2.66667C7 2.66667 5.58311 3.25022 4.416 4.41733C3.24889 5.58444 2.66578 7.00089 2.66667 8.66667C2.66667 10.3333 3.25022 11.7502 4.41733 12.9173C5.58444 14.0844 7.00089 14.6676 8.66667 14.6667Z"
                  fill="#979797"
                />
              </svg>
            </div>
          </div>
          {/* BUTTON LARGE SCREEN */}
          <button
            type="submit"
            class="md:h-[64px] md:w-[203px] border border-[#979797] bg-white py-2 px-4 rounded-[8px] font-mulish font-bold text-[#040F17] text-[20px] leading-[25px] mb-[19px] hidden md:block"
          >
            Recommend
          </button>
          {/* BUTTON SMALL SCREEN */}
          <button
            type="submit"
            className="w-[70px] h-[42px] border border-[#979797] bg-white px-5 rounded-[8px] mb-[19px] mr-4 md:hidden"
          >
            <img src={images.variant} alt="" />
          </button>
        </form>
        {/* ////////////////////// */}
        <div className='ml-[22px] flex flex-wrap gap-[16px]'>
          <button className='w-[124px] h-[45px] rounded-[8px] border bg-white font-mulish font-bold text-[20px] leading-[25px] mb-4'>Location</button>
          <button className='w-[124px] h-[45px] rounded-[8px] border bg-white font-mulish font-bold text-[20px] leading-[25px]'>Company</button>
          <button className='w-[124px] h-[45px] rounded-[8px] border bg-white font-mulish font-bold text-[20px] leading-[25px]'>Salary</button>
          <button className='w-[124px] h-[45px] rounded-[8px] border bg-white font-mulish font-bold text-[20px] leading-[25px]'>Job Title</button>
          <button className='w-[124px] h-[45px] rounded-[8px] border bg-white font-mulish font-bold text-[20px] leading-[25px]'>Culture</button>
          <button className='w-auto h-[45px] rounded-[8px] border bg-white font-mulish font-bold text-[20px] leading-[25px] px-3 mb-4'>Experience Level</button>
        </div>
      </div>
          {/* //////////////////////////////// */}
      <div className='w-auto md:h-[950px] h-auto bg-[#F7F7F8] md:ml-[16px] sm:ml-[32px]'>
        <div className='pt-[48px] pl-[14px]'>
          <h1 className='font-mulish font-semibold text-[20px] leading-[25px] text-[#05131F] mb-[28px]'>YOUR TOP JOB MATCHES</h1>
          <div className=''>
            <JobCard/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobs