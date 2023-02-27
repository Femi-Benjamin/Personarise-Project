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
import Quiz6 from "./pages/Quiz6";
//import MultiStepForm from "./pages/MultiStepForm";
import store from "./redux/store";
import { Provider } from "react-redux";
import Result from "./pages/Result";
import Career from "./pages/Career";


function App() {
  return (
  <Provider store={store}>
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
        <Route path="/quiz4" element={<Quiz4 />} />
        <Route path="/quiz5" element={<Quiz5 />} />
        <Route path="/quiz6" element={<Quiz6 />} />
        {/* <MultiStepForm/> */}
        <Route path="/result" element={<Result />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </Router>
    </Provider>

  );
}

export default App;
