import React from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header';
import Books from './components/Books/Books';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Home from './components/Home/Home';
import ProfileUpdate from './components/ProfileUpdate/ProfileUpdate';

class App extends React.Component{
  render(){
    return(
      <div className="">
        <Header/>
     
        <Router>
          <Switch> 
            <Route path= "/Books"><Books/></Route>
            <Route path= "/Cart"><Cart/></Route>
            <Route path= "/Checkout"><Checkout/></Route>
            <Route path="/Home"><Home/></Route>
            <Route path="/profile"><ProfileUpdate/></Route>
            <Route exact path= "/"><Redirect to = "/Home"></Redirect></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;