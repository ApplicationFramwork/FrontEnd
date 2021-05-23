import React, { Component } from 'react';
import axios from 'axios';

export default class UserListComponents extends Component {
  constructor(props){
    super(props);

    this.state ={
      users:[]
    };
  }
  componentDidMount(){
    axios.get("http://localhost:8070/user").then(res  =>{
        const users = res.data;
        this.setState({ users });
    });
  }
  render() {
    return (
      <div className="container">
        <p>Users</p>
        <table className="table">
          <thead>
            <tr>
              <th scope = "col">#</th>
              <th scope = "col">Name</th>
              <th scope = "col">Email</th>
              <th scope = "col">User Name</th>
              <th scope = "col">User Role</th>
              <th scope = "col">Mobile Number</th>
              <th scope = "col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((users,index)=>(
              <tr>
                <th scope ="row">{index + 1}</th>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>{users.user_name }</td>
                <td>{users.user_role}</td>
                <td>{users.mobile_number}</td>
                <td>
                  <a className="btn btn-warning"  href="">
                    <i className="fas fa-edit"></i>&nbsp;EDIT
                  </a>
                  &nbsp;
                  <a className="btn btn-danger"  href="">
                    <i className="fas fa-trash-alt"></i>&nbsp;DELETE
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}