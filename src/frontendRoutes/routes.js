import axios from 'axios';

const BackendAPIReviwer_URL = "http://localhost:8070/reviwer";

class CmsServices{

    getreviwer(id){
        return axios.get(BackendAPIReviwer_URL+ '/' + 'getreviwer' + '/' + id);
    }

}
export default new CmsServices();