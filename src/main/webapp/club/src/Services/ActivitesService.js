import axios from "axios";

const ACTIVITE_API_BASE_URL = "http://localhost:8081/api/activites";

class ActiviteService {
  getActivites() {
    return axios.get(ACTIVITE_API_BASE_URL);
  }

  createActivite(ACTIVITE) {
    return axios.post(ACTIVITE_API_BASE_URL, ACTIVITE);
  }

  getActiviteById(ACTIVITEId) {
    return axios.get(ACTIVITE_API_BASE_URL + "/" + ACTIVITEId);
  }

  updateActivite(ACTIVITE, ACTIVITEId) {
    return axios.put(ACTIVITE_API_BASE_URL + "/" + ACTIVITEId, ACTIVITE);
  }

  deleteActivite(ACTIVITEId) {
    return axios.delete(ACTIVITE_API_BASE_URL + "/" + ACTIVITEId);
  }
}

export default new ActiviteService();
