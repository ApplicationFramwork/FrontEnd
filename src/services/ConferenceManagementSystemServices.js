import axios from 'axios';

//Events Service URLS
const EVENT_API_BASE_URL = "http://localhost:8000/event";
const EVENT_API_ADDEVENT_URL = "http://localhost:8000/event/add";
const EVENT_API_DELETE_EVENT_URL = "http://localhost:8000/event/delete";
const EVENT_API_UPDATE_EVENT_URL = "http://localhost:8000/event/update";
const EVENT_API_GET_EVENTBYID_URL = "http://localhost:8000/event/get";

//Workshop Service URLS
const WORKSHOP_API_BASE_URL = "http://localhost:8000/workshop";
const WORKSHOP_API_DELETE_WORKSHOP_URL = "http://localhost:8000/workshop/delete";
const WORKSHOP_API_ADDWORKSHOP_URL = "http://localhost:8000/workshop/add";
const EVENT_API_UPDATE_WORKSHOP_URL = "http://localhost:8000/workshop/update";
const EVENT_API_GET_WORKSHOPBYID_URL = "http://localhost:8000/workshop/existingWorkshop";

class ConferenceManagementSystemServices{
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



}

export default new ConferenceManagementSystemServices();