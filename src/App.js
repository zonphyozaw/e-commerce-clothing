import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";


import HomePage from "./pages/homepage/homepage.component";
import ShopComponent from "./pages/shop/ShopComponent";
import HeaderComponent from "./components/header-component/HeaderComponent";




function App() {
  return (
    <div>
      <HeaderComponent/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shops" component={ShopComponent} />
      </Switch>
    </div>
  );
}

export default App;
