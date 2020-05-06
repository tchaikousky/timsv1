import React, { Component } from 'react';
import Navbar from './components/Navbar';
import HomepageHero from './components/HomepageHero';
import HomepageAboutUs from './components/HomepageAboutUs';
import Contact from './components/Contact';
import DashboardMain from './components/DashboardMain';
import Login from './components/Login';
import Footer from './components/Footer';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from './components/SignUp';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {id: null},
      loginAttempted: false
    }
    this.changeUser = this.changeUser.bind(this);
    this.changeLoginAttempted = this.changeLoginAttempted.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
  };

  changeUser(user) {
    this.setState({
      user: {id: user.id}
    });
  };

  changeLoginAttempted() {
    this.setState({
      loginAttempted: true
    });
  };

  logoutUser() {
    this.setState({
      user: {id: null}
    });
  };

  render() {
    console.log(this.state.user);
    return (
      <Router>
      <div className="App">
        
        <Switch>
          <Route path="/dashboard">
            <DashboardMain user={this.state.user}/>
          </Route>
          <Route path="/login">
            <Login action={this.changeUser} login={this.changeLoginAttempted} loginAttempted={this.state.loginAttempted} />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <HomepageHero />
            <HomepageAboutUs />
            <Contact />
            <Footer />
          </Route>
        </Switch>
        <Navbar userid={this.state.user.id} action={this.logoutUser}/>
      </div>
      </Router>
    );
  }
  
}

export default App;
