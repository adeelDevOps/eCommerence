import React from 'react';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './Components/Footer';
import Productpage from './Components/Productpage';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Productdetails from './Components/Productdetails';
import Signin from './Components/Signin';
import { useSelector } from 'react-redux';
import Register from './Components/Register';
import Profile from './Components/Profile';
import ProductsScreen from './Components/Addnewproduct';


function App() {

  

  return (

    
    <>
      <Router>
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/productpage" exact component={Productpage} />
          <Route path="/productdetail/:id" exact component={Productdetails}/>
          <Route path="/cart/:id?" excat component={Cart}/>
          <Route path="/checkout" excat component={Checkout}/>
          <Route path="/signin" excat component={Signin}/>
          <Route path="/register" excat component={Register}/>
          <Route path="/profile" excat component={Profile}/>
          <Route path="/products" excat component={ProductsScreen}/>
        </Switch>
        
      </Router>
    </>
  );
}

export default App;
