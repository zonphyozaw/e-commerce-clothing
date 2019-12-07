import React from 'react'
import { connect } from 'react-redux';


import CustomButton from '../custom-button/CustomButton';
import './CartDropdown.scss';
import CartItem from '../cart-item/CartItem';


const CartDropdown = ({cartItems}) => {
  return (
    <div className='cart-dropdown'>
        <div className='cart-items'>
          {
            cartItems.map(cartItem => <CartItem  key={cartItem.id} item={cartItem}/>)
          }
        </div>
        <CustomButton>GOT TO CHECKOUT</CustomButton>
   </div>
  )
}


const mapStateToProps = ({cart: { cartItems }}) => ({
  cartItems
})
export default connect(mapStateToProps)(CartDropdown)
