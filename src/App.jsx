import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Signup, Login, Verify, ResetPassword, Connect } from "./pages";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
