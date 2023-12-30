import React, { useEffect, useState } from 'react'
import "./landing-page.scss"
import { useNavigate } from 'react-router-dom';
import Typist from "react-typist";
import textString from "../../const/text.js";
import keyBoardWin from "../../assets/keyboard-windows.png";
import keyBoardMac from "../../assets/keyboard-mac.png";

const LandingPage = () => {
    const [user, setUser] = useState("Windows");
    const navigate = useNavigate()
    const navigateDummy = () => {
        navigate("/type");
    }
    const cursor = {
        show: true,
        blink: true,
        element: '|',
        hideWhenDone: true,
        hideWhenDoneDelay: 100,
    }
    useEffect(() => {
        const isWindows = navigator.userAgent.includes('Windows');
        const isMac = navigator.userAgent.includes('Macintosh');
        const isIphone = navigator.userAgent.includes('iPhone');
        if (isMac) {
            setUser("Mac");
        } else if (isWindows) {
            setUser("Windows");
        }
        else if (isIphone) {
            setUser("IPhone");
        }
        else {
            setUser("Windows");
        }
    }, [])
    return (
        <div className='landing-page-container'>
            <div className="test-btn" onClick={navigateDummy}>Go To Test</div>
            <div className="bottom-circle"></div>
            <div className="title-section">
                <Typist avgTypingDelay={100}
                    cursor={cursor}
                >
                    <span className="title"> {textString.title} </span>
                </Typist>
            </div>
            <div className="description delayed-div">
                {textString.description}
            </div>
            {
                user === "Windows" &&
                <div className="keyboard-div">
                    {user === "Windows" && <img src={keyBoardWin} alt="" className='keyboard-img' />}
                    <svg className='wire-css' xmlns="http://www.w3.org/2000/svg" width="367" height="237" viewBox="0 0 367 237" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 -5.5V53C20 80.6142 42.3858 103 70 103H296.5C335.16 103 366.5 134.34 366.5 173V236.5H346.5V173C346.5 145.386 324.114 123 296.5 123H70C31.3401 123 0 91.6599 0 53L0 -5.5H20Z" fill="#242426" />
                    </svg>
                </div>
            }
            {
                user === "Mac" &&
                <div className="keyboard-div">
                    {user === "Mac" && <img src={keyBoardMac} alt="" className='keyboard-img' />}
                    <svg className='wire-css' xmlns="http://www.w3.org/2000/svg" width="367" height="237" viewBox="0 0 367 237" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 -5.5V53C20 80.6142 42.3858 103 70 103H296.5C335.16 103 366.5 134.34 366.5 173V236.5H346.5V173C346.5 145.386 324.114 123 296.5 123H70C31.3401 123 0 91.6599 0 53L0 -5.5H20Z" fill="#242426" />
                    </svg>
                </div>
            }
                        {
                user === "IPhone" &&
                <div className="keyboard-div">
                    {user === "IPhone" && <img src={keyBoardMac} alt="" className='keyboard-img' />}
                    <svg className='wire-css' xmlns="http://www.w3.org/2000/svg" width="367" height="237" viewBox="0 0 367 237" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 -5.5V53C20 80.6142 42.3858 103 70 103H296.5C335.16 103 366.5 134.34 366.5 173V236.5H346.5V173C346.5 145.386 324.114 123 296.5 123H70C31.3401 123 0 91.6599 0 53L0 -5.5H20Z" fill="#242426" />
                    </svg>
                </div>
            }
        </div>
    )
}

export default LandingPage