import React from 'react'
import images from '../constants/images'
import Button from '../shared/Button'
import ExploreDashboardCard from './ExploreDashboardCard'

const JobCard = ({ data }) => {
  return (
    <div className='flex flex-wrap justify-between md:px-14 px-[18px]'>
      <ExploreDashboardCard
        image={images.Rectangle24}
        title="Web Designer-UI/UX Design"
        text="King’s Crest Global"
        
      />
      <ExploreDashboardCard
        image={images.Rectangle24}
        title="Web Designer-UI/UX Design"
        text="King’s Crest Global"
      />
      <ExploreDashboardCard
        image={images.Rectangle24}
        title="Web Designer-UI/UX Design"
        text="King’s Crest Global"
      />
    </div>
  )
}

export default JobCard
