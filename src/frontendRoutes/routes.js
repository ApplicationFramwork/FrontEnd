import axios from 'axios';

const BackendAPIReviwer_URL = "http://localhost:8070/reviwer";

class CmsServices{

    getreviwer(id){
        return axios.get(BackendAPIReviwer_URL+ '/' + 'getreviwer' + '/' + id);
    }
    updatereviwer(reviwer, id){
        return axios.put(BackendAPIReviwer_URL + '/' + 'update' + '/' + id, reviwer);
    }
    deletereviwer(id, email){
        return axios.delete(BackendAPIReviwer_URL + '/' + 'delete' + '/' + id + '/' + email)
    }

}
export default new CmsServices();