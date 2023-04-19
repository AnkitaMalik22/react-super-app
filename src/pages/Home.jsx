import React from "react";
import "../App.css";
import Profile from "../components/Home/Profile";
import Weather from "../components/Home/Weather";
import News from "../components/Home/News";
import Notes from "../components/Home/Notes";
import CountDown from "../components/Home/CountDown";

const Home = () => {
  return (
    <div className="home container">
      <div className="home-inner-div">
        <div className="home-left">
          <div  className="inner-left-1">
            <div className="inner-left-2">
            <Profile />
            <Weather />
          </div>

          <Notes />
          </div>

          <CountDown/>
        </div>
        <div className="home-right">
          <News />
        </div>
      </div>
    </div>
  );
};

export default Home;
