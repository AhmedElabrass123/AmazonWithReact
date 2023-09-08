import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Checkout from './components/Checkout'
import LoginPage from './components/LoginPage'
import Home from './components/Home'
import MyNav from './components/MyNav'
import { theContext } from './components/StateProvider'
import { auth } from './firebase'

// import {onAuthStateChanged} from "firebase/auth"

const App = () => {
  const [{user},dispatch]=useContext(theContext);
  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        // user login
          dispatch({
            type:"SET_USER",
            user:authUser
          })
      }else{
        // user not login
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    });

    return()=>{
      unsubscribe();
    }
  },[])
  console.log("user is >>>",user);


  return (
    <>
      <BrowserRouter>
      <MyNav/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
              <Route path='/login' element={<LoginPage/>}/>

          </Routes>
    </BrowserRouter>
    </>
  )
}

export default App