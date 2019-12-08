import React from 'react'
import { connect } from 'react-redux';


import CustomButton from '../custom-button/CustomButton';
import './CartDropdown.scss';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/CartSelectors'
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';



const CartDropdown = ({cartItems, history}) => {
  return (
    <div className='cart-dropdown'>
        <div className='cart-items'>
          { 
            cartItems.length ?
            cartItems.map( cartItem => <CartItem  key={cartItem.id} item={cartItem}/>)
            :
            <span className="empty-message">There is no item!</span>
          }
        </div>
        <CustomButton onClick={()=> history.push('/checkout')}>GOT TO CHECKOUT</CustomButton>
   </div>
  )
}


const mapStateToProps = createStructuredSelector ({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown))
