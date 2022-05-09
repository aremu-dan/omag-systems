import React, { useEffect } from 'react';
// 
import './App.css';
// 
import Modal from './Comps/Modal/Modal'
import AuthComp from './Comps/AuthComp/AuthComp'
import Dashboard from './Comps/Dashboard/Dashboard'
// 
// import logo from './logo.svg';


function App() {
  // // STATE
  // const [appData, setAppData] = useState({"onLoad": false})


  // // COMPONENT FUNCTIONS
  // //
  // const HandleInput = (e) => {
  //   setUserCredentials(initState => {
  //     return { ...initState, [e.target.name]: e.target.value }
  //   })
  // }


  // //  RENDER CONTROLS
  //
  useEffect(()=>{}, [])

  return (
    <div className="App">

      {/*  */}
      <Modal />

      {/*  */}
      <AuthComp />

      {/*  */}
      {/* <Dashboard /> */}

    </div>
  );
}

export default App;
