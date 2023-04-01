import React, { useState } from 'react'
import images from '../constants/images'
import JobCard from '../components/JobCard'
import { jobs } from '../constants/data'
import Button from '../shared/Button'
import icons from '../constants/icons'
import { SearchBox } from '../components'

const Jobs = () => {
  const [active, setActive] = useState('')
  const filter = [
    'Location',
    'Company',
    'Salary',
    'Job Title',
    'Culture',
    'Experience Level',
  ]
  const [value, setValue] = useState('')

  const filteredJobs = jobs.filter((item) => {
    if (value === '') {
      return item
    } else if (
      item.title.toLowerCase().includes(value.toLowerCase()) ||
      item.company.toLowerCase().includes(value.toLowerCase()) ||
      item.location.toLowerCase().includes(value.toLowerCase())
    ) {
      return item
    }
  })

  return (
    <div className="">
      <SearchBox
        value={value}
        setValue={setValue}
        filterItems={filter}
        active={active}
        setActive={setActive}
      />
      <div className="bg-[#F7F7F8] rounded-2xl pt-[48px] p-6">
        <h1 className="font-mulish font-semibold text-[20px] leading-[25px] text-[#05131F] mb-[28px]">
          {value ? value.toUpperCase() : 'YOUR TOP JOB MATCHES'}
        </h1>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:justify-items-start justify-items-center gap-10 ">
          {filteredJobs && filteredJobs.map((data) => <JobCard data={data} />)}

          {filteredJobs.length === 0 && (
            <p className="font-mulish font-semibold text-[20px] leading-[25px] text-[#05131F] mb-[28px]">
              No Jobs found sorry :(
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Jobs
