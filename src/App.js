import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";


import HomePage from "./pages/homepage/homepage.component";
import ShopComponent from "./pages/shop/ShopComponent";
import HeaderComponent from "./components/header-component/HeaderComponent";
import Auth from "./pages/auth/Auth";




function App() {
  return (
    <div>
      <HeaderComponent/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shops" component={ShopComponent} />
        <Route path="/signin" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
