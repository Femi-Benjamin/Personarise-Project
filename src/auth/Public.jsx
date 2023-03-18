import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../components'

const Public = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
export default Public
