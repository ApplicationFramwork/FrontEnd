import React,{Component} from "react";
import linegraph from '../images/lineGraph.png'
import jwt_decord from 'jwt-decode';
class DashBoardAdminComponent extends Component{

    render() {
        return(
            <div className="container-fluid bg-dark">
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

                        <a href={"/profile"}> <i className="m-2"> {
                           jwt_decord(localStorage.getItem("token")).name

                        }</i></a>
                        <i className="fas fa-user m-2"></i>
                    </div>
                </div>

                {/*Dash Board Second Row*/}
                <div className="row  mt-3">
                    <div className="col-sm-4  dash-1st ">
                        <i className="text-light">Link you Emails from here</i>
                        <div className="card bg-secondary mt-2">
                            <small className="text-info">you can connect one or more emails here</small>
                        </div>
                        <h3 className="txtActive mt-2">Active : 3</h3>
                        <button className="btn btnCus">Customize Your Accounts</button>
                    </div>
                    <div className="col-sm-1">
                        &nbsp;
                    </div>
                    <div className="col-sm-7  dash-1st">
                       <div className="row">
                           <div className="col-sm-6 ml-2 ml-2">
                               <h5 className="text-light">Statistics</h5>
                           </div>
                           <div className="col-sm-5 col-side-update">
                               <small className="text-light">
                                   update 1 month ago
                               </small>
                           </div>
                       </div>

                        <div className="row mt-2">
                            <div className="col-sm-4 mt-4">
                                <i className=" growUp fas fa-arrow-circle-up"></i>
                                <a href={"#"}><small className="m-2 text-light">
                                    100+ k Users
                                </small></a>
                            </div>
                            <div className="col-sm-4 mt-4 ">
                                <i className=" reports fas fa-book-open"></i>
                                <a href={"#"}><small className="text-light"> 10000+ k Reports and Researches</small></a>
                            </div>
                            <div className="col-sm-4 mt-4">
                                <i className=" cube fas fa-cube"></i>
                               <a href={"#"}> <small className="text-light">Daily Conferences</small></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* third  row*/}
                <div className="row mt-5">
                    <div className="col-sm-4 dash-1st ">
                        <div className="cpl-sm-6">

                        </div>
                    </div>
                    <div className="col-sm-1">
                        &nbsp;
                    </div>
                    <div className="col-sm-7 dash-1st ">
                        <i className="text-light"> Graph for last month</i>
                        <img src={linegraph} width={"100%"} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}
export default DashBoardAdminComponent;