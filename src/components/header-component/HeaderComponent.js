import React from 'react'
import {Link} from 'react-router-dom';

import './HeaderComponent.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';

const HeaderComponent = () => (
    <div className="header">
       <Link to='/'>
         <Logo className="logo"/>
       </Link>
       <div className="options">
           <Link className="option" to='/shop'>SHOP</Link>
           <Link className="option" to='/contact'>CONTACT</Link>
       </div>
    </div>
)

export default HeaderComponent
