import React from 'react';

import './Auth.scss';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';



const Auth = () => {
  return (
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
  )
}

export default Auth;
