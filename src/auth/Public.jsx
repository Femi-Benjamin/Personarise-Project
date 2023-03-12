import { Outlet } from 'react-router-dom'
import { HomeBar } from '../components'

const Public = () => {
  return (
    <>
      <HomeBar />
      <Outlet />
    </>
  )
}
export default Public
