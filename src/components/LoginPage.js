import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'; // version 5.2.0
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword  } from 'firebase/auth';
import { auth } from "../firebase";


const LoginPage = () => {
  const[theEmail,setTheEmail]=useState("");
  const[thePassword,setThePassword]=useState("");
  const navigate = useNavigate ();


 const loginFunc=(e)=>{
    e.preventDefault();
    console.log(theEmail,thePassword);
    signInWithEmailAndPassword(auth,theEmail,thePassword).then((Auth)=>{
      navigate("/");

    }).catch((e)=>alert(e.message))
   }
   const registerFunc=(e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth,theEmail,thePassword).then((Auth)=>{
      navigate("/");
    }).catch((e)=>alert(e.message))
  }
  return (
    <section
      className="loginPage"
      style={{ height: "90vh",width:"100%", backgroundColor: "#eee" }}
    >
      <div className="container w-100 h-100">
        <div className="row h-100 justify-content-center ">
          <div className="col-md-6 col-sm-12 mt-5">
            <div
              className="w-100"
              style={{
                backgroundColor: "#fff",
                padding: "15px",
                boxShadow: "0px 0px 4px rgba(0,0,0,0.6)",
              }}
            >
              <h2 className="mb-3">Sign in</h2>
              <Form className="form w-100">
                <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                  <Form.Label style={{fontWeight:"600"}}>E-mail</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"
                  onChange={(e)=>{setTheEmail(e.target.value)}} />
                </Form.Group>
                <Form.Group
                  className="mb-3 w-100"
                  controlId="formBasicPassword"
                >
                  <Form.Label style={{fontWeight:"600"}}>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" 
                  onChange={(e)=>{setThePassword(e.target.value)}}/>
                </Form.Group>
                <button
                  variant="primary"
                  type="submit"
                  onClick={(e)=>{loginFunc(e)}}
                  className="rounded-0 mb-3 fw-bold btn btn-warning signIn w-100"
                >
                  Sign in
                </button>
                <p className="text-black mb-3">
                By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button className="text-center w-100 py-2"  onClick={(e)=>{registerFunc(e)}}>
                  Create Your Amazon Account
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
