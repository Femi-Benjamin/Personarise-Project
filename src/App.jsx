import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HomeBar } from './components'
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
} from './pages'
import { Protected, Public } from './auth'

import store from './redux/store'
import { Provider } from 'react-redux'

import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Toaster />
        <Routes>
          <Route path="/dashboard" element={<Protected />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard/home" element={<Dashboard />} />
          </Route>
          <Route path="/" element={<Public />}>
            <Route index element={<Home />} />
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
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
