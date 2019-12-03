
import React, { Component } from 'react'

import "./App.css";
import { Route, Switch } from "react-router-dom";


import HomePage from "./pages/homepage/homepage.component";
import ShopComponent from "./pages/shop/ShopComponent";
import HeaderComponent from "./components/header-component/HeaderComponent";
import Auth from "./pages/auth/Auth";
import { auth } from './firebase/FirebaseUtils';

export class App extends Component {


  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    auth.onAuthStateChanged( async user => {
     await this.setState({ currentUser : user});
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <HeaderComponent currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shops" component={ShopComponent} />
          <Route path="/signin" component={Auth} />
        </Switch>
      </div>
    );
  }

}

export default App

