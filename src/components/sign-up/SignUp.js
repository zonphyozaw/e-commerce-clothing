import React,{useState} from 'react'


import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import {auth, createUserProfileDocument} from '../../firebase/FirebaseUtils';
import './SignUp.scss';

function SignUp() {
  const [state,setState] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = async event => {
    event.preventDefault();
    const {displayName, email, password, confirmPassword} = state;
    if(password !== confirmPassword){
      alert('password did not match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, {displayName});
      setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (err) {
      console.error(err);
    }
  }


  const handleChange  = event => {
    const {name,value } = event.target;
    setState(prevState => ({...prevState,[name]: value}));
  }


  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with you email and password</span>  
      <form className='sign-up-form' onSubmit={handleSubmit}>
      
      <FormInput 
      type='text' 
      value={state.displayName} 
      onChange={handleChange} 
      name='displayName'
      label='Display Name'
      required/>

      <FormInput 
      type='email' 
      value={state.email} 
      onChange={handleChange} 
      name='email'
      label='email'
      required/>

           
      <FormInput 
      type='password' 
      value={state.password} 
      onChange={handleChange} 
      name='password'
      label='Password'
      required/>

      <FormInput 
      type='password' 
      value={state.confirmPassword} 
      onChange={handleChange} 
      name='confirmPassword'
      label='Confirm Password'
      required/>
      
      <CustomButton type='submit'>SIGN UP</CustomButton>
    


      </form>
    </div>
  )
}

export default SignUp
