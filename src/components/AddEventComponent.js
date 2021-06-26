import React, {useState} from "react";
import axios from "axios";
import ConferenceImage from "../images/Conference.jpg";
import editor from "./EditorDashboardComponent";



export default function AddEventComponent(){
    const [title, setTitle] = useState("");
    const [eventType, setEventType] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [duration, setDuration] = useState("");
    const [venue, setVenue] = useState("");
    const [organizedBy, setOrganizedBy] = useState("");
    const [eventStatus, setEventStatus] = useState("");
    function sendData(e){
        e.preventDefault();
        const newEvent={
            title,
            eventType,
            description,
            startDate,
            duration,
            venue,
            organizedBy,
            eventStatus
        }
        //console.log(newEvent);
        axios.post("http://localhost:8000/event/add",newEvent).then(()=>{
            alert("Event Added")

            //clear the input field upon Event Added Successfully
            setTitle(" ");
            setEventType(" ");
            setDescription(" ");
            setStartDate(" ");
            setDuration(" ");
            setVenue(" ");
            setOrganizedBy(" ");
            setEventStatus(" ");
        }).catch((err)=>{
            alert(err)
        })
    }
    return(
        <div className="container mt-5">
            <div className="row">

                <div className="col-md-8">

                    <h1 className="text-center mt-4 font-weight-bold font-italic text-primary">ADD Research Paper Prsentation</h1>
                    <div className="justify-contend-center mt-5">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <form className="form-container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="title" className="form-label">Title</label>
                                                <input type="text" className="form-control" id="title" placeholder={"Event Title"}
                                                       onChange={(e)=>{setTitle(e.target.value);}}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="eventType" className="form-label">Event Type</label>
                                                <div className="input-group mb-3">
                                                    <select className="custom-select" id="eventType" placeholder={"Event Status"}
                                                            style={{height:"45px",width:"80%"}}
                                                            onChange={(e)=>{setEventType(e.target.value);}}>
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
                                                <input type="text" className="form-control" id="description" placeholder={"Event Description"}
                                                       onChange={(e)=>{setDescription(e.target.value);}}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="startDate" className="form-label">Start Date</label>
                                                <input type="date" className="form-control" id="startDate"
                                                       onChange={(e)=>{setStartDate(e.target.value);}}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="duration" className="form-label">Start Time</label>
                                                <input type="time" className="form-control" id="duration" placeholder={"Event Duration"}
                                                       onChange={(e)=>{setDuration(e.target.value);}}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="venue" className="form-label">Venue</label>
                                                <input type="text" className="form-control" id="venue" placeholder={"Event Venue"}
                                                       onChange={(e)=>{setVenue(e.target.value);}}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="organizedBy" className="form-label">Organized By</label>
                                                <input type="text" className="form-control" id="organizedBy" placeholder={"Event Organized By"}
                                                       onChange={(e)=>{setOrganizedBy(e.target.value);}}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label htmlFor="eventStatus" className="form-label">Event Status</label>
                                                <div className="input-group mb-3">
                                                    <select className="custom-select" id="eventStatus" placeholder={"Event Status"}
                                                            style={{height:"45px",width:"100%"}}
                                                            onChange={(e)=>{setEventStatus(e.target.value);}}>
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
                                            <button type="submit" className="btn btn-primary"onSubmit={"/editor"} onClick={sendData}>Submit</button>
                                        </div>

                                        <div className="col-md-6 mt-3">

                                        </div>

                                    </div>
                                </form>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>






   /* <div className="container mt-5">
        <form onSubmit={sendData}>

            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" placeholder={"Event Title"}
                       onChange={(e)=>{setTitle(e.target.value);}}/>

            </div>
            <div className="mb-3">
                <label htmlFor="eventType" className="form-label">Event Type</label>
                <input type="text" className="form-control" id="eventType" placeholder={"Event Type"}
                       onChange={(e)=>{setEventType(e.target.value);}}/>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="description" placeholder={"Event Description"}
                       onChange={(e)=>{setDescription(e.target.value);}}/>
            </div>
            <div className="mb-3">
                <label htmlFor="startDate" className="form-label">Start Date</label>
                <input type="date" className="form-control" id="startDate"
                       onChange={(e)=>{setStartDate(e.target.value);}}/>
            </div>
            <div className="mb-3">
                <label htmlFor="duration" className="form-label">Start Time</label>
                <input type="time" className="form-control" id="duration" placeholder={"Event Duration"}
                       onChange={(e)=>{setDuration(e.target.value);}}/>
            </div>
            <div className="mb-3">
                <label htmlFor="venue" className="form-label">Venue</label>
                <input type="text" className="form-control" id="venue" placeholder={"Event Venue"}
                       onChange={(e)=>{setVenue(e.target.value);}}/>
            </div>
            <div className="mb-3">
                <label htmlFor="organizedBy" className="form-label">Organized By</label>
                <input type="text" className="form-control" id="organizedBy" placeholder={"Event Organized By"}
                       onChange={(e)=>{setOrganizedBy(e.target.value);}}/>
            </div>
            <div className="mb-3">
                <label htmlFor="eventStatus" className="form-label">Event Status</label>
                <input type="text" className="form-control" id="eventStatus" placeholder={"Event Status"}
                       onChange={(e)=>{setEventStatus(e.target.value);}}/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>*/

    )
}