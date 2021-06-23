import React, {Component} from 'react';
import conferenceManagementSystemServices from "../services/ConferenceManagementSystemServices";
import logo from "../images/logo.png";
import wallpaper from "../images/Workshop.jpg";

class ViewWorkshops extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentDateTime: Date().toLocaleString(),
            workshops: []
        }
    }
    componentDidMount(){
        conferenceManagementSystemServices.getWorkshop().then((res) => {
            this.setState({ workshops: res.data});
        });
    }
    render() {
        return (
            <div className="container-fluid bg-light">
                {/*Editor sidebar*/}
                <div className="row">
                    <div className="col-sm-2 bg-dark text-light">
                        <div className="dropdown">
                            <img src={logo} height={"150px"} width={"150px"}/>
                            <br/>
                            <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-calendar-alt"></i> &nbsp;
                                View Events
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">All Users</a></li>
                                <li><a className="dropdown-item" href="#">Add Users</a></li>
                                <li><a className="dropdown-item" href="#">Search</a></li>
                            </ul>
                        </div>
                        <hr className="text-light"/>
                        <div className="dropdown my-2">
                            <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-calendar-alt"></i> &nbsp;
                                Researches
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <hr className="text-light"/>
                        <div className="dropdown my-2">
                            <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-calendar-alt"></i> &nbsp;
                                Events
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <hr className="text-light"/>
                    </div>
                    <div className="col-sm-10">
                        <div className="row">
                            <div className="collapse" id="navbarToggleExternalContent">
                                <div className="bg-dark p-4">
                                    <h5 className="text-white h4">Upcoming Research Presentation Events</h5>
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
                            <div className="row">
                                <img src={wallpaper}/>
                            </div>
                            {/*Display Event Details*/}
                            <div className="container">
                                <div className="row">
                                    {
                                        this.state.workshops.map(
                                            workshops =>
                                                <div className="col-md-4">
                                                    <div className="card mt-3 sellercard">
                                                        <div className="product text-center mt-3">
                                                            <h2>Upcoming Workshops</h2>
                                                            <h5>{workshops.title}</h5>
                                                            <div className="mt-3 info">
                                                                <span className="text1 d-block mb-3">{workshops.description}</span>
                                                                <span className="text1 ">Time {workshops.duration} </span>
                                                            </div>
                                                            <div className="mt-3 info">
                                                                <span className="text1 ">Status {workshops.eventStatus} </span>
                                                            </div>
                                                            <div className="cost mt-3 text-dark">
                                                                <span>{workshops.date}</span>
                                                            </div>
                                                        </div>
                                                        <div className="row mt-8">
                                                            <div className="col-md-6">
                                                                <div className="p-3 text-center text-white mt-2 cursor">
                                                                    <button className="btn btn-warning btn-block">
                                                                        <i className="fas fa-edit"></i>&nbsp;
                                                                        Attend Workshop
                                                                    </button>
                                                                    <br/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewWorkshops;