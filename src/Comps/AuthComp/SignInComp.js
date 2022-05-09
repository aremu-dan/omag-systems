import React, {useEffect, useState} from 'react';

// // STYLES
import AuthStyle from './AuthComp.module.css'

// // ICONS
import emailIcon from './../../Resources/icons/email.png'
import passwordIcon from './../../Resources/icons/password.png'

// // COMPONENTS
import FormComp from './../FormComp/FormComp'

// // DATA
import { SignInData } from '../Data/AuthData.js'


function SignInComp({HandlePswSwitch, HandleSwitch}) {
  // // STATE
  const [userCredentials, setUserCredentials] = useState({
    'userEmail': '',
    'userPassword': ''
  })
  const [mainClass, setMainClass] = useState(`${AuthStyle.SignInComp}`);
  // 
  const formTitle = SignInData.formTitle === undefined
  ? 'no title' 
  : SignInData.formTitle;


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


  // //  RENDER CONTROLS
  //
  useEffect(() => {
    // setUserCredentials(initState => {
    //   return {...initState, ...{
    //     'userEmail': '',
    //     'userPassword': ''
    //   }}<SignUpComp />
    // })

    setMainClass(`${AuthStyle.SignInComp} ${AuthStyle.show}`)
  })


  return (
    <div className={mainClass}>
      <FormComp 
        FormTitle={formTitle} 
        // method='POST'
        // onSubmit={HandleSubmit}
        className={AuthStyle.loading}>
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
        <div className={AuthStyle.customs}>
          <div>
            <span>create an account? </span>
            <span 
              className={AuthStyle.button} 
              onClick={HandleSwitch}>
              sign up
            </span>
          </div>
          <div style={{'marginTop':'5px'}}>
            <span 
                className={AuthStyle.button}
                onClick={HandlePswSwitch}>
                forgot password
            </span>
          </div>
        </div>
        <div>
          <button 
            name='signIn' 
            type='submit'
            onClick={HandleSubmit}>
            sign in
          </button>
          <div></div>
        </div>
      </FormComp>
    </div>
  )
}

export default SignInComp