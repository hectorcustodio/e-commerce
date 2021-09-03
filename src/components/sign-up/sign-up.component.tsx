import React from 'react'
import FormInput from '../form-input/form-input.component';
import FormButton from '../form-button/form-button.component';
import './sign-up.styles.scss'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

interface SignUpInterface extends Record<string, any> {
  displayName: string
  email: string
  password: string
  confirmPassword: string
}


class SignUp extends React.Component<{}, SignUpInterface>{
  constructor(props: any) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async (event: any) => {
    event.preventDefault()
    const { displayName, email, password, confirmPassword } = this.state
    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, { displayName })
      this.state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
    catch (error) {
      console.error(error)
    }
  }

  handleChange = (event: any) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput type='text' name='displayName' value={displayName} handleChange={this.handleChange} label='Display Name' required></FormInput>
          <FormInput type='email' name='email' value={email} handleChange={this.handleChange} label='Email' required></FormInput>
          <FormInput type='password' name='password' value={password} handleChange={this.handleChange} label='Password' required></FormInput>
          <FormInput type='password' name='confirmPassword' value={confirmPassword} handleChange={this.handleChange} label='Confirm Password' required></FormInput>
          <FormButton type='submit'>SIGN UP</FormButton>
        </form>
      </div>
    )
  }

}

export default SignUp