import React from 'react'
import '../App.css'
import {Link, useNavigate} from 'react-router-dom'

function LandingPage() {

  const router = useNavigate();
  return (
    <div className='landingPageContainer'>
      <nav>
        <div className='navHeader'>
          <img src={'mainlogo.png'} alt="Logo Image" className='logiImage' />
        </div>
        <div className='navlist'>
          <p onClick={()=>{
            router("/aljk23")
          }}>Join as Gust</p>
          <p onClick={()=>{
            router("/auth")
          }}>Register</p>
          <div role='button'><p onClick={()=>{
            router("/auth")
          }}>Login</p></div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1><span style={{color:"#FF9839"}}>Connect</span> with your loved Ones</h1>
          <p>Cover a distance by NexMeet</p>
          <div role='button'>
            <Link to={"/auth"}>Get Started</Link>
          </div>
        </div>
        <div>
          <img src={'mobile.png'} alt="" />
        </div>
      </div>
    </div>
  )
}

export default LandingPage