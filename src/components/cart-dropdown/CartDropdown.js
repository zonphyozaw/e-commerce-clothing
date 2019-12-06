import React from 'react'
import CustomButton from '../custom-button/CustomButton';
import './CartDropdown.scss';
function CartDropdown() {
  return (
    <div className='cart-dropdown'>
        <div className='cart-items'/>
        <CustomButton>GOT TO CHECKOUT</CustomButton>
   </div>
  )
}

export default CartDropdown




// import React from 'react';
// 
// import './CartDropDown.scss';
// const CartDropdown = () => (
//   <div className='cart-dropdown'>
//        <div className='cart-items'/>
//        <CustomButton>GOT TO CHECKOUT</CustomButton>
//   </div>
// )
// export default CartDropdown;

//12