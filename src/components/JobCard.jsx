import React from 'react'
import images from '../constants/images'
import Button from '../shared/Button'
import ExploreDashboardCard from './ExploreDashboardCard'

const JobCard = ({ data }) => {
  return (
    <div className="bg-white rounded-lg border-[0.5px] border-[#CDD2D5] px-4 py-6 max-w-[295px]">
      <div>
        <div className="flex justify-between">
          <div>
            <img src={images.job} alt="job" />
            <div className="my-2">
              <h3 className=" font-semibold text-xl leading-7 mt-1 max-w-[160px]">
                {data.title}
              </h3>
              <p className=" text-base mt-1">{data.company}</p>
              <p className=" text-xs mt-1">
                {data.location} | {data.position}
              </p>
              <p className="text-base font-semibold mt-1">{data.posted}</p>
            </div>
          </div>
          <div>
            <p className="">{data.applicants} Applicants</p>
          </div>
        </div>
        <div className="flex gap-6 mt-6">
          <div className="w-[50%]">
            <Button outline noradius>
              Save
            </Button>
          </div>
          <div className="w-[50%]">
            <Button outline noradius>
              View more
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobCard
