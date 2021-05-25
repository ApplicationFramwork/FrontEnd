import React, { Component } from 'react';
import conferenceManagementSystemServices from "../services/ConferenceManagementSystemServices";
import {Table} from "react-bootstrap";
import logo from "../images/logo.png";

class ListEventsComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            events: []
        }
    }
    componentDidMount(){
        conferenceManagementSystemServices.getEvents().then((res) => {
            //events2: this.state.events.filter(event => event.type !=="Workshop")
            this.setState({ events: res.data});
        });
    }
    delete(id){
        conferenceManagementSystemServices.deleteEvent(id).then(res=>{
            this.setState({events : this.state.events.filter(event => event._id !==id)});
        })
    }
    editEvent(id){
        console.log('event id'+id);
        this.props.history.push('/updateEvent/'+ id);
    }
    render() {
        return (
            <div className="container-fluid bg-light">
                {/*Editor sidebar*/}
                <div className="row">
                    <div className="col-sm-2  bg-dark text-light">
                        <div className="dropdown">
                            <img src={logo} height={"150px"} width={"150px"}/>
                            <br/>
                            <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-calendar-alt"></i> &nbsp;
                                Home Page
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href={"/editor"}>Navigate to Homepage</a></li>
                            </ul>
                        </div>
                        <hr className="text-light"/>
                        <div className="dropdown my-2">
                            <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-calendar-alt"></i> &nbsp;
                               Add Event
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href={"/addConferenceEvent"}>Click to Add New Event</a></li>
                            </ul>
                        </div>
                        <hr className="text-light"/>
                        <div className="dropdown my-2">
                            <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-calendar-alt"></i> &nbsp;
                                View Upcoming Events
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">View Upcoming Events</a></li>
                            </ul>
                        </div>
                        <hr className="text-light"/>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    </div>
                    <div className="col-sm-10">
                        <div className="row">
                            <nav className="navbar navbar-light bg-light">
                                <div className="container-fluid">
                                    <form className="d-flex">
                                        <input className="form-control me-2" type="search" placeholder="Search"
                                               name="searchQuery"aria-label="Search"/>
                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                </div>
                            </nav>
                            </div>
                        <div className="row">
                            <div className="collapse" id="navbarToggleExternalContent">
                                <div className="bg-dark p-4">
                                    <h5 className="text-white h4">Editor Dashboard</h5>
                                    <span className="text-muted">{this.state.currentDateTime}</span>
                                </div>
                            </div>
                            <nav className="navbar navbar-dark bg-dark">
                                <div className="container-fluid">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#navbarToggleExternalContent"
                                            aria-controls="navbarToggleExternalContent" aria-expanded="false"
                                            aria-label="Toggle navigation">
                                        <span className="fas fa-angle-down"></span>
                                    </button>
                                </div>
                            </nav>
                        </div>
                        {/*Add Event*/}
                        <div className="row">

                            <div className="container">
                                <br/>
                                <Table className="table" striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th scope="col"> Title</th>
                                        <th scope="col"> Event Type</th>
                                        <th scope="col"> Description</th>
                                        <th scope="col"> Start Date</th>
                                        <th scope="col"> Time</th>
                                        <th scope="col"> Venue</th>
                                        <th scope="col"> Organized By</th>
                                        <th scope="col"> Event Status</th>
                                        <th scope="col"> Update</th>
                                        <th scope="col"> Delete</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.state.events.map(
                                            event =>
                                                <tr key = {event._id}>
                                                    <td>{event.title}</td>
                                                    <td>{event.eventType}</td>
                                                    <td> {event.description} </td>
                                                    <td> {event.startDate}</td>
                                                    <td> {event.duration}</td>
                                                    <td> {event.venue}</td>
                                                    <td> {event.organizedBy}</td>
                                                    <td> {event.eventStatus}</td>
                                                    <td>
                                                        <button style={{marginLeft: "10px"}}  className="btn btn-warning" onClick={ () => this.editEvent(event._id)}>
                                                            Update
                                                            <i className="fas fa-edit"></i>
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button style={{marginLeft: "10px"}}  className="btn btn-danger"onClick={ () => this.delete(event._id)}>
                                                            Delete
                                                            <i className="fas fa-trash-alt"></i>
                                                        </button>
                                                    </td>
                                                    <br/>
                                                </tr>
                                        )
                                    }
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ListEventsComponent;