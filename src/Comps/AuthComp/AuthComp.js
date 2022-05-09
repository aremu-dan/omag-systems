import React, { useState } from 'react';
// 
import Style from './AuthComp.module.css'
// 
import CardComp from './../CardComp/CardComp'
import SignInComp from './SignInComp'
import SignUpComp from './SignUpComp'
import ForgottenPasswordComp from './ForgottenPasswordComp'

function AuthComp() {

  // // STATES
  const [switchForm, setSwitchForm] = useState(true);
  const [pswSwitch, setPswSwitch] = useState(false);


  // // COMPONENT FUNCTIONS
  // 
  const HandleSwitch = () => {
    setSwitchForm(initState => !initState)
  }

  //
  const HandlePswSwitch = () => {
    setPswSwitch(initState => !initState)
  }

  return (
    <div className={Style.AuthComp}>
      {/*  */}
      <div>
        <CardComp>
          {
            pswSwitch?
            <ForgottenPasswordComp HandlePswSwitch={HandlePswSwitch} /> :
            switchForm? 
              <SignInComp HandlePswSwitch={HandlePswSwitch} HandleSwitch={HandleSwitch} /> : 
              <SignUpComp HandleSwitch={HandleSwitch} />
          }
        </CardComp>
      </div>
    </div>
  )
}

export default AuthComp