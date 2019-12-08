import React from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import './HeaderComponent.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/FirebaseUtils';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { createStructuredSelector } from 'reselect';


import { selectCartHiden } from '../../redux/cart/CartSelectors';
import { selectCurrentUser } from '../../redux/user/UserSelectors';

const HeaderComponent = ({ currentUser, hidden }) => (
    <div className="header">
       <Link to='/'>
         <Logo className="logo"/>
       </Link>
       <div className="options">
           <Link className="option" to='/shop'>SHOP</Link>
           <Link className="option" to='/contact'>CONTACT</Link>
       {
         currentUser ?
         <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div> :
         <Link className='option' to='/signin'>SIGN IN</Link>
       }
       <CartIcon/>
       </div>
       { hidden ? null :  <CartDropdown/> }
    </div>
) 
const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
   hidden: selectCartHiden
});
export default connect(mapStateToProps)(HeaderComponent);
