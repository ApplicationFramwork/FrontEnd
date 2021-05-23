import axios from 'axios';

//Events Service URLS
const EVENT_API_BASE_URL = "http://localhost:8000/event";
const EVENT_API_ADDEVENT_URL = "http://localhost:8000/event/add";
const EVENT_API_DELETE_EVENT_URL = "http://localhost:8000/event/delete";
const EVENT_API_UPDATE_EVENT_URL = "http://localhost:8000/event/update";

class ConferenceManagementSystemServices{
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