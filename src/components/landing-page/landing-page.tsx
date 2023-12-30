import React from 'react'
import "./landing-page.scss"
import { useNavigate } from 'react-router-dom'
const LandingPage = () => {
    const navigate = useNavigate()
    const navigateDummy = () => {
        navigate("/typeMobile");
    }
  return (
    <div className='landing-page-container'>
        <div className="bottom-circle"></div>()
        <div className="title-section" onClick={navigateDummy}>
            KeyBlitz
        </div>
    </div>
  )
}

export default LandingPage