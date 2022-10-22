import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage.js";
import AdminLogin from "./AdminLogin.js";
import Logs from "./Logs.js";
import MaskDetection from "./MaskDetection.js"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/maskdetection" element={<MaskDetection />} />
      </Routes>
    </div>
  );
}

export default App;
