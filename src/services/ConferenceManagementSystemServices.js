import axios from 'axios';
import jwt_decord from "jwt-decode";

//Login service URL
const LOGIN_URL = "http://3.19.77.232:5000/user/login";
const ACCOUNT_DEACTIVATE_URL = "http://3.19.77.232:5000/user/delete";
const ACCOUNT_UPDATE_URL = "http://3.19.77.232:5000/user/update";

//Events Service URLS
const EVENT_API_BASE_URL = "http://3.19.77.232:5000/event";
const EVENT_API_ADDEVENT_URL = "http://3.19.77.232:5000/event/add";
const EVENT_API_DELETE_EVENT_URL = "http://3.19.77.232:5000/event/delete";
const EVENT_API_UPDATE_EVENT_URL = "http://3.19.77.232:5000/event/update";
const EVENT_API_GET_EVENTBYID_URL = "http://3.19.77.232:5000/event/get";
const CONFIRMED_EVENTS_URL = "http://3.19.77.232:5000/event/getConfirmed";
const GET_EVENTS_BY_STATUS_URL = "http://3.19.77.232:5000/event/getEvents";
//Admin add workshop
const ADMIN_ADD_WORKSHOP_URL = "http://3.19.77.232:5000/workshop/adminAdd";
//Admin update workshop
const ADMIN_UPDATE_WORKSHOP_URL = "http://3.19.77.232:5000/workshop/adminUpdate";

//Workshop Service URLS
const WORKSHOP_API_BASE_URL = "http://3.19.77.232:5000/workshop";
const WORKSHOP_API_DELETE_WORKSHOP_URL = "http://3.19.77.232:5000/workshop/delete";
const WORKSHOP_API_ADDWORKSHOP_URL = "http://3.19.77.232:5000/workshop/add";
const EVENT_API_UPDATE_WORKSHOP_URL = "http://3.19.77.232:5000/workshop/update";
const EVENT_API_GET_WORKSHOPBYID_URL = "http://3.19.77.232:5000/workshop/existingWorkshop";
const CONFIRMED_WORKSHOPS_URL = "http://3.19.77.232:5000/workshop/getConfirmed";
const GET_WORKSHOPS_BY_STATUS_URL = "http://3.19.77.232:5000/workshop/getEvents";


//reviwer Servises URL
const BackendAPIGetOneReviwer_URL = "http://3.19.77.232:5000/reviwer/getreviwer";
const BackendAPIUpdateReviwer_URL = "http://3.19.77.232:5000/user/update";
const BackendAPIDeleteReviwer_URL = "http://3.19.77.232:5000/reviwer/delete";

//user service URL
const BackendAPIAddResercher = "http://3.19.77.232:5000/user/addresearcher";
const BackendAPIAddWorkshop_presenter = "http://3.19.77.232:5000/user/addWorkshop_presenter";
const BackendAPIAddAttendee = "http://3.19.77.232:5000/user/addattende";
const BackendAPIGetUsersByType = "http://3.19.77.232:5000/user/getUsersByType";
const BackendAPIAddStaffMember = "http://3.19.77.232:5000/user/addStaff";
const BackendAPIGetAllUsers = "http://3.19.77.232:5000/user/getallusers";
const BackendAPIFindUser = "http://3.19.77.232:5000/user/getuser";

//Research Service URL
const BackendAPIgetllresearch = "http://3.19.77.232:5000/researchdoc/getallresearchdocs";
const BackendAPIgetllPowerpoint = "http://3.19.77.232:5000/proposaldoc/getallproposaldocs";

//Add Payment
const PaymentAPIAddPayment = "http://3.19.77.232:5000/payment/add"
const PaymentAPIAuthPayment = "http://3.19.77.232:5000/payment/auth"

//Research Service URL
const GetresearchpapersusignAPI = "http://3.19.77.232:5000/researchdoc/getresearch"
const GetproposalpapersusignAPI = "http://3.19.77.232:5000/proposaldoc/getresearch"
const addreserchAPI = "http://3.19.77.232:5000/researchreviwe/add"
const addnewproposalAPI = "http://3.19.77.232:5000/proposalreviwe/add"
const updateresearchdetails = "http://3.19.77.232:5000/researchdoc/updateresearchdeatails"
const updateproposaldetails = "http://3.19.77.232:5000/proposaldoc/updateresearchdeatails"
const BackendAPIgetllpending = "http://3.19.77.232:5000/researchdoc/getpending"
const BackendAPIgetllpendingproposal = "http://3.19.77.232:5000/proposaldoc/getpending"
const BackendAPIgetllapproveusingid = "http://3.19.77.232:5000/researchreviwe/getresearchreviwereviwer"
const BackendAPIgetllapproveproposalusingid = "http://3.19.77.232:5000/proposalreviwe/getresearchreviwereviwer"
const BackendAPIgetlldeclineusingid = "http://3.19.77.232:5000/researchreviwe/getdeclineresearchreviwereviwer"
const BackendAPIgetlldeclineproposalusingid = "http://3.19.77.232:5000/proposalreviwe/getdeclineresearchreviwereviwer"
const BackendAPIgetreveiwusingdocid = "http://3.19.77.232:5000/researchreviwe/getresearchreviwetoupdate"
const BackendAPIgetproposalreveiwusingdocid = "http://3.19.77.232:5000/proposalreviwe/getresearchreviwetoupdate"
const BackendAPIupdatereview = "http://3.19.77.232:5000/researchreviwe/updateResearchReview"
const BackendAPIproposalupdatereview = "http://3.19.77.232:5000/proposalreviwe/updateProposalReview"
const DELETE_RE_REVIEW_USINGID_API_BASE_URL = "http://3.19.77.232:5000/researchreviwe/delete"
const DELETE_proposal_REVIEW_USINGID_API_BASE_URL = "http://3.19.77.232:5000/proposalreviwe/delete"

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
    //admin add event
    adminAddEvent(event){
        return axios.post(ADMIN_ADD_WORKSHOP_URL, event);
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
    //admin update workshop
    //update an event
    adminUpdateWorkshop(event, id){
        console.log("update"+id);
        return axios.put(ADMIN_UPDATE_WORKSHOP_URL + '/' + id, event);
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
    addPayment(payment){
        return axios.post(PaymentAPIAddPayment,payment)
    }

    authPayment(Auth){
        return axios.post(PaymentAPIAuthPayment,Auth)
    }

    addStaff(user){
        return axios.post(BackendAPIAddStaffMember, user);
    }

    getAllUsers(){
        return axios.get(BackendAPIGetAllUsers);
    }
    getUsersByType(type){
        return axios.get(BackendAPIGetUsersByType + '/' + type);
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
    //get all research deatails
    getallresearchdoc() {
        return axios.get(BackendAPIgetllresearch);
    }
    //get all presentation deatails
    getallpresentationdoc() {
        return axios.get(BackendAPIgetllPowerpoint);
    }
    //vihanga
    //get reviwer details using user id
    getuser(id){
        return axios.get(BackendAPIFindUser + '/' + id);
    }

    //get all proposal deatails
    getallproposaldoc() {
        return axios.get(BackendAPIgetllPowerpoint);
    }
    //get all pending research deatails
    getallpendingresearchdoc() {
        return axios.get(BackendAPIgetllpending);
    }
    //get all pending proposal deatails
    getallpendingproposaldoc() {
        return axios.get(BackendAPIgetllpendingproposal);
    }
    //get all approve research using review id
    getallapproveresearchdoc(id) {
        return axios.get(BackendAPIgetllapproveusingid + '/' + id);
    }
    //get all approve proposal using review id
    getallapproveproposaldoc(id) {
        return axios.get(BackendAPIgetllapproveproposalusingid + '/' + id);
    }
    //get all decline research using review id
    getalldeclineresearchdoc(id) {
        return axios.get(BackendAPIgetlldeclineusingid + '/' + id);
    }
    //get all decline research using review id
    getalldeclineproposaldoc(id) {
        return axios.get(BackendAPIgetlldeclineproposalusingid + '/' + id);
    }
    //get research using review id
    getrewieusingdocid(id) {
        return axios.get(BackendAPIgetreveiwusingdocid + '/' + id);
    }
    //get proposal using review id
    getproposalrewieusingdocid(id) {
        return axios.get(BackendAPIgetproposalreveiwusingdocid + '/' + id);
    }
    //getresearch using id
    getresearch(id) {
        return axios.get(GetresearchpapersusignAPI + '/' + id);
    }
    //get proposal research using id
    getproposal(id) {
        return axios.get(GetproposalpapersusignAPI + '/' + id);
    }
    //addnewreserachewview
    addresearch(research) {
        return axios.post(addreserchAPI, research);
    }
    //addnewproposalreview
    addnewproposalreview(research) {
        return axios.post(addnewproposalAPI, research);
    }
    //update research details using research id
    updateresearch(research, id) {
        return axios.put(updateresearchdetails + '/' + id, research);
    }
    //update proposal details using research id
    updateproposalresearch(research, id) {
        return axios.put(updateproposaldetails + '/' + id, research);
    }
    //update reviw details using reviw id
    updatereview(review, id) {
        return axios.put(BackendAPIupdatereview + '/' + id, review);
    }
    //update reviw details using reviw id
    updateproposalreview(review, id) {
        return axios.put(BackendAPIproposalupdatereview + '/' + id, review);
    }
    //delete proposal review
    deleteproposal(id) {
        return axios.delete(DELETE_proposal_REVIEW_USINGID_API_BASE_URL + '/' + id);
    }
    //delete research review
    deleteresearch(id) {
        return axios.delete(DELETE_RE_REVIEW_USINGID_API_BASE_URL + '/' + id);
    }






}

export default new ConferenceManagementSystemServices();