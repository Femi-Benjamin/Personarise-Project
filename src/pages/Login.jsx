import React, { useEffect, useState } from 'react'
import icons from '../constants/icons'
import Button from '../shared/Button'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, setEmail } from '../redux/users/actions/userActions'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  }

  const [passwordState, setPasswordState] = useState('password')

  function validationSchema() {
    return Yup.object().shape({
      email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
      password: Yup.string().required('Password is required'),
    })
  }
  const handleViewPassword = () => {
    if (passwordState === 'text') {
      setPasswordState('password')
    } else {
      setPasswordState('text')
    }
  }
  const dispatch = useDispatch()
  const { loginStatus, error } = useSelector((state) => state.user)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    if (loginStatus === 'success') {
      navigate('/dashboard')
    } else {
      if (error && loginStatus === 'failed') {
        toast.error('Wrong login credentials')
        setLoading(false)
      }
    }
  }, [loginStatus, error, navigate])
  const handleSubmit = (values, { resetForm }) => {
    const data = {
      email: values.email,
      password: values.password,
    }
    setLoading(true)
    dispatch(loginUser(data))
    dispatch(setEmail(data.email))
  }

  return (
    <>
      <div className="md:flex items-center justify-center h-full md:bg-slate-100">
        <div className="md:w-[60%] md:border-solid md:border md:border-[#CDD2D5] md:py-4 md:px-12 bg-white max-w-7xl m-4 p-4">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col justify-center ">
              <h1 className="md:font-semibold lg:text-[32px] md:text-[28px] text-[24px] text-center my-8">
                Log In to Project X
              </h1>
              <div className="mb-5">
                <Button image={icons.google}>Continue with Google</Button>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-7 justify-center">
              <div className="w-[187px] h-0 border border-solid border-[#CDD2D5]" />
              <span>or</span>
              <div className="w-[187px] h-0 border border-solid border-[#CDD2D5]" />
            </div>
            <div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched, resetForm, handleSubmit }) => (
                  <Form>
                    <div>
                      <div className="mb-5">
                        <Field
                          name="email"
                          type="email"
                          placeholder="Email"
                          className={
                            'w-full box-border border-2 border-solid border-[#CDD2D5] rounded p-2 outline-none ' +
                            (errors.email && touched.email
                              ? 'border-[#f52d2d] '
                              : '')
                          }
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="mt-1 mb-2 text-xs text-[#f52d2d]"
                        />
                      </div>
                      <div className="mb-5 relative">
                        <Field
                          name="password"
                          type={passwordState}
                          placeholder="password"
                          className={
                            'w-full box-border border-2 border-solid border-[#CDD2D5] rounded p-2 outline-none ' +
                            (errors.password && touched.password
                              ? 'border-[#f52d2d] '
                              : '')
                          }
                        />
                        <img
                          src={icons.password}
                          alt="password"
                          className="cursor-pointer absolute top-1 right-3"
                          onClick={handleViewPassword}
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="mt-1 mb-2 text-xs text-[#f52d2d]"
                        />
                      </div>
                      <div className="mb-4">
                        <Link
                          to="/reset-password"
                          className="text-[#071D2E] font-extrabold"
                        >
                          Forgot Password?
                        </Link>
                      </div>
                    </div>
                    <div className=" m-auto">
                      <div className="md:w-[60%] m-auto">
                        <Button type="submit" disabled={loading}>
                          {loading ? 'Loading...' : 'Login'}
                        </Button>
                      </div>
                      <p className="text-center my-4 md:block hidden">
                        Don’t have an account?
                        <Link
                          to="/signup"
                          className="text-[#071D2E] font-extrabold"
                        >
                          &nbsp;Create One
                        </Link>
                      </p>

                      <p className="text-center my-4 md:hidden">
                        Don’t have an account?{' '}
                        <Link
                          to="/signup"
                          className="text-[#071D2E] font-extrabold"
                        >
                          &nbsp;Create One
                        </Link>
                      </p>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
