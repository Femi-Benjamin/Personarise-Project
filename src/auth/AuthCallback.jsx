import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthCallback = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const token = searchParams.get('token')
    // Do something with the access token
    // For example, save it to local storage and redirect to the dashboard
    localStorage.setItem('access_token', token)
    navigate('/dashboard')
  }, [])

  return <div>Authenticating...</div>
}

export default AuthCallback
