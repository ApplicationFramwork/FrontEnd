import axios from 'axios';
import jwt_decord from "jwt-decode";
//Login service URL
const LOGIN_URL = "https://it19004778.d2n41wr3m7a1wa.amplifyapp.com/user/login";
const ACCOUNT_DEACTIVATE_URL = "http://localhost:8070/user/delete";
const ACCOUNT_UPDATE_URL = "http://localhost:8070/user/update";

class ConferenceManagementSystemServices{
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
}

export default new ConferenceManagementSystemServices()
