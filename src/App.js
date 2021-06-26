<<<<<<< HEAD
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import IndexPageComponent from './components/indexcomponent';
=======
import React, {Component} from 'react';
import "./App.css";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import CounterClass from "./components/CounterClass";
import CounterFunction from "./components/CounterFunction";
import Header from "./components/Header";
import AddEventComponent from "./components/AddEventComponent";
import ListEvents from "./components/ListEventsComponent";
import EditorDashboardComponent from "./components/EditorDashboardComponent";
import AddConferenceEvent from "./components/AddConferenceEvent";
import UpdateEventsComponent from "./components/UpdateEventsComponent";
import ListWorkshops from "./components/ListWorkshopComponent";
import AddWorkshop from "./components/AddWorkshopComponent";
import UpdateWorkshopComponent from "./components/UpdateWorkshopComponent";
import ViewResearchEvents from "./components/ViewResearchEvents";
import ViewWorkshops from "./components/ViewWorkshops";
import AdminViewResearchEvents from "./components/AdminViewResearchEvents";
import AdminUpdateEvents from "./components/AdminUpdateEvents";
import AdminViewWorkshops from "./components/AdminViewWorkshops";
import AdminAddResearchComponent from "./components/AdminAddResearchComponent";
import AdminUpdateWorkshopsComponent from "./components/AdminUpdateWorkshopsComponent";
import footer from "./components/Footer"
import sidebar from "./components/EditorSidebarComponent";

>>>>>>> 48fb1e3c43d600f4996b4356b5a7ab046a3afb97
import reviwerdash from './components/ReviwerDashcomponent';
import reviwersettings from './components/reviwersettingcomponent';
import reviwerchangepassword from './components/changePasswordcomponent';
import allresearch from './components/allresearch';
import newresearch from './components/newResearch';
import signup from './components/UserSignUpComponent';
import addresearchdoc from './components/Addresearchpapers';
import addproposaldoc from './components/Addproposalpapers';

<<<<<<< HEAD
function App() {
  return (
    <div>

      <Router>
          <Switch>
          <Route path = "/" exact component = {IndexPageComponent}></Route>
          <Route path = "/reviwer/" component = {reviwerdash}></Route>
          <Route path = "/reviwersettings/" component = {reviwersettings}></Route>
          <Route path = "/reviwerchangepassword/" component = {reviwerchangepassword}></Route>
          <Route path = "/allresearch" component = {allresearch}></Route>
          <Route path = "/newresearch"  component = {newresearch}></Route>
          <Route path="/signup" component={signup}></Route>
          <Route path="/addresearchdoc" component={addresearchdoc}></Route>
          <Route path="/addproposalhdoc" component={addproposaldoc}></Route>
        </Switch>
    </Router>
      
    </div>
  );
=======
import Index from "./components/indexpage"
import dash from './components/DashBoard-AdminComponent';
import  dash2 from './components/user-dashboard';
import userProfileComponent from './components/user-profile-component';
import UserLogin from "./components/UserLogin";
import Test from "./components/Test"
import about from "./components/AboutUs";

function App(){
    return(
        <Router>
        <div>
            <Route path="/header" exact component={Header} />
            <div className="container">
            <Switch>
                <Route path="/addEvent" exact component={AddEventComponent} />
            </Switch>
            </div>
            <Route path = "/" exact component = {Index}></Route>
            <Route path = "/login" component = {UserLogin}></Route>
            <Route path = "/dash" component = {dash2}></Route>
            <Route path = "/profile" component = {userProfileComponent}></Route>


            <Route path = "/Test" component = {Test}></Route>
            <Route path = "/side" component = {sidebar}></Route>
            <Route path = "/eventList" component = {ListEvents}></Route>
            <Route path = "/addConferenceEvent" component = {AddConferenceEvent}></Route>
            <Route path = "/editor" component = {EditorDashboardComponent}></Route>
            <Route path = "/updateEvent/:id" component = {UpdateEventsComponent}></Route>
            <Route path = "/workshopList" component = {ListWorkshops}></Route>
            <Route path = "/addWorkshop" component = {AddWorkshop}></Route>
            <Route path = "/updateWorkshop/:id" component = {UpdateWorkshopComponent}></Route>
            <Route path = "/research" component = {ViewResearchEvents}></Route>
            <Route path = "/workshop" component = {ViewWorkshops}></Route>
            <Route path = "/adminResearch" component = {AdminViewResearchEvents}></Route>
            <Route path = "/adminUpdateResearch/:id" component = {AdminUpdateEvents}></Route>
            <Route path = "/adminWorkshop" component = {AdminViewWorkshops}></Route>
            <Route path = "/adminAddResearch" component = {AdminAddResearchComponent}></Route>
            <Route path = "/adminUpdateWorkshop/:id" component = {AdminUpdateWorkshopsComponent}></Route>


            <Route path = "/reviwer/" component = {reviwerdash}></Route>
            <Route path = "/reviwersettings/" component = {reviwersettings}></Route>
            <Route path = "/reviwerchangepassword/" component = {reviwerchangepassword}></Route>
            <Route path = "/allresearch" component = {allresearch}></Route>
            <Route path = "/newresearch"  component = {newresearch}></Route>
            <Route path="/signup" component={signup}></Route>
            <Route path="/addresearchdoc" component={addresearchdoc}></Route>
            <Route path="/addproposalhdoc" component={addproposaldoc}></Route>

            <Route path = "/about" component = {about}></Route>
            <Route path = "/footer" component = {footer}></Route>
        </div>
        </Router>
    );
>>>>>>> 48fb1e3c43d600f4996b4356b5a7ab046a3afb97
}

export default App;
