import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const AuthCallback = () => {
  const history = useHistory()

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const token = searchParams.get('token')
    // Do something with the access token
    // For example, save it to local storage and redirect to the dashboard
    localStorage.setItem('access_token', token)
    history.push('/dashboard')
  }, [])

  return <div>Authenticating...</div>
}

export default AuthCallback
