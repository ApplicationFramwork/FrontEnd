import axios from 'axios';
import jwt_decord from "jwt-decode";

//Login service URL
const LOGIN_URL = "http://localhost:8070/user/login";
const ACCOUNT_DEACTIVATE_URL = "http://localhost:8070/user/delete";
const ACCOUNT_UPDATE_URL = "http://localhost:8070/user/update";

//Events Service URLS
const EVENT_API_BASE_URL = "http://localhost:8070/event";
const EVENT_API_ADDEVENT_URL = "http://localhost:8070/event/add";
const EVENT_API_DELETE_EVENT_URL = "http://localhost:8070/event/delete";
const EVENT_API_UPDATE_EVENT_URL = "http://localhost:8070/event/update";
const EVENT_API_GET_EVENTBYID_URL = "http://localhost:8070/event/get";
const CONFIRMED_EVENTS_URL = "http://localhost:8070/event/getConfirmed";
const GET_EVENTS_BY_STATUS_URL = "http://localhost:8070/event/getEvents";

//Workshop Service URLS
const WORKSHOP_API_BASE_URL = "http://localhost:8070/workshop";
const WORKSHOP_API_DELETE_WORKSHOP_URL = "http://localhost:8070/workshop/delete";
const WORKSHOP_API_ADDWORKSHOP_URL = "http://localhost:8070/workshop/add";
const EVENT_API_UPDATE_WORKSHOP_URL = "http://localhost:8070/workshop/update";
const EVENT_API_GET_WORKSHOPBYID_URL = "http://localhost:8070/workshop/existingWorkshop";
const CONFIRMED_WORKSHOPS_URL = "http://localhost:8070/workshop/getConfirmed";
const GET_WORKSHOPS_BY_STATUS_URL = "http://localhost:8070/workshop/getEvents";


//user service URL
const BackendAPIAddResercher = "http://localhost:8070/user/addresearcher";
const BackendAPIAddWorkshop_presenter = "http://localhost:8070/user/addWorkshop_presenter";
const BackendAPIAddAttendee = "http://localhost:8070/user/addattende";
const BackendAPIFindUser = "http://localhost:8070/user/getuser";

//Research Service URL
const BackendAPIgetllresearch = "http://localhost:8070/researchdoc/getallresearchdocs";
const GetresearchpapersusignAPI = "http://localhost:8070/researchdoc/getresearch"

//reviwer Servises URL
const BackendAPIUpdateReviwer_URL = "http://localhost:8070/user/update";
const BackendAPIDeleteReviwer_URL = "http://localhost:8070/reviwer/delete";




class ConferenceManagementSystemServices{

    //maleesha
    login(user){
        return axios.post(LOGIN_URL, user);
    }
    deactivate(){
        console.log("id " + jwt_decord(localStorage.getItem("token")).id)
        return axios.delete(ACCOUNT_DEACTIVATE_URL + '/' + jwt_decord(localStorage.getItem("token")).id);
    }

    updateUserDetails(user){
        return axios.put(ACCOUNT_UPDATE_URL + '/' + jwt_decord(localStorage.getItem("token")).id,user);
    }

    //get all events
    getEvents(){
        return axios.get(EVENT_API_BASE_URL);
    }
    getEventByID(id){
        return axios.get(EVENT_API_GET_EVENTBYID_URL + '/' + id);

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
    //get confirmed events
    getConfirmedEvents(){
        return axios.get(CONFIRMED_EVENTS_URL);
    }
    //get events by status
    getEventByStatus(eventStatus){
        return axios.get(GET_EVENTS_BY_STATUS_URL + '/' + eventStatus);
    }

    //get Workshop
    getWorkshop(){
        return axios.get(WORKSHOP_API_BASE_URL);
    }
    //delete an event
    deleteWorkshop(id){
        return axios.delete(WORKSHOP_API_DELETE_WORKSHOP_URL + '/' + id);
    }
    addWorkshop(workshop){
        return axios.post(WORKSHOP_API_ADDWORKSHOP_URL, workshop);
    }
    //update an event
    updateWorkshop(workshop, id){
        console.log("update"+id);
        return axios.put(EVENT_API_UPDATE_WORKSHOP_URL + '/' + id, workshop);
    }

    //get Workshop by ID
    getWorkshopByID(id){
        return axios.get(EVENT_API_GET_WORKSHOPBYID_URL + '/' + id);
    }
    //get cofirmed workshops
    getConfirmedWorkshop(){
        return axios.get(CONFIRMED_WORKSHOPS_URL);
    }
    //get events by status
    getWorkshopByStatus(eventStatus){
        return axios.get(GET_WORKSHOPS_BY_STATUS_URL + '/' + eventStatus);
    }
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
    //get reviwer details using user id
    getuser(id){
        return axios.get(BackendAPIFindUser + '/' + id);
    }
    //update reviwer using reviwer id
    updatereviwer(reviwer, id){
        return axios.put(BackendAPIUpdateReviwer_URL  + '/' + id, reviwer);
    }
    //delete reviwer using reviwer id
    deletereviwer(id, email){
        return axios.delete(BackendAPIDeleteReviwer_URL  + '/' + id + '/' + email)
    }
    //get all research deatails
    getallresearchdoc() {
        return axios.get(BackendAPIgetllresearch);
    }
    getresearch(id) {
        return axios.get(GetresearchpapersusignAPI + '/' + id);
    }


}

export default new ConferenceManagementSystemServices();