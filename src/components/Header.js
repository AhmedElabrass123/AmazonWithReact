import React from 'react'
import MyNav from './MyNav'
import banner from "../images/baner3.jpg"
const Header = () => {
  return (
    <>
    <section className="header w-100" style={{background:"rgb(238 238 238 / 50%)"}}>
        <div className='col-sm-12' >
          <div className='w-100 h-100'>
              <img src={banner} alt="Sorry" className='w-100' style={{objectFit:"cover",width:"100vh"}}/>
          </div>
      </div>
    </section>
        
    </>
  )
}

export default Header