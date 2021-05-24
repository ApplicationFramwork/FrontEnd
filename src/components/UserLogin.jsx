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
                            <div className="card bg-secondary mt-2 loginCard">
                                <i className="fas fa-question-circle"></i>
                                Use your email or Username to login to the system

                            </div>

                        </center>
                        {/*input field for username*/}
                        <form className="form-container">
                            <div className="form-group">
                                <label htmlFor="User_Name" className="text-small text-light mt-2">User Name : </label>
                                <input type="name" className="form-control" id="User_Name"
                                       placeholder="Ex : @John_Wick"/>
                            </div>

                            {/*input feild for password*/}
                            <div className="form-group mt-2">
                                <label htmlFor="password" className="text-light">password :
                                </label>
                                <input type="password" className="form-control" id="password"
                                       aria-describedby="emailHelp" placeholder="*********"/>
                                <small id="emailHelp" className="form-text fPass">
                                    <a href={"#"}> Forgot Password ? </a>
                                </small>
                            </div>

                            {/*check box for remember password*/}
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="flexCheckDefault"/>
                                    <label className="form-check-label text-light" htmlFor="flexCheckDefault">
                                        Remember me
                                    </label>
                            </div>

                            {/*sign in button*/}
                            <a href={"#"}><diV class="btnLogin">
                                <h6 className="text-light p-2">Sign In</h6>
                            </diV></a>

                            {/*create account link*/}
                            <div>
                                <small className="text-light">
                                    New on our platform? <i className="fPass">
                                    <a href={"#"}>Create an account</a>
                                </i>
                                </small>
                            </div>
                            <br/>

                            {/*hr and or*/}
                            <div className="flex item-box row">
                                <div className="col-sm-5">
                                    <hr  className="text-light"/>
                                </div>
                                <div className="col-sm-2">
                                    <i className="text-light">or</i>
                                </div>
                                <div className="col-sm-5">
                                    <hr  className="text-light"/>
                                </div>
                            </div>

                            {/*social media links*/}
                            <center>
                                <div className="ulIcons">
                                    <a href={"#"}><i className="fb fab fa-facebook-f"></i></a>
                                    <a href={"#"}><i className="twit fab fa-twitter"></i></a>
                                    <a href={"#"}><i className="fas fa-envelope mail"></i></a>
                                </div>
                            </center>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default UserLogin;