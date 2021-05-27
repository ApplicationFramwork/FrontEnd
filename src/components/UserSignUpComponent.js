import React, { Component } from 'react';
import logo from '../images/icms 2.png';

class UserSignUpComponent extends Component{
    render() {
        return(
            <div className="container-fluid signup-bdy">
                <div className="row">
                    <div className="col-sm-7">
                        <div>
                            <img src = {logo} width={"15%"}/>
                        </div>
                    </div>

                    <div className="col-sm-5 signUpForm mt-4">
                        <center>
                            <h3 className="text-dark headdingIcms">
                                Welcome to ICMS
                            </h3>

                            <div className="card opacity-3 bg-secondary">
                                <i className="text-mute">International Conference Management System</i>
                            </div>
                            <hr className="m-2"/>
                        </center>
                            <form className="form-container">
                                <div className="form-group">
                                    <label htmlFor="User_Name" className="text-small text-light">User Name : </label>
                                     <input type="name" className="form-control" id="User_Name"
                                           placeholder="Ex : @John_Wick"/>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label htmlFor="User_Name" className="text-small text-light">Password : </label>
                                        </div>
                                        <div className="col-sm-6">
                                            <label htmlFor="User_Name" className="text-small text-light">Confirm Password : </label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <input type="password" className="form-control" id="password"
                                                   placeholder="******"/>
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="password" className="form-control" id="c_password"
                                                   placeholder="******"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="row m-1 text-light">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="Radios"
                                               id="Radios" value="Researcher"/>
                                        <label className="form-check-label" htmlFor="Radios">
                                            Researcher
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="Radios"
                                               id="Radios" value="Conference_Conductor"/>
                                        <label className="form-check-label" htmlFor="Radios">
                                            Work Conductor
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="Radios"
                                               id="Radios" value="Conference_Conductor"/>
                                        <label className="form-check-label" htmlFor="Radios">
                                            Attendee
                                        </label>
                                    </div>
                                </div>
                                <div className="card bg-secondary">
                                    <i className="text-warning"><i className="fas fa-exclamation-triangle m-2"></i>
                                        Note : You should provide your document before sign in to the system </i>
                                </div>
                                <input className="form-control bg-success mt-2" type="file" id="formFileDisabled" />

                                <div className="form-check my-2">
                                    <input className="form-check-input" type="radio" name="agreement"
                                           id="agreement" value="" />
                                    <small className="form-check-label text-light" htmlFor="Radios">
                                        I agree to the <i className="text-primary"> terms and privacy policy. </i>
                                    </small>
                                </div>

                                <button type="button" className="btn btn-info">Sign Up</button>
                                <div>
                                    <small className="text-light">
                                        Already have an account? <i className="text-info">Login</i>
                                    </small>
                                </div>
                            </form>

                    </div>
                </div>
            </div>
        )
    }
}
export default  UserSignUpComponent;