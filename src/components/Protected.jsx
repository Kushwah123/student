import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

const Protected = (props) => {
         const {Component} = props
      const navigate = useNavigate();
        let Login = localStorage.getItem('Login');
        if(!Login) {
            navigate('/Login')
        }
    
    return (
        <>
         <Component/>
         </>
    )
}
export default Protected;