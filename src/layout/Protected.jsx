import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../redux/users/actions/userActions'
import { toast } from 'react-hot-toast'
import { MobileMenu, MobileNav, Sidebar } from '../components'

const Protected = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { loginStatus } = useSelector((state) => state.user)
  const authToken = localStorage.getItem('token')
  useEffect(() => {
    // if (authToken && user) {
      if (authToken) {
      // navigate('/')
      // dispatch(getUser())
    }
    else {
      navigate("/login");
      toast.error("Login required!");
    }
  }, [navigate, dispatch])

  // if (loginStatus === "failed") {
  //   navigate("/login");
  //   toast.error("Login required!");
  // }

  return (
    <>
      {/* {authToken &&  */}

      <div className="md:grid lg:grid-cols-5 md:grid-cols-3 md:h-full">
        <div className="fixed h-full md:w-[20%] bg-white">
          <Sidebar />
        </div>
        <div className="" />
        <div className="md:hidden z-10 relative ">
          <MobileNav />
          <div className="" />
        </div>
        <div
          id="content"
          className="lg:col-span-4 md:col-span-2 md:m-6 m-3 md:pb-3 pb-32 mt-32 "
        >
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
