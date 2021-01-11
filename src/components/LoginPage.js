import React,{ useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase';
import './login.css'

function LoginPage() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    
    const signIn = e => {
        e.preventDefault();
        
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
              history.push('/')
            })
            .catch(err => alert(err.message))
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
            //  console.log(auth);
              if(auth){
                history.push('/')
              }
            })
            .catch(err => alert(err.message))
    }

    return (
        <div className="login">
          <Link to="/">
             <img className="loginLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" /> 
          </Link>   
          <div className="loginContainer">
           <h1>Sign in</h1>
           <form>
             <h5>E-mail</h5>
             <input type='text' value={email} onChange = {e => setEmail(e.target.value) }/>
             <h5>Password</h5>
             <input type='password' value={password} onChange = {e => setpassword(e.target.value)}/>
             <button type="submit" className="loginSignInButton" onClick={signIn}>Sign In</button>
           </form>    
            <p>
             By continuing, you agree to AZClone Conditions of Use and Privacy Notice. Please see our PrivacyNotice, our Cookies Policies and Interest based Ads 
            </p>
            <button onClick={register} className="loginRegisterButton">Create your Amazon Account</button>
          </div>       
        </div>
    )
}

export default LoginPage
