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
import footer from "./components/Footer"
import sidebar from "./components/EditorSidebarComponent";
import Test from "./components/Test"
import about from "./components/AboutUs";



//import axios from 'axios';

/*class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            event:[]
        };
    }
    componentDidMount() {
        this.getEvents();
    }

    getEvents(){
        axios.get('http://localhost:8000/event').then(res=>{

                this.setState({
                    event:res.data
                });
                console.log(this.state.event);

        });
    }
    render() {
        return (
            <div>

            </div>
        );
    }
*/
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
            <Route path = "/about" component = {about}></Route>
            <Route path = "/footer" component = {footer}></Route>
        </div>
        </Router>
    );
}

export default App;