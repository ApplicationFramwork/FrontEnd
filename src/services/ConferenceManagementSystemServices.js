import axios from 'axios';

//Events Service URLS
const EVENT_API_BASE_URL = "http://localhost:8000/event";
const EVENT_API_ADDEVENT_URL = "http://localhost:8000/event/add";
const EVENT_API_DELETE_EVENT_URL = "http://localhost:8000/event/delete";
const EVENT_API_UPDATE_EVENT_URL = "http://localhost:8000/event/update";

//reviwer Servises URL
const BackendAPIGetOneReviwer_URL = "http://localhost:8070/reviwer/getreviwer";
const BackendAPIUpdateReviwer_URL = "http://localhost:8070/reviwer/update";
const BackendAPIDeleteReviwer_URL = "http://localhost:8070/reviwer/delete";

//user service URL
const BackendAPIAddResercher = "http://localhost:8070/user/addresearcher";
const BackendAPIAddWorkshop_presenter = "http://localhost:8070/user/addWorkshop_presenter";
const BackendAPIAddAttendee = "http://localhost:8070/user/addattende";

class ConferenceManagementSystemServices{

    //maleesha
    //add user
    addresercher(user){
        return axios.post(BackendAPIAddResercher, user);
    }
    addworkshop_presenter(user) {
        return axios.post(BackendAPIAddWorkshop_presenter, user);
    }
    addattendess(user) {
        return axios.post(BackendAPIAddAttendee, user);
    }

    //vihanga
    //get reviwer details using reviwer id
    getreviwer(id){
        return axios.get(BackendAPIGetOneReviwer_URL + '/' + id);
    }
    //update reviwer using reviwer id
    updatereviwer(reviwer, id){
        return axios.put(BackendAPIUpdateReviwer_URL  + '/' + id, reviwer);
    }
    //delete reviwer using reviwer id
    deletereviwer(id, email){
        return axios.delete(BackendAPIDeleteReviwer_URL  + '/' + id + '/' + email)
    }


    //kithmini
    //get all events
    getEvents(){
        return axios.get(EVENT_API_BASE_URL);
    }
    getEventByID(id){
        return axios.get(EVENT_API_BASE_URL + '/' + id);

    }
    //add an event
    addEvent(event){
        return axios.post(EVENT_API_ADDEVENT_URL, event);
    }
    //delete an event
    deleteEvent(id){
        console.log("Item ID:"+id);
        return axios.delete(EVENT_API_DELETE_EVENT_URL + '/' + id);
    }
    //update an event
    updateEvent(event, id){
        console.log("update"+id);
        return axios.put(EVENT_API_UPDATE_EVENT_URL + '/' + id, event);
    }


}

export default new ConferenceManagementSystemServices();