import React, { useContext } from 'react'
import './main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

    // Handle send button click
  const handleSendClick = () => {
    if (input.trim() !== '') {
      onSent();
    }
  };

    
  return (
    <div className="main">
        <div className="nav">
            <p>Gemini-Clone</p>

            <div className="icons">
                <div className="tooltip">
                <a href="https://github.com/maheshwagh2003" target='_blank'><img src={assets.github} alt="Github" /></a>
                        <span className="tooltip-text">Github</span>
                </div>
                <div className="tooltip">
                        <a href="https://www.instagram.com/mahesh.wagh2k3/" target='_blank'><img src={assets.instagram} alt="Instagram" /></a>
                        <span className="tooltip-text">Instagram</span>
                </div>
                <div className="tooltip">
                     <a href="https://www.linkedin.com/in/mahesh-wagh2003/" target='_blank'><img src={assets.linkedin} alt="LinkedIn" /></a>
                        <span className="tooltip-text">LinkedIn</span>
                </div>
                <div className="tooltip">
                        <img src={assets.user_icon} alt="User Icon" />
                        <span className="tooltip-text">Dev: MAHESH WAGH</span>
                </div>
            </div>
        </div>

        

        <div className="main-container">
        {showResult!=true
        ?<>
            <div className="greet">
                <p><span>Hello, Mahesh</span></p>
                <p>How can i help you today?</p>
            </div>

            <div className="cards">
                <div className="card">
                    <p>Apple: $400</p>
                    <p><b>AAPL</b></p>
                    <img src={assets.apple} alt="" />

                </div>
                <div className="card">
                    <p>Microsoft: $500</p>
                    <p><b>MSFT</b></p>
                    <img src={assets.microsoft} alt="" />
                </div>
                <div className="card">
                    <p>Tesla: $600</p>
                    <p><b>TSLA</b></p>
                    <img src={assets.tesla} alt="" />
                </div>
                <div className="card">
                    <p>Google: $400 </p>
                    <p><b>GOOGL</b></p>
                    <img src={assets.google} alt="" />
                </div>
            </div>
        </>
        :
        <div className='result'>
            <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p><b>{recentPrompt}</b></p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading == true?
                <div className='loader'>
                    <hr className='hr1'/>
                    <hr className='hr2' />
                    <hr className='hr3'/>
                </div>
                :<p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                
            </div>
            
        </div>
        }
            

            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter A prompt here" />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input?<img onClick={handleSendClick} src={assets.send_icon} alt="" />:null}
                    </div>
                </div>

                <div className="bottom-info">
                    <p>Gemini-Clone is an AIML Project developed my Mahesh Wagh</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main