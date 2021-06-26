import React,{Component} from "react";
import logo from "../images/logo.png";

class indexHeader extends Component{
    render() {
        return(
            <div className="container-fluid">
                <div className="row indexHeader pt-3">
                    <div className="col-sm-6">
                        <img src={logo} width={"150px"}/>
                    </div>
                    <div className="col-sm-6 dash-head  mt-2 mb-2  text-light">
                        <center>
                            <small className="ULlist">Home</small>
                            <small className="ULlist">Events</small>
                            <small className="ULlist">WorkShops</small>
                            <small className="ULlist">About us</small>
                            <small className="ULlist">Contact us</small>
                        </center>
                    </div>
                </div>
            </div>
        )
    }
}
export default indexHeader;