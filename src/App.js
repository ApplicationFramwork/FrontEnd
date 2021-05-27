import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AdminDashboard from './components/AdminDashboardComponent'
import AddREComponent from './components/AddREUserComponents';
import LoginComponent from './components/UserLogin';
import UserSignup from './components/UserSignUpComponent';
import dash from './components/DashBoard-AdminComponent'
import userProfileComponent from './components/user-profile-component'
import './App.css';
import logo from './images/icms 2.png';

function App() {
    return (

        <div>
            <Router>
                <switch>
                    <Route path = "/" exact component = {LoginComponent}></Route>
                    <Route path = "/dash" exact component={dash}></Route>
                    <Route path ="/profile" exact component={userProfileComponent}></Route>
                </switch>
            </Router>
        </div>

    );
}
export default App;
