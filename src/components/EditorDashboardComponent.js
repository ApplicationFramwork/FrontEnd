import React, {Component} from 'react';
import background from "../images/Meeting-Background.jpg";
import calender from "../images/calender.jpg";
import chart from "../images/chart.png";
import edit from "../images/edit.png";
import conferenceManagementSystemServices from "../services/ConferenceManagementSystemServices";

class EditorDashboardComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentDateTime: Date().toLocaleString(),
            events: []
        }
        //this.edititem = this.edititem.bind(this);
    }
    componentDidMount(){
        conferenceManagementSystemServices.getEvents().then((res) => {
            this.setState({ events: res.data});
        });
    }
    /*editEvent(id) {
        this.props.history.push('/editEvent/'+ id);
    }*/
    delete(id){
        conferenceManagementSystemServices.deleteEvent(id).then(res=>{
            this.setState({events : this.state.events.filter(event => event._id !==id)});
        })
    }

    render() {
        return (
            <div className="container-fluid bg-dark">
                {/*Accordion*/}
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4">
                        <h5 className="text-white h4">Editor Dashboard</h5>
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
                <br/>

                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item #1
                            </button>

                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until
                                the collapse plugin adds the appropriate classes that we use to style each element.
                                These classes control the overall appearance, as well as the showing and hiding via CSS
                                transitions. You can modify any of this with custom CSS or overriding our default
                                variables. It's also worth noting that just about any HTML can go within
                                the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                until the collapse plugin adds the appropriate classes that we use to style each
                                element. These classes control the overall appearance, as well as the showing and hiding
                                via CSS transitions. You can modify any of this with custom CSS or overriding our
                                default variables. It's also worth noting that just about any HTML can go within
                                the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until
                                the collapse plugin adds the appropriate classes that we use to style each element.
                                These classes control the overall appearance, as well as the showing and hiding via CSS
                                transitions. You can modify any of this with custom CSS or overriding our default
                                variables. It's also worth noting that just about any HTML can go within
                                the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
               <br/>

                {/*Columns with cards*/}
                <div className="container">

                    <div className="row align-items-start">
                        <div className="col">
                            <div className="card" style={{width: "18rem"}}>
                                <img src={calender} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the
                                        bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{width: "18rem"}}>
                                <br/>
                                <img src={chart} className="card-img-top" style={{height:"200"}} alt="..."/>
                                <br/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the
                                        bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{width: "18rem"}}>
                                <img src={edit} className="card-img-top"alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the
                                        bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <br/><br/>
                {/*Display Event Details*/}
                <div className="container">
                    <div className="row">
                        {
                            this.state.events.map(
                                events =>
                                    <div className="col-md-4">
                                        <div className="card mt-3 sellercard">
                                            <div className="product text-center mt-3">
                                                <h2>Upcoming Events</h2>
                                                <h5>{events.title}</h5>
                                                <div className="mt-3 info">
                                                    <span className="text1 d-block mb-3">{events.description}</span>
                                                    <span className="text1 ">Time {events.duration} </span>
                                                </div>
                                                <div className="mt-3 info">
                                                    <span className="text1 ">Status {events.eventStatus} </span>
                                                </div>
                                                <div className="cost mt-3 text-dark">
                                                    <span>{events.date}</span>
                                                </div>

                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-md-6">
                                                    <div className="p-3 text-center text-white mt-2 cursor">
                                                        <button className="btn btn-success btn-block">
                                                            <i className="fas fa-edit"></i>&nbsp;
                                                            Edit Event

                                                        </button>
                                                        <br/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="p-3 text-center text-white mt-2 cursor">
                                                        <button className="btn btn-danger">Delete Item</button>
                                                        <br/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }


}

export default EditorDashboardComponent;