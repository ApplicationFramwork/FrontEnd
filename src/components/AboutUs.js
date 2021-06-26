import React, {Component} from 'react';
import author1 from "../images/author1.jpg";
import author2 from "../images/author2.jpg";
import author3 from "../images/author3.jpg";
import website from "../images/design.png"
import "../App.css";
class AboutUs extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid bg-dark">
                    <div className="row bg-dark">
                        <div className="col sm-2 text-light">
                            <h1>About Us</h1>
                            <br/><br/>
                            <h3></h3>
                        </div>
                        <div className="col sm-10 ">
                            <h1>About Us</h1>
                        </div>
                    </div>
                    <div className="row bg-light">
                        <div className="row align-items-start">
                            <div className="col">
                                <div className="card" style={{width: "18rem"}}>
                                    <div className="flip-box">
                                        <div className="flip-box-inner">
                                            <div className="flip-box-front">
                                                <img src={author1} className="card-img-top flip"  alt="..."/>
                                            </div>
                                            <div className="flip-box-back">
                                                <h2>Maleesha Wickramarathna</h2>
                                                <p>Software Engineering Undergraduate</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <br/><br/><br/><br/>
                                        <a href="https://www.linkedin.com/in/maleesha-suraj-wickramarathna-779077193/" className="btn btn-outline-warning">Follow Us on Linkedin
                                            &nbsp;<i className="fab fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card" style={{width: "18rem"}}>
                                    <div className="flip-box">
                                        <div className="flip-box-inner">
                                            <div className="flip-box-front">
                                                <img src={author2} className="card-img-top flip"  alt="..."/>
                                            </div>
                                            <div className="flip-box-back">
                                                <h2>Kithmini De Silva</h2>
                                                <p>Software Engineering Undergraduate</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <br/><br/><br/><br/>
                                        <a href="https://www.linkedin.com/in/kithmini-de-silva-3084761b8/" className="btn btn-outline-warning">Follow Us on Linkedin
                                            &nbsp;<i className="fab fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card" style={{width: "18rem"}}>
                                    <div className="flip-box">
                                        <div className="flip-box-inner">
                                            <div className="flip-box-front">
                                                <img src={author3} className="card-img-top flip"  alt="..."/>
                                            </div>
                                            <div className="flip-box-back">
                                                <h2>Vihanga Lekamalage</h2>
                                                <p>Software Engineering Undergraduate</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <br/><br/><br/><br/>
                                        <a href="https://www.linkedin.com/in/vihanga-malshan-jontyrulz1998/" className="btn btn-outline-warning">Follow Us on Linkedin
                                            &nbsp;<i className="fab fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;