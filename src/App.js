import './App.css';
import Home from './components/Home';
import Header from './initials/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './components/Checkout';
import LoginPage from "./components/LoginPage";
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './data/StateProvider';
import Payment from './components/Payment';
import Orders from './components/Orders'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51I4jNXI6PI1ipyIBRZC3AEx2frX9qJvmELa3SHNhUYbvKVE6eWcRBM8EmUZHoMFdJjWg0xxO7IH8qoCQWivxWcWd00BMdFCYAn');

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    // run only once when the component loads similar to setState in flutter

    auth.onAuthStateChanged(authUser => {
      console.log('The user is authenticated', authUser)

      if(authUser){
         dispatch({
           type: 'SET_USER',
           user: authUser
         })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    }) 
  }, [])

  return (
    //BEM
    <Router>
      <div className="App">   
       <Switch>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/orders">
            <Header/>
            <Orders/>
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
       </Switch> 
      </div>
    </Router>
  );
}

export default App;
