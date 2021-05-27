import React,{Component} from "react";
import jwt_decord from "jwt-decode";
import user from '../images/Profile.png';
import cmsService from '../service/ConferenceManagementSystemServices';
import Swal from 'sweetalert2';

class userProfileComponent extends  Component{

    constructor(props) {
        super(props)
        this.state = {
            name:'',
            email : '',
            mobile_number : ''
        }
        this.changenameHandler = this.changenameHandler.bind(this);
        this.changeemailHandler = this.changeemailHandler.bind(this);
        this.changemobileHandler = this.changemobileHandler.bind(this);

    }
    changenameHandler = (event) =>{
        this.setState({name: event.target.value});
    }
    changeemailHandler = (event) =>{
        this.setState({email: event.target.value});
    }
    changemobileHandler = (event) =>{
        this.setState({mobile_number: event.target.value});
    }

    saveChanges = (e) =>{
        e.preventDefault();

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success ml-5',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        let user = {name : this.state.email, email :  this.state.email, mobile_number: this.state.mobile_number};
        console.log('user => ' + JSON.stringify(user));
        if(this.state.name != "" && this.state.email != "" && this.state.mobile_number != ""){
            cmsService.updateUserDetails(user).then(res =>{
                swalWithBootstrapButtons.fire(
                    'Updated!',
                    'Your Account has been updated.',
                    'success'
                )
            })
        }
    }

    signout = (e) =>{
        e.preventDefault();
        localStorage.removeItem("token");
        localStorage.clear();
        this.props.history.push('/');

    }
    deactivate = (e) =>{
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
            text: "Do you want to deactivate your account?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                cmsService.deactivate();
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your Account has been removed.',
                    'success'
                )
                localStorage.clear();
                this.props.history.push('/');
            }

        })

    }
    render() {
        return(
            <div className="container-fluid bg-dark lg-body">
                {/*Dash Board Header*/}
                <div className="row dash-1st ">
                    <div className="col-sm-6 text-light mt-2 mb-2">
                        <i className="fas fa-calendar-week m-2"></i>
                        <i className="far fa-comment-alt m-2"></i>
                        <i className="far fa-envelope m-2"></i>
                        <i className="fas fa-calendar-check m-2"></i>
                        <i className="text-warning far fa-star"></i>
                    </div>
                    <div className="col-sm-6 dash-head mt-2 mb-2  text-light">
                        <i className="far fa-lightbulb m-2"></i>
                        <i className="fas fa-search m-2"></i>
                        <i className="fas fa-bell m-2"></i>

                        <i className="m-2"> {
                            jwt_decord(localStorage.getItem("token")).name

                        }</i>
                        <i className="fas fa-user m-2"></i>
                    </div>
                </div>

                <form className="form-container mt-5 bg-secondary editFrm ">
                    <h3 className="text-light">Edit Profile</h3>
                    <div>
                        <img src={user} width={"20%"}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" className="text-small text-light mt-2">Name : </label>
                        <input type="name" className="form-control" id="name" value={jwt_decord(localStorage.getItem("token")).name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile_number" className="text-small text-light mt-2">Mobile Number : </label>
                        <input type="number" className="form-control" id="mobile_number" value={jwt_decord(localStorage.getItem("token")).mobile}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="text-small text-light mt-2">Email: </label>
                        <input type="email" className="form-control" id="email" value={jwt_decord(localStorage.getItem("token")).email}/>
                    </div>
                    <button className="btn btn-info m-2" onClick={this.saveChanges}>Save changes</button>
                    <button className="btn btn-danger m-2" onClick={this.deactivate}>Deactivate</button>
                    <button className="btn btn-warning m-2" onClick={this.signout}>sign out</button>
                </form>
            </div>
        )
    }
}
export default userProfileComponent;