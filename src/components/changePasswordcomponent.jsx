import React, { Component } from 'react';
import logo from '../images/logo.png'

class changePasswordcomponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            currentpassword: '',
            newpassword: '',
            reenterpassword: ''
        }

        this.changepasswordHandler= this.changepasswordHandler.bind(this);
        this.changenewpassHandler= this.changenewpassHandler.bind(this);
        this.changereenterpassHandler= this.changereenterpassHandler.bind(this);
    }
    changepasswordHandler = (event) =>{
        this.setState({currentpassword: event.target.value});
    }
    changenewpassHandler = (event) =>{
        this.setState({newpassword: event.target.value});
    }
    changereenterpassHandler = (event) =>{
        this.setState({reenterpassword: event.target.value});
    }
    render() {
        return (
            <body>
                    <input type="checkbox" id="check"></input>
                    
                    <header>
                        <label for="check">
                            <i class="fas fa-bars" id="sidebar_btn"></i>
                        </label>
                        <div class="left_area">
                            <img src={logo} alt="" />
                        </div>
                        <div class="right_area">
                            <a href="/" class="logout_btn">Logout</a>
                        </div>
                    </header>
                    
                    <div class="mobile_nav">
                        <div class="nav_bar">
                            <i class="fa fa-bars nav_btn"></i>
                        </div>
                        <div class="mobile_nav_items">
                            <a href="/reviwer"><i class="fas fa-desktop"></i><span>Dashboard</span></a>
                            <a href="/reviwerachivement"><i class="fas fa-info-circle"></i><span>Achievement</span></a>
                            <a href="/reviwersettings"><i class="fa fa-key"></i><span>Change Password</span></a>
                            <a href="/reviwersettings"><i class="fas fa-sliders-h"></i><span>Account-Settings</span></a>
                        </div>
                    </div>
                    
                    <div class="sidebar">
                            <a href="/reviwer"><i class="fas fa-desktop mt-5 mb-5"></i><span>Dashboard</span></a>
                            <a href="/reviwerachivement"><i class="fas fa-info-circle mt-5 mb-5"></i><span>Achievement</span></a>
                            <a className="active" href="/reviwerchangepassword"><i class="fa fa-key mt-5 mb-5"></i><span>Change Password</span></a>
                            <a href="/reviwersettings"><i class="fas fa-sliders-h mt-5 mb-5"></i><span>Account-Settings</span></a>
                    </div>
                    

                    <div class="content">
                        <div className="container-fluid">
                            <div className="glass">
                                <div className="row text-center mb-3">
                                    <div className="col-12 mt-3">
                                        <h1>EDIT PASSWORD</h1>
                                        <div className="row ">
                                            <div className="col-md-4"></div>
                                            <div className="col-md-4 d-flex justify-content-center">
                                                <div className="breake">
                                                </div>
                                            </div>
                                            <div className="col-md-4"></div>
                                        </div>
                                    </div>
                                </div>
                                <form className="form-container">
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-md-8 ml-2 mr-2 mt-5">
                                            <div className="form-group">
                                                <label>Current-Password</label>
                                                <input placeholder="Current-Password" name="password" className="form-control"
                                                value={this.state.currentpassword} onChange={this.changepasswordHandler} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-md-8 ml-2 mr-2 mt-5">
                                            <div className="form-group">
                                                <label>New-Password</label>
                                                <input placeholder="New-Password" name="newpassword" className="form-control"
                                                value={this.state.newpassword} onChange={this.changenewpassHandler} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-md-8 ml-2 mr-2 mt-5">
                                            <div className="form-group">
                                                <label>Reenter-Password</label>
                                                <input placeholder="Reenter-Password" name="reenternewpassword" className="form-control"
                                                value={this.state.reenterpassword} onChange={this.changereenterpassHandler} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row d-flex justify-content-center">
                                    <div className="row  mb-5">
                                        <div className=" mb-5"></div>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </body>
        );
    }
}

export default changePasswordcomponent;