import React, { Component } from 'react';
import logo from '../images/logo.png'
import CmsSevice from '../services/ConferenceManagementSystemServices';
import Swal from 'sweetalert2';

class changePasswordcomponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id : this.props.match.params.id,
            firstname: '',
            lastname: '',
            number_Of_reviews: '',
            type: '',
            email: '',
            password: '',
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
    //get reviwer details
    componentDidMount(){
        CmsSevice.getreviwer(this.state.id).then((res=>{
            let reviwewr =res.data;
            this.setState({firstname: reviwewr.first_name,
                lastname:reviwewr.last_name,
                email :reviwewr.email,
                password : reviwewr.password,
                number_Of_reviews : reviwewr.number_Of_reviews,
                type : reviwewr.type
            })
            
             console.log(this.state.password);
             console.log(this.state.currentpassword);
        }))
    }
    //UPADATE REVIWER DETAILS
    updatereviwer = (e) =>{
        e.preventDefault();
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success ml-5',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "Do you want to Update Password?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, update it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                if(this.state.currentpassword === this.state.password && this.state.newpassword === this.state.reenterpassword){
            
                    let reviwer = {first_name: this.state.firstname,last_name: this.state.lastname,email: this.state.email,
                        password: this.state.newpassword,type: this.state.type,number_Of_reviews: this.state.number_Of_reviews};
                    console.log('reviwer => ' + JSON.stringify(reviwer));
            
                    CmsSevice.updatereviwer(reviwer, this.state.id).then(res => {
                       console.log('success');
                   })
                   swalWithBootstrapButtons.fire(
                    'Updated!',
                    'Your Password has been Updated.',
                    'success'
                  )
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Current Password is wrong!'
                      })
                }
              
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your Update is cancelled',
                'error'
              )
            }
          })
       
          
        
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
                                            <div className="form-group names">
                                                <h5>Current-Password</h5>
                                                <input placeholder="Current-Password" name="password" className="form-control"
                                                value={this.state.currentpassword} onChange={this.changepasswordHandler} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-md-8 ml-2 mr-2 mt-4">
                                            <div className="form-group names">
                                                <h5>New-Password</h5>
                                                <input placeholder="New-Password" name="newpassword" className="form-control"
                                                value={this.state.newpassword} onChange={this.changenewpassHandler} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-md-8 ml-2 mr-2 mt-4">
                                            <div className="form-group names">
                                                <h5>Reenter-Password</h5>
                                                <input placeholder="Reenter-Password" name="reenternewpassword" className="form-control"
                                                value={this.state.reenterpassword} onChange={this.changereenterpassHandler} />
                                            </div>
                                        </div>
                                    </div>
                                   
                                <div className="row justify-content-center">
                                                            
                                        <div className="col-md-3 mt-4 mb-5">
                                            <button className="btn btn-success btn-block" onClick={this.updatereviwer}>Update Password</button>
                                        </div>
                                                            
                                        <div className="col-md-3 mt-4 mb-5 ">
                                            <button className="btn btn-danger btn-block" onClick={this.cancle}>cancle</button> 
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