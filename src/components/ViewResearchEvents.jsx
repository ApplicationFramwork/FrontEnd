import React, {Component} from 'react';
import logo from "../images/logo.png";
import wallpaper from "../images/Research.jpg"
import wallpaper2 from "../images/wallpaper2.png"
import conferenceManagementSystemServices from "../services/ConferenceManagementSystemServices";
import Header from "./Header";
import notice from "../images/notice.png";
import conference from "../images/Conference.png";
import conference2 from "../images/Conference2.png";


class ViewResearchEvents extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentDateTime: Date().toLocaleString(),
            events: []
        }
    }
    componentDidMount(){
        conferenceManagementSystemServices.getConfirmedEvents().then((res) => {
            this.setState({ events: res.data});
        });
    }
    render() {
        return (
            <div className="bg-light">
                <Header/>
                {/*Editor sidebar*/}
                <div className="row">
                    <div className="col-sm-2 bg-dark text-light">
                        <div className="dropdown">
                            <img src={logo} height={"150px"} width={"150px"}/>
                            <br/>
                            <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-calendar-alt"></i> &nbsp;
                                View Events
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">All Users</a></li>
                                <li><a className="dropdown-item" href="#">Add Users</a></li>
                                <li><a className="dropdown-item" href="#">Search</a></li>
                            </ul>
                        </div>
                        <hr className="text-light"/>
                        <div className="dropdown my-2">
                            <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-calendar-alt"></i> &nbsp;
                                Researches
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <hr className="text-light"/>
                        <div className="dropdown my-2">
                            <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-calendar-alt"></i> &nbsp;
                                Events
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <hr className="text-light"/>
                    </div>
                    <div className="col-sm-10">
                        <div className="row">
                            <div className="collapse" id="navbarToggleExternalContent">
                                <div className="bg-dark p-4">
                                    <h5 className="text-white h4">Upcoming Research Presentation Events</h5>
                                    <span className="text-muted">{this.state.currentDateTime}</span>
                                </div>
                            </div>
                            <nav className="navbar navbar-dark bg-dark">
                                <div className="container-fluid">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#navbarToggleExternalContent"
                                            aria-controls="navbarToggleExternalContent" aria-expanded="false"
                                            aria-label="Toggle navigation">
                                        <span className="fas fa-angle-down"></span>
                                    </button>
                                </div>
                            </nav>

                            <div className="row">
                                <center>
                                    <br/>
                                    <h2>Research Paper Presentations</h2>
                                </center>
                            </div>
                            <hr/>
                            <div className="row">
                                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={wallpaper} className="d-block w-100" alt="..."/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={wallpaper2}  className="d-block w-100" alt="..."/>
                                        </div>
                                        <div className="carousel-item">
                                            <img src={wallpaper}  className="d-block w-100" alt="..."/>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button"
                                            data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button"
                                            data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>

                            {/*Display Event Details*/}
                            <div className="container">
                                <div className="row">
                                    {
                                        this.state.events.map(
                                            events =>
                                                <div className="col-md-4">
                                                    <div className="card mt-3 sellercard">
                                                        <div className="product text-center mt-3">
                                                            <h5>Upcoming Research Paper Presentations</h5>
                                                            <h2>{events.title}</h2>
                                                            <div className="mt-3 info">
                                                                <span className="text1 d-block mb-3">{events.description}</span>
                                                                <span className="text1 ">Date: {events.startDate} </span>
                                                            </div>
                                                            <div className="mt-3 info">
                                                                <span className="text1 ">Venue: {events.venue} </span>
                                                            </div>
                                                            <div className="cost mt-3 text-dark">
                                                                <span>Time: {events.duration}</span>
                                                            </div>
                                                        </div>
                                                        <div className="row mt-8">
                                                            <div className="col-md-6">
                                                                <div className="p-3 text-center text-white mt-2 cursor">
                                                                    <button className="btn btn-warning btn-block">
                                                                        <i className="fas fa-edit"></i>&nbsp;
                                                                        Attend Event
                                                                    </button>
                                                                    <br/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                        )
                                    }
                                </div>
                                <br/><br/>
                                {/*Accordion*/}
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                CALL FOR PAPERS:
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                             data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>The 2021 International Conference on Advancements in Computing (ICAF 2021) will
                                                    be held in Sri Lanka from 9th to 11th December 2021. The ICAF 2021 is themed “Empowering
                                                    the society through innovation and invention.” The conference organizers invite contributions
                                                    from diverse computing areas including Computer Engineering, Computer Science, Information Systems, Information
                                                    Technology and Software Engineering, but not limited to. ICAF 2021 will include attractive workshops and industry
                                                    programs aimed at practitioners, with keynotes and panels from both local and international researchers. </strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                SUBMISSIONS:
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                             data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>
                                                    To be published in the ICAF2021 Conference Proceedings and to be eligible for
                                                    publication in IEEE Xplore®, an author of an accepted paper is required to
                                                    register for the conference and the paper must be presented by an author of that
                                                    paper at the conference. During the initial paper submission process via Microsoft
                                                    Conference Management tool. Only PDF files will be accepted for the review process,
                                                    and all submissions must be done through Microsoft CMT. Author List and their affiliations
                                                    should be removed from the initial PDF File. Please note that IEEE Plagiarism Policies will
                                                    be applied upon the submission.
                                                </strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                IMPORTANT:
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                             data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <strong>The page length limit for all initial submissions for review is SIX (6) printed pages (10-point font)
                                                    and must be written in English.
                                                    Initial submissions longer than SIX (6) pages will be rejected without review.
                                                    Paper selection is subjected to the contribution, originality, relevance, technical strength, and
                                                    the overall quality. Upon selection of the paper, at least one author is expected to register for
                                                    the conference before the deadline and present the paper.
                                                    Only papers that have been presented by the respective authors during the conference will be published
                                                    in the IEEE Proceedings which will be available in IEEE Xplore digital library, provided that they meet
                                                    the IEEE quality review standards.
                                                </strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <img style={{height:"100%",width:"100%"}} src={notice}/>
                                        </div>
                                        <div className="col-sm-4">
                                            <img style={{height:"100%",width:"100%"}} src={conference}/>
                                        </div>
                                        <div className="col-sm-4">
                                            <img style={{height:"100%",width:"100%"}} src={conference2}/>
                                        </div>
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

export default ViewResearchEvents;