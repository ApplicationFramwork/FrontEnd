import React,{Component} from "react";
import jwt_decord from 'jwt-decode';
import picChart from "../images/Maleesha_PieChart.webp"
class DashBoardAdminComponent extends Component{

    render() {
        return(
            <div className="container-fluid admin-dash">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="firstCard">
                            <div className="row adCard card">
                                <h1>US$ 0</h1>
                                <i className=" faAtt fas fa-exclamation-circle"></i>
                            </div>
                            <div>

                            </div>

                            <span className="text-light m-1">Total Users </span>
                            <div className="row mt-3">
                                <div className="col-sm-1"><span className="text-light">10</span></div>
                                <div className="col-sm-10"><hr className="text-light"/></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-1"><span className="text-light">5</span></div>
                                <div className="col-sm-10"><hr className="text-light"/></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-1"><span className="text-light">0</span></div>
                                <div className="col-sm-10"><hr className="bar3"/></div>
                            </div>
                            <span className="values text-light">1000</span>
                            <span className="valuesII text-light">2000</span>
                            <span className="valuesII text-light">3000</span>
                        </div>

                        <div className="secondCard">
                            <span className="text-light m-1">Events for this week </span>
                            <div className="row m-2">
                                <div className="col-sm-6">
                                    <h1>100+</h1>
                                    <hr className="text-light bar2 m-0"/>
                                    <div className="row">
                                        <div className="col-sm-8"><hr className="bar text-light m-0"/></div>
                                    </div>
                                    <hr className="bar2 text-light m-0"/>

                                    <div className="row">
                                        <div className="col-sm-6 text-light">0 </div>
                                        <div className="col-sm-6 alignRight text-light">1000</div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="firstCard">
                                        <div className="row">
                                            <div className="col-sm-1"><span className="text-light">10</span></div>
                                            <div className="col-sm-10"><hr className="text-light"/></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-1"><span className="text-light">5</span></div>
                                            <div className="col-sm-10"><hr className="text-light"/></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-1"><span className="text-light">0</span></div>
                                            <div className="col-sm-10"><hr className="bar3"/></div>
                                        </div>
                                        <span className="values text-light">1000</span>
                                        <span className="valuesII text-light">2000</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="secondCard">
                            <span className="text-light m-1">Workshops for this week </span>
                            <div className="row m-2">
                                <div className="col-sm-6">
                                    <h1>200+</h1>
                                    <hr className="text-light bar2 m-0"/>
                                    <div className="row">
                                        <div className="col-sm-10"><hr className="bar text-light m-0"/></div>
                                    </div>
                                    <hr className="bar2 text-light m-0"/>

                                    <div className="row">
                                        <div className="col-sm-6 text-light">0 </div>
                                        <div className="col-sm-6 alignRight text-light">1000</div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="firstCard">
                                        <div className="row">
                                            <div className="col-sm-1"><span className="text-light">10</span></div>
                                            <div className="col-sm-10"><hr className="text-light"/></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-1"><span className="text-light">5</span></div>
                                            <div className="col-sm-10"><hr className="text-light"/></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-1"><span className="text-light">0</span></div>
                                            <div className="col-sm-10"><hr className="bar3"/></div>
                                        </div>
                                        <span className="values text-light">1000</span>
                                        <span className="valuesII text-light">2000</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="secondCard">
                            <span className="text-light m-1">Research papers for this week </span>
                            <div className="row m-2">
                                <div className="col-sm-6">
                                    <h1>50+</h1>
                                    <hr className="text-light bar2 m-0"/>
                                    <div className="row">
                                        <div className="col-sm-5"><hr className="bar text-light m-0"/></div>
                                    </div>
                                    <hr className="bar2 text-light m-0"/>

                                    <div className="row">
                                        <div className="col-sm-6 text-light">0 </div>
                                        <div className="col-sm-6 alignRight text-light">1000</div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="firstCard">
                                        <div className="row">
                                            <div className="col-sm-1"><span className="text-light">10</span></div>
                                            <div className="col-sm-10"><hr className="text-light"/></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-1"><span className="text-light">5</span></div>
                                            <div className="col-sm-10"><hr className="text-light"/></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-1"><span className="text-light">0</span></div>
                                            <div className="col-sm-10"><hr className="bar3"/></div>
                                        </div>
                                        <span className="values text-light">1000</span>
                                        <span className="valuesII text-light">2000</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/*right side of the page */}
                    <div className="col-sm-6">
                        <div className="secondCard">
                            <div className="faArrow">
                                <i className="fas m-2 fa-step-backward"></i>
                                <i className="fas m-2 fa-step-forward"></i>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <span className="m-1">System Usage for this week</span>
                                    <br/>
                                    <img src={picChart} width={"100%"}/>
                                </div>
                                <div className="col-sm-6">
                                    <span className="m-1">System Usage for past 30 days</span>
                                    <br/>
                                    <br/>
                                    <div className="row">
                                        <div className="col-sm-1"><span className="text-light">20</span></div>
                                        <div className="col-sm-10"><hr className="text-light"/></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-1"><span className="text-light">15</span></div>
                                        <div className="col-sm-10"><hr className="text-light"/></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-1"><span className="text-light">10</span></div>
                                        <div className="col-sm-10"><hr className="text-light"/></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-1"><span className="text-light">5</span></div>
                                        <div className="col-sm-10"><hr className="text-light"/></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-1"><span className="text-light">0</span></div>
                                        <div className="col-sm-10"><hr className="bar3"/></div>
                                    </div>
                                    <span className="values text-light">1000</span>
                                    <span className="valuesII text-light">2000</span>
                                </div>

                            </div>
                        </div>

                        <div className="secondCard">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default DashBoardAdminComponent;