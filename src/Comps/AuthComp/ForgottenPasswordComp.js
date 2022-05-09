import React, { useState, useEffect } from 'react'

// // STYLES
import AuthStyle from './AuthComp.module.css'

// // ICONS
import phoneIcon from './../../Resources/icons/phone.png'
import emailIcon from './../../Resources/icons/email.png'
// import passwordIcon from './../../Resources/icons/password.png'

// // COMPONENTS
import FormComp from './../FormComp/FormComp'

// // DATA
import { ForgotPasswordData } from '../Data/AuthData.js'

function ForgottenPasswordComp({HandlePswSwitch}) {
   // // STATES
   // 
   const [userCredentials, setUserCredentials] = useState({'userPhone': ''})
   const [mainClass, setMainClass] = useState(`${AuthStyle.ForgottenPasswordComp}`);
   const [switchInput, setSwitchInput] = useState(true)
   // 
   const formTitle = ForgotPasswordData.formTitle === undefined
      ? 'no title' 
      : ForgotPasswordData.formTitle;


   // // COMPONENT FUNCTIONS
   //
   const HandleInput = (e) => {
      setUserCredentials(initState => {
         return { ...initState, [e.target.name]: e.target.value }
      })
   }

   //
   const HandleSubmit = (e) => {
      e.preventDefault();
   }

   //
   const HandleInputSwitch = () => {
      console.log(userCredentials)
      setSwitchInput(initState => !initState)

      // let data = switchInput? {'userPhone': ''} : {'userEmail': ''};
      // setUserCredentials(...data)
   }


   // // RENDER CONTROLS
   // 
   useEffect(()=>{
      setMainClass(`${AuthStyle.SignUpComp} ${AuthStyle.show}`)
   })


   return (
      <div className={mainClass}>
      <FormComp 
         FormTitle={formTitle} 
         // onSubmit={HandleSubmit}
         // method='POST'
         className={AuthStyle.loading} >
         {
            switchInput?         
               <>
                  <div className={AuthStyle.customs}>
                     <span 
                        className={AuthStyle.button} 
                        onClick={HandleInputSwitch}>
                        <img src={emailIcon} alt="" />
                     </span>
                  </div>
                  <div>
                     <input 
                        type='tel' 
                        name='userPhone' 
                        placeholder='+234 810 000 0000' 
                        value={userCredentials['userPhone']}
                        onChange={HandleInput} />
                     <label>
                        <img 
                           src={phoneIcon} 
                           alt='alt_text_to_image' />
                        <span>mobile</span>
                     </label>
                  </div>
               </> :   
               <>
                  <div className={AuthStyle.customs}>
                     <span 
                        className={AuthStyle.button} 
                        onClick={HandleInputSwitch}>
                        <img src={phoneIcon} alt="" />
                     </span>
                  </div>
                  <div>
                     <input 
                        type='email' 
                        name='userEmail' 
                        placeholder='sample@example.com' 
                        value={userCredentials['userEmail']}
                        onChange={HandleInput} />
                     <label>
                        <img 
                           src={emailIcon} 
                           alt='alt_text_to_image' />
                        <span>email</span>
                     </label>
                  </div>
               </>
         }
         <div className={AuthStyle.customs}>
            <div style={{'marginTop':'10px'}}>
               <span>already have an account? </span>
               <span 
                  className={AuthStyle.button} 
                  onClick={HandlePswSwitch}>
                  sign in
               </span>
            </div>
         </div>
         <div>
            <button 
               name='forgotPsw' 
               type='submit'
               onClick={HandleSubmit}>
               reset password
            </button>
            <div></div>
         </div>
      </FormComp>
   </div>
  )
}

export default ForgottenPasswordComp