import React from 'react'
import { connect } from 'react-redux';


import CustomButton from '../custom-button/CustomButton';
import './CartDropdown.scss';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/CartSelectors'


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


const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
})
export default connect(mapStateToProps)(CartDropdown)
