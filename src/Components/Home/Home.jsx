import React, { useEffect } from 'react'
import './Home.css'
import CakeIcon from '@mui/icons-material/Cake';
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function Home() {

  const style = {
    cake: {
      fontSize: '6rem', marginTop: '1em'
    }
  }

  useEffect (()=> {
    Aos.init({duration: 3000})
  }, [])

  
  return (
    <div>
            <div className="titleHome">
                Aplikacja <span className="apple"><i class="fa-brands fa-apple"></i></span> w której przedstawiam różne smakołyki. 
            </div>
            <div className="itemCake">
            <CakeIcon style={style.cake}/>
            <i className="fa-solid fa-cookie-bite" style={style.cake}></i>
            <i class="fa-solid fa-ice-cream" style={style.cake}></i>
            <i class="fa-solid fa-mug-hot" style={style.cake}></i>
            </div>
            <div className='homeImgVisit'>
                  <div data-aos="fade-left" className="imgVisit">

                  </div>

                  <div data-aos="fade-right" className="imgVisit visitTwo">
                    
                  </div>
            </div>

            <div className="homedescribe">
                  <div className="homedescribeimg"></div>
                  <div data-aos="fade-left" className="headerhometext">
                    Co nas wyróznia?
                    <div className='nonehometext'>Pełen prfesjonalizm</div>
                    <div className='nonehometextColor'>Świeże smakołyki</div>
                    <div className='nonehometext'>Idealnie dobrane proporcje</div>
                    <div className='nonehometextColor'>Na czas</div>
                    
                    <img className='headerUnderImg' src={process.env.PUBLIC_URL + '/img/blobanimation.svg'} alt="animacja"/>
                
                    <img className='headerUnderImg twoBlob' src={process.env.PUBLIC_URL + '/img/blobanimation.svg'} alt="animacja"/>
                  </div>

            </div>

    </div>
  )
}
