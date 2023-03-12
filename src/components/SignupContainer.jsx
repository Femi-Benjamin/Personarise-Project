import React, { useEffect, useState } from 'react'
import icons from '../constants/icons'
import Button from '../shared/Button'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import { country_list } from '../constants/data'
import { setEmail } from '../redux/users/actions/userActions'
import { toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../redux/users/actions/userActions'

const SignupContainer = ({ link, title, connection, nextText, isEmployer }) => {
  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    country: '',
  }

  const [passwordState, setPasswordState] = useState('password')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { registerStatus, error } = useSelector((state) => state.user)
  const [loading, setLoading] = useState(false)

  function validationSchema() {
    return Yup.object().shape({
      firstname: Yup.string().required('First name is required'),
      lastname: Yup.string().required('Last name is required'),
      email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
    })
  }
  const handleViewPassword = () => {
    if (passwordState === 'text') {
      setPasswordState('password')
    } else {
      setPasswordState('text')
    }
  }

  const handleSubmit = (values, { resetForm }) => {
    dispatch(setEmail(values.email))
    const data = {
      firstName: values.firstname,
      lastName: values.lastname,
      email: values.email,
      password: values.password,
      country: values.country,
      isEmployer: isEmployer,
    }
    console.log(data)
    setLoading(true)
    dispatch(registerUser(data))
  }
  useEffect(() => {
    if (registerStatus === 'success') {
      navigate('/email-verification')
    } else {
      if (error && registerStatus === 'failed') {
        toast.error('Please Try Again')
        setLoading(false)
      }
    }
  }, [registerStatus, error, navigate])

  // const handleGoogleClick = () => {
  //   window.location.replace(
  //     "https://projectx-f5wv.onrender.com/api/user/auth/google"
  //   );
  // };

  return (
    <>
      <div className="md:flex items-center justify-center h-full  md:bg-slate-100">
        <div className="md:w-[60%] md:border-solid md:border md:border-[#CDD2D5] md:py-4 md:px-12 bg-white max-w-7xl m-4 p-4">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col justify-center ">
              <h1 className="md:font-semibold lg:text-[32px] md:text-[28px] text-[24px] text-center my-8">
                {title}
              </h1>
              <div className="mb-5">
                <a
                  // href="https://projectx-f5wv.onrender.com/api/user/auth/google"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button image={icons.google}>Continue with Google</Button>
                </a>
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
                      <div className="mb-4 flex flex-col md:flex-row gap-5 ">
                        <div className=" md:w-[50%] mb-">
                          <Field
                            name="firstname"
                            type="text "
                            placeholder="First Name"
                            className={
                              '  w-full box-border border-2 border-solid border-[#CDD2D5] rounded p-2 outline-none ' +
                              (errors.firstname && touched.firstname
                                ? 'border-[#f52d2d] '
                                : '')
                            }
                          />
                          <ErrorMessage
                            name="firstname"
                            component="div"
                            className="mt-1 mb-2 text-xs text-[#f52d2d]"
                          />
                        </div>
                        <div className=" md:w-[50%]">
                          <Field
                            name="lastname"
                            type="text"
                            placeholder="Last Name"
                            className={
                              ' w-full box-border border-2 border-solid border-[#CDD2D5] rounded p-2 outline-none ' +
                              (errors.lastname && touched.lastname
                                ? 'border-[#f52d2d]  '
                                : '')
                            }
                          />
                          <ErrorMessage
                            name="lastname"
                            component="div"
                            className="mt-1 mb-2 text-xs text-[#f52d2d]"
                          />
                        </div>
                      </div>
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
                      <div className="mb-10">
                        <Field
                          name="country"
                          as="select"
                          className={
                            'w-full box-border border-2 border-solid border-[#CDD2D5] rounded p-2 outline-none ' +
                            (errors.country && touched.country
                              ? 'border-[#f52d2d] '
                              : '')
                          }
                        >
                          <option value="" default>
                            Select Country
                          </option>
                          {country_list &&
                            country_list.map((country) => (
                              <option value={country}>{country}</option>
                            ))}
                        </Field>
                        <ErrorMessage
                          name="country"
                          component="div"
                          className="mt-1 mb-2 text-xs text-[#f52d2d]"
                        />
                      </div>
                    </div>
                    <div className=" m-auto">
                      <div className="w-[60%] m-auto">
                        <Button
                          onClick={handleSubmit}
                          type="submit"
                          disabled={loading}
                        >
                          {loading ? 'Loading...' : 'Create Account'}
                        </Button>
                      </div>
                      <p className="text-center my-3 md:block hidden">
                        Already have an account?
                        <Link
                          to="/login"
                          className="text-[#071D2E] font-extrabold"
                        >
                          &nbsp;Log In
                        </Link>
                      </p>

                      <p className="text-center my-3 md:hidden">
                        {nextText}{' '}
                        <Link
                          to={`/signup/${link}`}
                          className="text-[#071D2E] "
                        >
                          {connection}
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

export default SignupContainer
