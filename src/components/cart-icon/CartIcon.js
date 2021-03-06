import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/CartAction';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.scss';
import { selectCartItemCount } from '../../redux/cart/CartSelectors';

const CartIcon = ({toggleCartHidden, itemCount}) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon'/>
<span className='item-count'>{itemCount}</span>
  </div>
)



const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemCount
})

export default connect(mapStateToProps,{toggleCartHidden})(CartIcon)
