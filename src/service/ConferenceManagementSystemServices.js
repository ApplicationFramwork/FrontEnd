import axios from 'axios';
import jwt_decord from "jwt-decode";
//Login service URL
const LOGIN_URL = "https://it19004778.d12hx76qkqbpq6.amplifyapp.com/user/login";
const ACCOUNT_DEACTIVATE_URL = "https://it19004778.d12hx76qkqbpq6.amplifyapp.com/user/delete";
const ACCOUNT_UPDATE_URL = "https://it19004778.d12hx76qkqbpq6.amplifyapp.com/user/update";

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
