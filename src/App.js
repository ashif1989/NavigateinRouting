import "./styles.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate
} from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Welcome from "./Welcome";
import { useEffect, useState } from "react";

export default function App() {
  const [userName, setUserName] = useState(null);

  useEffect(() => {});

  let handleOnChange = (data) => {
    setUserName(data);
    console.log("userName", userName);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Login handleOnChange={handleOnChange} />} />
            <Route path="welcome" element={<Welcome userName={userName} />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
