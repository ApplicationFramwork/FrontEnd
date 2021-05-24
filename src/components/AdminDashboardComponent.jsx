import React, { Component } from 'react';
import lineGraph from '../images/lineGraph.png';
import piechart from '../images/piechart.png';
import allusers from './UserListComponents';
class AdminDashboardComponent extends Component{
    render() {
        return (
            <div class="container-fluid bg-light">
                <div className="row">
                    <div className="col-sm-2 bg-dark text-light">
                        <div class="dropdown">
                            <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Users
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href={allusers}>All Users</a></li>
                                <li><a class="dropdown-item" href="#">Add Users</a></li>
                               <li><a class="dropdown-item" href="#">Search</a></li>
                            </ul>
                        </div>
                        <hr className="text-light"/>
                        <div class="dropdown my-2">
                            <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Researches
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                               <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <hr className="text-light"/>
                        <div class="dropdown my-2">
                            <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Events
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                               <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <hr className="text-light"/>
                    </div>
                    
                    <div className="col-sm-10 text-light">
                       <center><b><h3 className="bg-info text-dark m-1"> User Details </h3></b></center>
                        <div className="row">
                            <div class="col-sm-3 card m-1">
                                <center><b><span className="align-top text-dark">Total User Count</span></b></center>
                                <small>All users</small>
                                <h1><span className="text-primary font-weight-medium text-lh-sm">
                                        <span className="fas fa-arrow-up text-success small"></span>
                                        +10000
                                    </span> </h1><center>
                                <small className="text-dark"> view all user details</small></center>
                                <br/>
                                <button type="button" className="btn btn-danger">View</button>
                            </div>


                            <div class="col-sm-5 card bg-light m-1">
                                <img src={lineGraph}/>
                            </div>

                            <div className="col-sm-3 card bg-light m-1">
                                <img src={piechart}/>
                            </div>

                        </div>
                        <hr className="text-dark "/>

                        <div className="row">
                            <center><b><h3 className="bg-info text-dark m-1"> Research Details </h3></b></center>
                            <div className="col-sm-3 card m-1">
                                <center><b><span className="align-top text-dark">Total Research Count</span></b></center>
                                <small>All users</small>
                                <h1><span className="text-primary font-weight-medium text-lh-sm">
                                        <span className="fas fa-arrow-up text-success small"></span>
                                        +10000
                                    </span></h1>
                                <center>
                                    <small className="text-dark"> view all user details</small></center>
                                <br/>
                                <button type="button" className="btn btn-danger">View</button>
                            </div>


                            <div className="col-sm-5 card bg-light m-1">
                                <img src={lineGraph}/>
                            </div>

                            <div className="col-sm-3 card bg-light m-1">
                                <img src={piechart}/>
                            </div>
                        </div>
                        <hr className="text-dark "/>

                        <div className="row">
                            <center><b><h3 className="bg-info text-dark m-1"> Events Details </h3></b></center>
                            <div className="col-sm-3 card m-1">
                                <center><b><span className="align-top text-dark">Total events Count</span></b></center>
                                <small>All users</small>
                                <h1><span className="text-primary font-weight-medium text-lh-sm">
                                        <span className="fas fa-arrow-up text-success small"></span>
                                        +10000
                                    </span></h1>
                                <center>
                                    <small className="text-dark"> view all user details</small></center>
                                <br/>
                                <button type="button" className="btn btn-danger">View</button>
                            </div>


                            <div className="col-sm-5 card bg-light m-1">
                                <img src={lineGraph}/>
                            </div>

                            <div className="col-sm-3 card bg-light m-1">
                                <img src={piechart}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default AdminDashboardComponent;