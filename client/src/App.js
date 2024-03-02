import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login/Login";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home/Home";

function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user._json);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="App">
      {user ? (
        <>
          {/* <DataPage/> */}
          {/* <NavBar user={user} setUser={setUser}/> */}
          <Routes>
            <Route path="/catfact" element={<Home user={user} />} />
            <Route path="/*" element={<Navigate to="/catfact" />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
