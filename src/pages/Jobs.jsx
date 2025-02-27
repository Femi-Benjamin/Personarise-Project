import React, { useEffect, useState } from 'react'
import JobCard from '../components/JobCard'
import { jobs } from '../constants/data'
import { SearchBox } from '../components'
import { Pagination } from '../components'

const Jobs = () => {
  const [active, setActive] = useState('')
  const filter = [
    { name: 'Location', value: 'location' },
    { name: 'Company', value: 'company' },
    { name: 'Salary', value: 'salary' },
    { name: 'Job Title', value: 'title' },
    { name: 'Culture', value: 'culture' },
    { name: 'Experience Level', value: 'experience' },
  ]
  const [value, setValue] = useState('')

  const filteredJobs = jobs.filter((item) => {
    const lowerCaseValue = value.toLowerCase()
    if (!value) {
      return true
    }
    const itemKeys = Object.keys(item)
    return active
      ? itemKeys.includes(active) &&
          item[active].toLowerCase().includes(lowerCaseValue)
      : item.title.toLowerCase().includes(value.toLowerCase()) ||
          item.company.toLowerCase().includes(value.toLowerCase()) ||
          item.location.toLowerCase().includes(value.toLowerCase())
  })

  const jobsPerPage = 9
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage)

  const indexOfLastJob = currentPage * jobsPerPage
  const indexOfFirstJob = indexOfLastJob - jobsPerPage
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob)

  return (
    <div className="">
      <SearchBox
        value={value}
        setValue={setValue}
        filterItems={filter}
        active={active}
        setActive={setActive}
        jobs={jobs}
        setCurrentPage={setCurrentPage}
      />
      <div className="bg-[#F7F7F8] rounded-2xl pt-[48px] p-6">
        <h1 className="font-mulish font-semibold text-[20px] leading-[25px] text-[#05131F] mb-[28px]">
          {value ? value.toUpperCase() : 'YOUR TOP JOB MATCHES'}
        </h1>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:justify-items-start justify-items-center gap-10 ">
          {/* {filteredJobs &&
            filteredJobs.map((data) => <JobCard key={data.id} data={data} />)} */}

          {currentJobs.length > 0 ? (
            currentJobs.map((data) => <JobCard key={data.id} data={data} />)
          ) : (
            <p className="font-mulish font-semibold text-[20px] leading-[25px] text-[#05131F] mb-[28px]">
              No jobs found sorry :(
            </p>
          )}
        </div>
        <Pagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  )
}

export default Jobs
