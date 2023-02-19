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
import store from "./redux/store";
import { Provider } from "react-redux";

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
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
