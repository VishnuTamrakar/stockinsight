import React, { useState } from 'react';
import './login.css';
import {auth} from '../../firebase.js'
import { signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import GoogleButton from 'react-google-button';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');

    const navigate = useNavigate();

    const googleSignIn =()=>{
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }

    const login=(email, password)=>{
        signInWithEmailAndPassword(auth, email, password);
    }
    const handleGoogleSignIn = async (e)=>{
            e.preventDefault()
          try{
            await googleSignIn();
              navigate('/')
          }catch(err){
            console.log(err.massage)
          }
    }
    const submitForm= async (e)=>{
        e.preventDefault();
    try{
        await login(email, password);
        navigate('/');
    }catch(err){
        console.log(err.massage)
    }

    }

    
  return (
   <>
     <div className='login'>
        <h1>Log in to StockInsight</h1>
        <h4>Simplify your stock research with GPT-powered AI <br/> features.</h4>
        <form >
            <div className='google'>
                <GoogleButton
                
                type="light"
                onClick={handleGoogleSignIn}  
                style={{width:'400px', background:'none'}}             
                />
            </div>
        <div className="input">
            <label>Email address</label>
            <input type='email' placeholder='Enter your email address' onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div className="input">
            <label>Password</label>
            <input type='password' placeholder='Enter your password' onChange={(e)=> setPassword(e.target.value)}/>
        </div>
        <div className="button">
            <button onClick={submitForm()}>Sign in</button>
        </div>
        </form>
            
     </div>
   </>
  )
}

export default Login
