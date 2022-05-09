import React, { useState, useEffect } from 'react';

// // STYLES
import AuthStyle from './AuthComp.module.css'

// // ICONS
import userIcon from './../../Resources/icons/user.png'
import phoneIcon from './../../Resources/icons/phone.png'
import emailIcon from './../../Resources/icons/email.png'
import passwordIcon from './../../Resources/icons/password.png'

// // COMPONENTS
import FormComp from './../FormComp/FormComp'

// // DATA
import { SignUpData } from '../Data/AuthData.js'


function SignUpComp({HandleSwitch}) {
   // // STATES
   // 
   const [userCredentials, setUserCredentials] = useState({
      'userFullname': '',
      'userPhone': '',
      'userEmail': '',
      'userPassword': '',
      'userAltPassword': ''
   })
   const [mainClass, setMainClass] = useState(`${AuthStyle.SignUpComp}`);
   // 
   const formTitle = SignUpData.formTitle === undefined
      ? 'no title' 
      : SignUpData.formTitle;


   // // COMPONENT FUNCTIONS
   //
   const HandleInput = (e) => {
      setUserCredentials(initState => {
         return { ...initState, [e.target.name]: e.target.value }
      })
   }

   // //
   const HandleSubmit = (e) => {
      e.preventDefault();
      // let formData = new FormData([form]);
      // console.log(formData);
   }


   // // RENDER CONTROLS
   // 
   useEffect(()=>{
      // // 
      // setUserCredentials(initState => {
      //    return {...initState, ...{
      //       'userFullname': '',
      //       'userPhone': '',
      //       'userEmail': '',
      //       'userPassword': '',
      //       'userAltPassword': ''
      //    }}
      // })

      setMainClass(`${AuthStyle.SignUpComp} ${AuthStyle.show}`)
   })


   return (
      <div className={mainClass}>
         <FormComp 
            FormTitle={formTitle} 
            // onSubmit={HandleSubmit}
            // method='POST'
            className={AuthStyle.loading} >
            <div>
               <input 
                  type='text' 
                  name='userFullname' 
                  placeholder='First....  Other....  Last....' 
                  value={userCredentials['userFullname']}
                  onChange={HandleInput} />
               <label>
                  <img 
                     src={userIcon} 
                     alt='alt_text_to_image'/>
                  <span>fullname</span>
               </label>
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
            <div>
               <input 
                  type='password' 
                  name='userPassword' 
                  placeholder='********' 
                  value={userCredentials['userPassword']} 
                  onChange={HandleInput} />
               <label>
                  <img 
                     src={passwordIcon} 
                     alt='alt_text_to_image' />
                  <span>password</span>
               </label>
            </div>
            <div>
               <input 
                  type='password' 
                  name='userAltPassword' 
                  placeholder='********' 
                  value={userCredentials['userAltPassword']} 
                  onChange={HandleInput} />
               <label>
                  <img 
                     src={passwordIcon} 
                     alt='alt_text_to_image' />
                  <span>password</span>
               </label>
            </div>
            <div className={AuthStyle.customs}>
               <div>
                  <span>already have an account? </span>
                  <span 
                     className={AuthStyle.button} 
                     onClick={HandleSwitch}>
                     sign in
                  </span>
               </div>
            </div>
            <div>
               <button 
                  name='signUp' 
                  type='submit'
                  onClick={HandleSubmit}>
                  sign up
               </button>
               <div></div>
            </div>
         </FormComp>
      </div>
   )
}

export default SignUpComp