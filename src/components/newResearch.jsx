import React, { Component } from 'react';
import logo from '../images/logo.png';

class newResearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            research_topic: '',
            submiteremail: '',
            reseach_description: '',
            status:'',
            doc: ''

        }
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
                    <a href="/reviwerchangepassword"><i class="fa fa-key"></i><span>Change Password</span></a>
                    <a href="/reviwersettings"><i class="fas fa-sliders-h"></i><span>Account-Settings</span></a>
                </div>
            </div>
            
            <div class="sidebar">
                    <a href="/reviwer"><i class="fas fa-desktop mt-5 mb-5"></i><span>Dashboard</span></a>
                    <a href="/reviwerchangepassword"><i class="fa fa-key mt-5 mb-5"></i><span>Change Password</span></a>
                    <a href="/reviwersettings"><i class="fas fa-sliders-h mt-5 mb-5"></i><span>Account-Settings</span></a>
            </div>
            

            <div class="content">
                <div className="container-fluid">
                    <div className="glass">
                        <div className="row text-center mb-3">
                            <div className="col-12 mt-5">
                                <h1>NEW RESEARCH</h1>
                                <div className="row ">
                                    <div className="col-md-4"></div>
                                    <div className="col-md-4 d-flex justify-content-center mb-5">
                                        <div className="breake">
                                        </div>
                                    </div>
                                    <div className="col-md-4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="glass pagetopic" >
                        <div className="row text-center">
                            <div className="col-md-4 mt-3 mb-3">
                                <h1>Research Topic</h1>
                            </div>
                            <div className="col-md-3 mt-3 mb-3">
                                <h1>Status</h1>
                            </div>
                            <div className="col-md-2 mt-3 mb-3">
                                <h1>Review Point</h1>
                            </div>
                            <div className="col-md-3 mt-3 mb-3">
                                <h1>Reviwe Count</h1>
                            </div>
                        </div>
                    </div>
                    <div className="glass mt-3 mb-2">
                        <div className="row text-center">
                            <div className="col-md-4 mt-2">
                                <h4>Research Topic</h4>
                            </div>
                            <div className="col-md-3 mt-2">
                                <h4>Status</h4>
                            </div>
                            <div className="col-md-2 mt-2">
                                <h4>Review Point</h4>
                            </div>
                            <div className="col-md-3 mt-2">
                                <h4>Review Count</h4>
                            </div>
                        </div>
                        <div className="row text-center mt-2 ">
                            <div className="col-md-9 mb-3"></div>
                            <div className="col-md-3 mb-3"><button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModalCenter">
                                        View more....
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-scrollable modal-xl" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                           <div className="container-fluid">
                            
                           </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
    </body>
        );
    }
}

export default newResearch;