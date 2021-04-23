import React, { FormEvent } from 'react'
import './sign-in.style.scss'
import FormInput from '../form-input/form-input.component';
import FormButton from '../form-button/form-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';


class SignIn extends React.Component<{}, Record<string, string>>{
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({
        email: '',
        password: '',
      })
    } catch (error) {
      console.log(error)
    }

  }

  handleChange = (event: any) => {
    const { value, name } = event.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput label='email' name="email" value={this.state.email} handleChange={this.handleChange} required />
          <FormInput label='password' type="password" name="password" value={this.state.password} handleChange={this.handleChange} required />
          <div className='buttons'>
            <FormButton type="submit" >Sign In</FormButton>
            <FormButton type="button" onClick={signInWithGoogle} isGoogleSignin>{''}Sign In with Google{''}</FormButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn