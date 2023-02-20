import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeBar } from "./components";
import {
  Home,
  Signup,
  Login,
  Verify,
  ResetPassword,
  EmployerSignup,
  InternSignup,
  Quiz,
} from "./pages";
import TakeQuiz from "./pages/TakeQuiz";
import Nextqs from "./pages/Nextqs";
import Nextqz from "./pages/Nextqz";
import Quiz4 from "./pages/Quiz4";
import Quiz5 from "./pages/Quiz5";

function App() {
  return (
    <Router>
      <HomeBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/intern" element={<InternSignup />} />
        <Route path="/signup/employer" element={<EmployerSignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/email-verification" element={<Verify />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/takequiz" element={<TakeQuiz />} />
        <Route path="/nextqs" element={<Nextqs />} />
        <Route path="/nextqz" element={<Nextqz />} />
        <Route path="/Quiz4" element={<Quiz4 />} />
        <Route path="/Quiz5" element={<Quiz5 />} />
      </Routes>
    </Router>
  );
}

export default App;
