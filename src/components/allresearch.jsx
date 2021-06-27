import React, { Component } from 'react';
import logo from '../images/logo.png';
import CmsSevice from '../services/ConferenceManagementSystemServices';
const Imageurl = "http://localhost:8070/uploads/"

class allresearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            research: []
        }
    }
    componentDidMount() {
        CmsSevice.getallresearchdoc().then((res => {
            this.setState({ research: res.data });
            console.log(this.state.research)
            { console.log(this.state.research.document) }
        }))

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

                    </div>
                </div>

                <div class="sidebar">
                    <a href="/reviwer"><i class="fas fa-desktop mt-5 mb-5"></i><span>Dashboard</span></a>
                    <a href="/reviwerchangepassword"><i class="fa fa-key mt-5 mb-5"></i><span>Change Password</span></a>

                </div>


                <div class="content">
                    <div className="container-fluid">
                        <div className="glass">
                            <div className="row text-center mb-3">
                                <div className="col-12 mt-5">
                                    <h1>ALL RESEARCH</h1>
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
                        
                        {
                            this.state.research.map(
                                research =>
                                    <div className="glass mt-3 mb-2">
                                        <div className="row text-center">
                                            <div className="col-md-4 mt-2">
                                                <span>Topic</span><h4>{research.research_topic}</h4>
                                            </div>
                                            <div className="col-md-5 mb-3">
                                                <span>Description</span><h4>{research.reseach_description}</h4>
                                            </div>
                                            
                                            <div className="col-md-3 mt-2">
                                                <span className="mb-3">Document</span><br />
                                                <a href={Imageurl + research.document} target="_blank">download</a>


                                            </div>
                                        </div>
                                        <div className="row text-center mt-2 ">
                                            <div className="col-md-4 mb-3">
                                                <span>Submiter's Email</span><h4>{research.submiteremail}</h4>
                                            </div>
                                            <div className="col-md-3 mt-2">
                                                <span>Status</span><h4>{research.status}</h4>
                                            </div>
                                            <div className="col-md-2 mt-2">
                                                <span>Points</span><h4>{research.total_reviwe_point}</h4>
                                            </div>
                                            <div className="col-md-3 mt-3"><button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModalCenter">
                                                View more....
                                            </button>
                                            </div>
                                        </div><div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-scrollable modal-xl" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLongTitle">{research.research_topic}</h5>
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
                            )
                        }
                    </div>




                </div>
            </body>
        );
    }
}

export default allresearch;