import React, { Component } from 'react';
import logo from '../images/logo.png'

class reviwersettingcomponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        }

        this.changefirstNameHandler = this.changefirstNameHandler.bind(this);
        this.changelastNameHandler = this.changelastNameHandler.bind(this);
        this.changeemailHandler = this.changeemailHandler.bind(this);
        this.changepasswordHandler = this.changepasswordHandler.bind(this);
    }
    changefirstNameHandler = (event) =>{
        this.setState({firstname: event.target.value});
    }
    changelastNameHandler = (event) =>{
        this.setState({lastname: event.target.value});
    }
    changeemailHandler = (event) =>{
        this.setState({email: event.target.value});
    }
    changepasswordHandler = (event) =>{
        this.setState({email: event.target.value});
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
                            <a href="/reviwerchangepassword"><i class="fa fa-key mt-5 mb-5"></i><span>Change Password</span></a>
                            <a className="active" href="/reviwersettings"><i class="fas fa-sliders-h mt-5 mb-5"></i><span>Account-Settings</span></a>
                    </div>
                    

                    <div class="content">
                        <div className="container-fluid">
                            <div className="glass">
                                <div className="row text-center mb-3">
                                    <div className="col-12 mt-3">
                                        <h1>EDIT REVIWER DETAILS</h1>
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
                                        <div className="col-md-5 ml-2 mr-2 mt-5">
                                            <div className="form-group">
                                                <label>First Name</label>
                                                <input placeholder="First Name" name="firstname" className="form-control"
                                                value={this.state.firstname} onChange={this.changefirstNameHandler} />
                                            </div>
                                        </div>
                                        <div className="col-md-5 ml-2 mr-2 mt-5">
                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input placeholder="Last Name" name="lastname" className="form-control"
                                                value={this.state.lastname} onChange={this.changelastNameHandler}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-md-8 ml-2 mr-2 mt-5">
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input placeholder="Email" name="email" className="form-control"
                                                value={this.state.email} onChange={this.changeemailHandler} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-md-8 ml-2 mr-2 mt-5">
                                            <div className="form-group">
                                                <label>Current-Password</label>
                                                <input placeholder="Current-Password" name="password" className="form-control"
                                                value={this.state.password} onChange={this.changepasswordHandler} />
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

export default reviwersettingcomponent;