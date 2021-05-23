import React, { Component } from 'react';
import logo from '../images/logo.png'

class ReviwerDashcomponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            email: ''
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);

    }
    changeNameHandler = (event) =>{
        this.setState({name: event.target.value});
    }
    changeEmailHandler = (event) =>{
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
                            <a href="/reviwersettings"><i class="fas fa-sliders-h"></i><span>Settings</span></a>
                        </div>
                    </div>
                    
                    <div class="sidebar">
                    
                            <a className="active" href="/reviwer"><i class="fas fa-desktop mt-5 mb-5"></i><span>Dashboard</span></a>
                            <a href="/reviwerachivement"><i class="fas fa-info-circle mt-5 mb-5"></i><span>Achievement</span></a>
                            <a href="/reviwersettings"><i class="fas fa-sliders-h mt-5 mb-5"></i><span>Settings</span></a>
                    </div>
                    

                    <div class="content">
                        <div className="container-fluid">
                            <div className="glass">
                                <div className="row">
                                    <div className="col-md-4 mt-5 ml-5 mr-5">
                                        <div className="col-12">
                                            <div className="form-group">
                                            <label>Name</label>
                                            <input placeholder="Item name" name="name" className="form-control"
                                            value={this.state.name} onChange={this.changeItemNameHandler} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                            <label>Email</label>
                                            <input placeholder="Item name" name="Email" className="form-control"
                                            value={this.state.email} onChange={this.changeItemNameHandler}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row text-center mb-3">
                                    <div className="col-12 mt-2">
                                        <h1>RESEARCH</h1>
                                        <div className="row ">
                                            <div className="col-md-5"></div>
                                            <div className="col-md-2 d-flex justify-content-center">
                                                <div className="breake">
                                                </div>
                                            </div>
                                            <div className="col-md-5"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div class="col-md-2 box boody mt-1 mb-2"><a href="/">
                                        <h2 class="skillname text-center">HTML</h2>
                                        <div class="cricle"></div>
                                        <img src={logo} alt="" class="skills"/></a>
                                    </div>
                                    <div class="col-md-2 box boody mt-1 mb-2"><a href="/">
                                        <h2 class="skillname text-center">CSS</h2>
                                        <div class="cricle"></div>
                                        <img src={logo} alt="" class="skills"/></a>
                                    </div>
                                    <div class="col-md-2 box boody mt-1 mb-2"><a href="/">
                                        <h2 class="skillname text-center">REACT</h2>
                                        <div class="cricle"></div>
                                        <img src={logo} alt="" class="skills"/></a>
                                    </div>
                                    <div class="col-md-2 box boody mt-1 mb-2"><a href="/">
                                        <h2 class="skillname">NODE JS</h2>
                                        <div class="cricle"></div>
                                        <img src={logo} alt="" class="skills"/></a>
                                    </div>
                                </div>
                                <div className="row text-center mt-3">
                                    <div className="col-12 mt-2 mb-3">
                                        <h1>PROPOSAL</h1>
                                        <div className="row ">
                                            <div className="col-md-5"></div>
                                            <div className="col-md-2 d-flex justify-content-center">
                                                <div className="breake">
                                                </div>
                                            </div>
                                            <div className="col-md-5"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2 mb-5">
                                    <div class="col-md-2 box boody mt-1 mb-2"><a href="/">
                                        <h2 class="skillname text-center">HTML</h2>
                                        <div class="cricle"></div>
                                        <img src={logo} alt="" class="skills"/></a>
                                    </div>
                                    <div class="col-md-2 box boody mt-1 mb-2"><a href="/">
                                        <h2 class="skillname text-center">CSS</h2>
                                        <div class="cricle"></div>
                                        <img src={logo} alt="" class="skills"/></a>
                                    </div>
                                    <div class="col-md-2 box boody mt-1 mb-2"><a href="/">
                                        <h2 class="skillname text-center">REACT</h2>
                                        <div class="cricle"></div>
                                        <img src={logo} alt="" class="skills"/></a>
                                    </div>
                                    <div class="col-md-2 box boody mt-1 mb-2"><a href="/">
                                        <h2 class="skillname">NODE JS</h2>
                                        <div class="cricle"></div>
                                        <img src={logo} alt="" class="skills"/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </body>
        );
    }
}

export default ReviwerDashcomponent;