import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  Home,
  Signup,
  Login,
  Verify,
  ResetPassword,
  EmployerSignup,
  InternSignup,
  Quiz,
  TakeQuiz,
  SelectCareer,
  Career,
  Result,
  Dashboard,
  Roadmap,
  Jobs,
  Profile,
} from '../pages'
import { Protected, Public } from '../layout'
import { Beginner } from '../components'
import Intermediate from '../components/Intermediate.jsx'
import Advanced from '../components/Advanced.jsx'
import {NewHome} from '../pages'
import Map from '../components/Map'
import DashboardQuiz from '../pages/DashboardQuiz'

const Routers = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Protected />}>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard/home" element={<Dashboard />} />
        <Route path="/dashboard/roadmap" element={<Roadmap />} />
        <Route path="/dashboard/jobs" element={<Jobs />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/roadmap/map" element={<Map />} />
      </Route>
      <Route path="/" element={<Public />}>
        {/* <Route index element={<Home />} /> */}
        <Route index element={<NewHome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/intern" element={<InternSignup />} />
        <Route path="/signup/employer" element={<EmployerSignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/email-verification" element={<Verify />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/takequiz" element={<TakeQuiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/career" element={<Career />} />
        <Route path="/choose-career" element={<SelectCareer />} />
      </Route>
        <Route path="/beginner" element={<Beginner />} /> 
        <Route path="/beginner/quiz" element={<DashboardQuiz />} />
        <Route path="/intermediate" element={<Intermediate />} /> 
        <Route path="/advanced" element={<Advanced />} />
    </Routes>
  )
}

export default Routers
