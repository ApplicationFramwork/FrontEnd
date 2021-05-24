import React, { Component } from 'react';
import logo from '../images/icms 2.png';
class UserLogin extends  Component{
    render() {
        return(
            <div className="container-fluid">
                <div className="row lg-body">
                    <div className="col-sm-8 lg-body">
                        <div className="row">
                            <div className="col-sm-1">
                                <img src={logo} width={"100px"}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 bg-dark">
                        <center>
                            <h3 className="mt-3 text-light">Welcome to ICMS</h3>
                            <small className="text-light"> Please sign to your account and start the adventure</small>
                            <div className="card bg-secondary loginCard">
                                <i className="fas fa-question-circle"></i>
                                Use your email or Username to login to the system

                            </div>

                        </center>
                        <form className="form-container">
                            <div className="form-group">
                                <label htmlFor="name_s" className="text-small text-dark">Name : </label>
                                <input type="name" className="form-control" id="name_s"
                                       placeholder="Ex : John Wick"/>
                            </div>

                            <br/>
                            <div className="form-group">
                                <label htmlFor="email1" className="text-dark">Email Address : </label>
                                <input type="email" className="form-control" id="email1"
                                       aria-describedby="emailHelp" placeholder="email@example.com"/>
                                <small id="emailHelp" className="form-text text-light">We'll never share your
                                    email
                                    with anyone else.</small>
                            </div>

                            <br/>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-primary mb-2">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default UserLogin;