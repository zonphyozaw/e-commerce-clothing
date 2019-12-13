
import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';



import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopComponent from "./pages/shop/ShopComponent";
import HeaderComponent from "./components/header-component/HeaderComponent";
import Auth from "./pages/auth/Auth";
import { auth, createUserProfileDocument } from './firebase/FirebaseUtils';
import {setCurrentUser} from './redux/user/UserActions';
import { selectCurrentUser } from './redux/user/UserSelectors';
import { createStructuredSelector } from 'reselect';
import CheckOut from './pages/checkout/CheckOut';




export class App extends Component {
 
  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
             setCurrentUser({
             id: snapShot.id,
             ...snapShot.data()
           })
        });
      }
      setCurrentUser({currentUser: userAuth });
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <HeaderComponent/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopComponent}/>
          <Route path="/checkout" component={CheckOut}/>
          <Route path="/auth" render={()=> this.props.currentUser ? <Redirect to='/'/>:<Auth/>}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);

// start from 12

