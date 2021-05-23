import React, { Component } from 'react';
import formBackground from "../images/addEvent.svg";
import ConferenceManagementSystemServices from "../services/ConferenceManagementSystemServices";


class UpdateEventsComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params._id,
            title: '',
            eventType: '',
            description: '',
            startDate: '',
            duration: '',
            venue: '',
            organizedBy: '',
            eventStatus: ''
        }
        this.changeTitleHandler=this.changeTitleHandler.bind(this);
        this.changeEventTypeHandler=this.changeEventTypeHandler.bind(this);
        this.changeDescriprionHandler=this.changeDescriprionHandler.bind(this);
        this.changeDateHandler=this.changeDateHandler.bind(this);
        this.changeTimeHandler=this.changeTimeHandler.bind(this);
        this.changeVenueHandler=this.changeVenueHandler.bind(this);
        this.changeOrganizerHAndler=this.changeOrganizerHAndler.bind(this);
        this.changeStatusHandler=this.changeStatusHandler.bind(this);
        this.updateEvent=this.updateEvent.bind(this);
        this.cancel = this.cancel.bind(this);
    }
    componentDidMount(){
        ConferenceManagementSystemServices.getEventByID(this.state.id).then((res)=>{
            let event =res.data;
            this.setState({
                id: event.id,
                title: event.title,
                eventType: event.eventType,
                description: event.description,
                startDate: event.startDate,
                duration: event.duration,
                venue: event.venue,
                organizedBy: event.organizedBy,
                eventStatus: event.eventStatus
            });
        })
    }
    updateEvent = (e) =>{
        e.preventDefault();
        let event = {
            title: this.state.title,
            eventType: this.state.eventType,
            description: this.state.description,
            startDate: this.state.startDate,
            duration: this.state.duration,
            venue: this.state.venue,
            organizedBy: this.state.organizedBy,
            eventStatus: this.state.eventStatus
        };
        console.log('event => ' + JSON.stringify(event));
        ConferenceManagementSystemServices.updateEvent(event, this.state.id).then(res => {
            this.props.history.push("/editor");
        })

    }
    changeTitleHandler = (event)=> {
        this.setState({title: event.target.value});
    }
    changeEventTypeHandler = (event)=> {
        this.setState({eventType: event.target.value});
    }
    changeDescriprionHandler = (event)=> {
        this.setState({description: event.target.value});
    }
    changeDateHandler = (event)=> {
        this.setState({startDate: event.target.value});
    }
    changeTimeHandler = (event)=> {
        this.setState({duration: event.target.value});
    }
    changeVenueHandler = (event)=> {
        this.setState({venue: event.target.value});
    }
    changeOrganizerHAndler = (event)=> {
        this.setState({organizedBy: event.target.value});
    }
    changeStatusHandler = (event)=> {
        this.setState({eventStatus: event.target.value});
    }
    //cancel button
    cancel(){
        this.props.history.push('/editor');
    }

    render() {
        return (

            <div className="container-fluid bg-dark">
                <div className="row">
                    <div className="col-md-4 mt-5 pho">
                        <img src={formBackground} className="bg2 mt-5" alt=""/>
                    </div>
                    <div className="col-md-8">
                        <h1 className="text-center mt-4 font-weight-bold font-italic text-primary">ADD EVENT</h1>
                        <div className="justify-contend-center mt-5">
                            <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-8">
                                    <form className="form-container">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label htmlFor="title" className="form-label">Title</label>
                                                    <input type="text" className="form-control" name="title" id="title" placeholder="Event Title"
                                                           value={this.state.title} onChange={this.changeTitleHandler}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label htmlFor="eventType" className="form-label">Event Type</label>
                                                    <div className="input-group mb-3">
                                                        <select className="custom-select" name="eventType" id="eventType" placeholder="Event Status"
                                                                style={{height:"45px",width:"80%"}}
                                                                onChange={this.changeEventTypeHandler}>
                                                            <option selected>Choose...</option>
                                                            <option value="Workshop">Workshop</option>
                                                            <option value="Research Paper Presentation">Research Paper Presentation</option>
                                                        </select>
                                                        <div className="input-group-append">

                                                            <label className="input-group-text"
                                                                   htmlFor="inputGroupSelect02">Event Type</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label htmlFor="description" className="form-label">Description</label>
                                                    <input type="text" className="form-control" name="description" id="description" placeholder="Event Description"
                                                           onChange={this.changeDescriprionHandler}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label htmlFor="startDate" className="form-label">Start Date</label>
                                                    <input type="date" className="form-control" name="startDate" id="startDate"
                                                           onChange={this.changeDateHandler}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label htmlFor="duration" className="form-label">Start Time</label>
                                                    <input type="time" className="form-control" name="duration" id="duration" placeholder="Event Duration"
                                                           onChange={this.changeTimeHandler}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label htmlFor="venue" className="form-label">Venue</label>
                                                    <input type="text" className="form-control" name="venue" id="venue" placeholder="Event Venue"
                                                           onChange={this.changeVenueHandler}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label htmlFor="organizedBy" className="form-label">Organized By</label>
                                                    <input type="text" className="form-control" name="organizedBy" id="organizedBy" placeholder="Event Organized By"
                                                           onChange={this.changeOrganizerHAndler}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label htmlFor="eventStatus" className="form-label">Event Status</label>
                                                    <div className="input-group mb-3">
                                                        <select className="custom-select" name="eventStatus" id="eventStatus" placeholder="Event Status"
                                                                style={{height:"45px",width:"100%"}}
                                                                onChange={this.changeStatusHandler}>
                                                            <option selected>Choose...</option>
                                                            <option value="Confirmed">Confirmed</option>
                                                            <option value="Pending">Pending</option>
                                                            <option value="Rejected">Rejected</option>
                                                        </select>
                                                        <div className="input-group-append">
                                                            <label className="input-group-text"
                                                                   htmlFor="inputGroupSelect02">Event Status</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row justify-content-center">
                                            <div className="col-md-6 mt-3">
                                                <button type="submit" className="btn btn-primary" onClick={this.updateEvent}>Update</button>
                                                <button className="btn btn-danger"  onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                            </div>
                                            <div className="col-md-6 mt-3">
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-3">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default UpdateEventsComponent;