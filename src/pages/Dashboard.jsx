import React from 'react'
import { Home } from '../components'
import DashboardModal from '../components/dashboard/Modal'

const Dashboard = () => {
  return (
    <div className=" m-9 md:pb-3 pb-32">
      <DashboardModal />
      <Home />
    </div>
  )
}

export default Dashboard
