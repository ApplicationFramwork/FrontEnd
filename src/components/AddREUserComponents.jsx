import React, { Component } from 'react';
import AdminDashboardComponent from "./AdminDashboardComponent";

class AddREUserComponents extends  Component{
    render() {
        return(
            <div class="container-fluid bg-light">
                <div className="row">
                    <div className="col-sm-2  bg-dark text-light">
                        <div className="dropdown">
                            <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                Users
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

                    <div className="col-sm-6 bg-secondary justify-contend-center text-light">
                        <form className="form-container">
                            <div className="form-group">
                                <label for= "name_s" className="text-small text-dark">Name : </label>
                                <input type="name" className="form-control" id="name_s"
                                       placeholder="Ex : John Wick"/>
                            </div>

                            <br/>
                            <div className="form-group">
                                <label htmlFor="email1" className="text-dark">Email Address : </label>
                                <input type="email" className="form-control" id="email1"
                                       aria-describedby="emailHelp" placeholder="email@example.com"/>
                                    <small id="emailHelp" className="form-text text-light">We'll never share your email
                                        with anyone else.</small>
                            </div>

                            <br/>
                            <div className="form-group">
                                <label htmlFor="UserName" className="text-dark">User Name : </label>
                                <input type="name" className="form-control" id="UserName"
                                       placeholder="Ex : @John_Wick"/>
                            </div>

                            <br/>
                            <div className="form-group">
                                <label htmlFor="password" className="text-dark">Password : </label>
                                <input type="password" className="form-control" id="password"
                                       placeholder="Password"/>
                            </div>

                            <br/>
                            <div className="form-group">
                                <label htmlFor="UserRole" className="text-dark">User Role : </label>
                                <select id="UserRole" className="form-control">
                                    <option selected>Editor</option>
                                    <option>Reviewer</option>
                                </select>
                            </div>

                            <br/>
                            <div className="form-group">
                                <label htmlFor="mobile" className="text-dark">Mobile Phone : </label>
                                <input type="number" className="form-control" id="mobile"
                                       placeholder="+94752699587"/>
                            </div>

                            <br/>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-primary mb-2">Submit</button>
                            </div>
                        </form>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        );
    }
}
export default AddREUserComponents;