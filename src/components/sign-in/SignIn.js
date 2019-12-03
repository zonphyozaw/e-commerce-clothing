import React, { useState } from 'react'


import FormInput from '../form-input/FormInput';

import './SignIn.scss';
import CustomButton from '../custom-button/CustomButton';



const SignIn = () => {
    const [ state, setState ] = useState({
      email: '',
      password: ''
    })

    const handleSubmit = async e => {
       e.preventDefault();
       setState({email:'', password:''});
    }

    const handleChange = async e => {
      const {value, name} = e.target;
      setState(prevState => ({...prevState,[name]:value}));
      console.log(state);
    }  

    return (
      <div className='sign-in'>
        <h2>I already have an account </h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>

          <FormInput 
          name='email' 
          type='email' 
          value={state.email} 
          required 
          label='email'
          handleChange={handleChange}/>
          

          <FormInput 
          name='password'
          type='password'
          value={state.password}
          required
          label='password'
          handleChange={handleChange}/>
 

          <CustomButton type='submit' value='Submit form'>Sign In</CustomButton>
        </form>
      </div>
    )
}

export default SignIn
