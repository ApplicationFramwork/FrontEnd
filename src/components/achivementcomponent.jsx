import React, { Component } from 'react';
import logo from '../images/logo.png'

class achivementcomponent extends Component {
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
                            <a className="active" href="/reviwerachivement"><i class="fas fa-info-circle mt-5 mb-5"></i><span>Achievement</span></a>
                            <a href="/reviwerchangepassword"><i class="fa fa-key mt-5 mb-5"></i><span>Change Password</span></a>
                            <a href="/reviwersettings"><i class="fas fa-sliders-h mt-5 mb-5"></i><span>Account-Settings</span></a>
                    </div>
                    

                    <div class="content">
                        <div className="container">
                            
                                
                        </div>
                    </div>
            </body>
        );
    }
}

export default achivementcomponent;