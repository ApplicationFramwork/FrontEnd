import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AdminDashboard from './components/AdminDashboardComponent'
import AddREComponent from './components/AddREUserComponents';
import LoginComponent from './components/UserLogin';
import UserSignup from './components/UserSignUpComponent';
import './App.css';
import logo from './images/icms 2.png';

function App() {
    return (

        <div>
            <Router>
                <switch>
                    <Route path = "/" exact component = {UserSignup}></Route>
                </switch>
            </Router>
        </div>

    );
}
export default App;
