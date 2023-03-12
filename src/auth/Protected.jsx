import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../redux/users/actions/userActions'
import { toast } from 'react-hot-toast'
import Sidebar from '../components/dashboard/Sidebar'
import { StyledLayout } from '../styles/styles.protected'
import MobileMenu from '../components/dashboard/MobileMenu'
import MobileNav from '../components/dashboard/MobileNav'

const Protected = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { loginStatus } = useSelector((state) => state.user)
  const authToken = localStorage.getItem('token')
  useEffect(() => {
    if (authToken) {
      // navigate('/')
      dispatch(getUser())
    }
    // else {
    //   navigate("/login");
    //   toast.error("Login required!");
    // }
  }, [navigate, dispatch])

  // if (loginStatus === "failed") {
  //   navigate("/login");
  //   toast.error("Login required!");
  // }

  return (
    <>
      {/* {authToken &&  */}

      <div className="md:grid lg:grid-cols-5 md:grid-cols-3 md:h-full">
        <Sidebar />
        <div className='md:hidden'>
          <MobileNav />
        </div>
        <div id="content" className="lg:col-span-4 md:col-span-2">
          {/* <HeaderLayout /> */}
          <Outlet />
        </div>
        <div className="fixed bottom-0 md:hidden w-full">
          <MobileMenu />
        </div>
      </div>
      {/* } */}
    </>
  )
}

export default Protected
