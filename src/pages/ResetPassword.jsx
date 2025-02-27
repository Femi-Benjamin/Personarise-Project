import Button from '../shared/Button'
import React, { useEffect, useState } from 'react'
import icons from '../constants/icons'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { resetPassword, setEmail } from '../redux/users/actions/userActions'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const ResetPassword = () => {
  const initialValues = {
    email: '',
  }

  const dispatch = useDispatch()
  const { resetPasswordStatus, error } = useSelector((state) => state.user)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  function validationSchema() {
    return Yup.object().shape({
      email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    })
  }
  const handleSubmit = (values) => {
    const data = {
      email: values.email,
    }
    console.log(data)
    setLoading(true)
    dispatch(resetPassword(data))
    dispatch(setEmail(data.email))
  }
  useEffect(() => {
    if (resetPasswordStatus === 'success') {
      navigate('/dashboard')
    } else {
      if (error && resetPasswordStatus === 'failed') {
        toast.error('Wrong login credentials')
        setLoading(false)
      }
    }
  }, [resetPasswordStatus, error, navigate])

  return (
    <>
      <div className="md:flex items-center justify-center h-full #071D2E md:bg-slate-100">
        <div className="md:w-[60%] md:border-solid md:border md:border-[#CDD2D5] md:py-4 md:px-12 m-4 max-w-7xl bg-white p-4">
          <div className="flex flex-col justify-center mt-10">
            <div className="flex justify-center">
              <Link to="/login">
                <img src={icons.reset} alt="reset" />
              </Link>
            </div>
            <div className="flex flex-col justify-center ">
              <h1 className="md:font-semibold lg:text-[32px] md:text-[28px] text-[24px] text-center my-10">
                Reset Password
              </h1>
              <p className="text-center max-w-[404px] mx-auto mb-6">
                Kindly fill in the details associated with your account and we
                will send an OTP to reset your password.
              </p>
            </div>
            <div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched, resetForm }) => (
                  <Form>
                    <div>
                      <div className="mb-10">
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
                    </div>
                    <div className=" m-auto mb-10">
                      <div className="md:w-[60%]  m-auto">
                        <Button type="submit" disabled={loading}>
                          {loading ? 'Loading...' : 'Reset Password'}
                        </Button>
                      </div>
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

export default ResetPassword
