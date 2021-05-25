import React, { Component } from 'react';
import logo from '../images/logo.png';
import CmsSevice from '../services/ConferenceManagementSystemServices';
import Swal from 'sweetalert2';

class UserSignUpComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
            reneterpassword: '',
            type: ''
            
        }
        this.changeemailHandler = this.changeemailHandler.bind(this);
        this.changepasswordHandler = this.changepasswordHandler.bind(this);
        this.changerepasswordHandler = this.changerepasswordHandler.bind(this);
        this.changeradioHandler = this.changeradioHandler.bind(this);
    }
    changeemailHandler = (event) =>{
        this.setState({email: event.target.value});
    }
    changepasswordHandler = (event) =>{
        this.setState({password: event.target.value});
    }
    changerepasswordHandler = (event) =>{
        this.setState({reneterpassword: event.target.value});
    }
    changeradioHandler = (event) =>{
        this.setState({type: event.target.value});
    }
    adduser = (e) =>{
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
            text: "Do you want to Create a Account",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Create it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                let user = {email : this.state.email, password : this.state.password, type :this.state.type};
                console.log('user => ' + JSON.stringify(user));

                if(this.state.password === this.state.reneterpassword && this.state.email !== '' && this.state.type !== '' && this.state.password !== ''){
                    CmsSevice.adduser(user).then(res=>{
                        console.log(this.state.email);
                        console.log(this.state.password);
                        console.log(this.state.reneterpassword);
                        console.log(this.state.type);
                    })
                    swalWithBootstrapButtons.fire(
                        'Created!',
                        'Your Account has been Created.',
                        'success'
                    )
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please check input details again!'
                  })
            }
          
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Process is cancelled',
            'error'
          )
        }
      })
        
    }
    render() {
        return(
            
            <div className="container-fluid signup-bdy ">
                <div className="row">
                    <div className="col-md-7">
                        
                            <img src ={logo} width={"15%"} alt=""></img>
                        
                    </div>
                    
                    <div className="col-md-5 signUpForm mt-5">
                        <center>
                            <h3 className="text-dark headdingIcms">
                                Welcome to ICMS
                            </h3>

                            <div className="card opacity-3 bg-secondary">
                                <i className="text-mute">International Conference Management System</i>
                            </div>
                            <hr className="m-2"/>
                        </center>
                            <form className="form-container mt-2">
                                <div className="form-group">
                                    <label htmlFor="User_Name" className="text-small text-light mt-5">User Name : </label>
                                     <input type="name" className="form-control" id="User_Name"
                                           placeholder="Ex : @John_Wick" value={this.state.firstname} onChange={this.changeemailHandler} />
                                </div>
                                <div className="form-group">
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-md-6 mt-2">
                                            <div className="form-group names">
                                                <label  className="text-small text-light mt-5">Password</label>
                                                <input placeholder="password" name="password" className="form-control"
                                                value={this.state.password} onChange={this.changepasswordHandler} />
                                            </div>
                                        </div>
                                        <div className="col-md-6  mt-2">
                                            <div className="form-group names">
                                                <label  className="text-small text-light mt-5">Confirm Password</label>
                                                <input placeholder="Confirm-password" name="reenterpasswolabel" className="form-control"
                                                value={this.state.reneterpassword} onChange={this.changerepasswordHandler}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row m-1 text-light mt-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="Radios"
                                               id="Radios" value="Researcher"
                                               checked={this.state.type === "Researcher"} onChange={this.changeradioHandler}/>
                                        <label className="form-check-label" htmlFor="Radios">
                                            Researcher
                                        </label>
                                    </div>
                                    <div className="form-check ml-3">
                                        <input className="form-check-input" type="radio" name="Radios"
                                               id="Radios" value=" Workshop_Presenter"
                                               checked={this.state.type === " Workshop_Presenter"} onChange={this.changeradioHandler}/>
                                        <label className="form-check-label" htmlFor="Radios">
                                            Workshop Presenter
                                        </label>
                                    </div>
                                    <div className="form-check ml-3">
                                        <input className="form-check-input" type="radio" name="Radios"
                                               id="Radios" value="Attendee"
                                               checked={this.state.type === "Attendee"} onChange={this.changeradioHandler}/>
                                        <label className="form-check-label" htmlFor="Radios">
                                            Attendee
                                        </label>
                                    </div>
                                </div>

                                <div className="card bg-secondary mt-5 mb-4">
                                    <i className="text-warning"><i className="fas fa-exclamation-triangle m-2"></i>
                                        Note : You should provide your document before sign in to the system </i>
                                </div>
                                <input className="form-control bg-success mt-2 mb-3" type="file" id="formFileDisabled" />

                                <div className="form-check my-2 mt-4">
                                    <input className="form-check-input" type="radio" name="agreement"
                                           id="agreement" value="" />
                                    <small className="form-check-label text-light mb-3" htmlFor="Radios">
                                        I agree to the <i className="text-primary"> terms and privacy policy. </i>
                                    </small>
                                </div>

                                <button type="button" className="btn btn-info mb-5 mt-3" onClick={this.adduser}>Sign Up</button>
                                <div>
                                    <small className="text-light mb-5">
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