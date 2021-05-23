import React, {Component} from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import CounterClass from "./components/CounterClass";
import CounterFunction from "./components/CounterFunction";
import Header from "./components/Header";
import AddEventComponent from "./components/AddEventComponent";
import ListEvents from "./components/ListEventsComponent";
import EditorDashboardComponent from "./components/EditorDashboardComponent";
import AddConferenceEvent from "./components/AddConferenceEvent";
import UpdateEventsComponent from "./components/UpdateEventsComponent";
import Test from "./components/Test"



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

            <Header/>
            <div className="container">

            <Switch>

                <Route path="/addEvent" exact component={AddEventComponent} />

                <Route path = "/Test" component = {Test}></Route>



            </Switch>

            </div>
            <Route path = "/eventList" component = {ListEvents}></Route>
            <Route path = "/addConferenceEvent" component = {AddConferenceEvent}></Route>
            <Route path = "/editor" component = {EditorDashboardComponent}></Route>
            <Route path = "/updateEvent" component = {UpdateEventsComponent}></Route>


        </div>
        </Router>
    );
}

export default App;