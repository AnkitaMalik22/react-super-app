import React from 'react'
import '../App.css'
import Profile from '../components/Home/Profile'
import Weather from '../components/Home/Weather'
import News from '../components/Home/News'

const Home = () => {
  return (
    <div className='home container'>
     <div className="home-inner-div">
     <div className="home-left">
        <Profile/>
        <Weather/>
     </div>
        <div className="home-right">
            <News/>
        </div>
     </div>
        </div>
  )
}

export default Home