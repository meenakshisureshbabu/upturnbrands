import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Home/home.css";

function Home(userDetails) {
  const user = userDetails.user;
  const [randomquote, setRandomquote] = useState();
  const [buttonpressed, setButtonpressed] = useState(false);

  const handleLogout = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
  };

  const handleToggleButton = () => {
    if (!buttonpressed) {
      setButtonpressed(true);
    } else {
      setButtonpressed(false);
    }
  };

  const getRandomCatQuote = async () => {
    try {
      //const url = `${process.env.REACT_APP_API_URL}/auth/login/success`
      const url = `${process.env.REACT_APP_API_URL}/catquote/random`;
      const { data } = await axios.get(url);
      console.log(data);
      setRandomquote(data);
      //setUser(data.user._json)
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getRandomCatQuote();
  }, [buttonpressed]);
  return (
    <div>
      <div class="wrapper">
        <div className="headdiv">
        <h1>Cat Whisperers</h1>
        <div className="userbuttondiv">
        <h4>Caninia User: {user.name}</h4>
        <button className="logoutbutton" onClick={handleLogout}>
          Logout
        </button>
        </div>
        </div>
        <header>
          <img
            src="https://images.unsplash.com/photo-1622810232121-f0aca4a230bb?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="foreground"
          />
          <h1 title>{randomquote}</h1>
        </header>
        <div>
          <button className="otherquotebutton" onClick={handleToggleButton}>
            Some other quote pls!!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;