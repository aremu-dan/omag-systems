import React, { useState, useEffect } from 'react'

function Modal({onLoad, children}) {
  // //
  //
  const [modalStyle, setModalStyle] = useState('Modal hide');
  const [splashScreenStyle, setSplashScreenStyle] = useState('splashScreen show');


  // //
  //
  const ModalToggle = (x) => {
    setModalStyle(x === 'i'? 'Modal hide' : 'Modal show')
  }


  // // 
  //
  useEffect(()=>{
    const timer = setInterval(() => {
      // setSplashScreenStyle('splashScreen hide');
      clearInterval(timer);
    }, 3000);

    setSplashScreenStyle('splashScreen hide')
  }, [])


  return (
    <>
      {/*  */}
      <div className={modalStyle}>
        <div 
          className='ModalClose'
          onClick={()=>ModalToggle('i')}>x</div>
        <div 
          className='ModalContent'
          onClick={()=>ModalToggle('i')}>
          {children}
        </div>
      </div>

      {/*  */}
      <div className={splashScreenStyle}>
        <div className='splashScreenContent'>
          <div className='loaderBox'></div>
        </div>
      </div>
    </>
  )
}

export default Modal