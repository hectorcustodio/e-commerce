import React from 'react';
import './App.css';
import HomePage from './page/homepage/homepage.component';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './page/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './page/sign-in-sign-up/sign-insign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors';
import { StateInterface } from './model/state-interface';
import CheckoutPage from './page/checkout/checkout.component';

class App extends React.Component<{ setCurrentUser: any, currentUser: any }, Record<string, any>>{

  unsubscribeFromAuth: any

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef?.onSnapshot(snapshot => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() })
        })
      }
      setCurrentUser(userAuth)
    })
  }

  checkIfLogged() {
    return this.props.currentUser ? (<Redirect to="/"></Redirect>) : (<SignInAndSignUpPage></SignInAndSignUpPage>)
  }

  render() {
    return (
      <div>
        <Header />
        
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.checkIfLogged()} />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state: StateInterface) => ({
  currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
