import axios from "axios";

const ADHERENT_API_BASE_URL = "http://localhost:8081/api/adherents";

class AdherentService {
  getAdherents() {
    return axios.get(ADHERENT_API_BASE_URL);
  }

  createAdherent(adherent) {
    return axios.post(ADHERENT_API_BASE_URL, adherent);
  }

  getAdherentById(adherentId) {
    return axios.get(ADHERENT_API_BASE_URL + "/" + adherentId);
  }

  updateAdherent(adherent, adherentId) {
    return axios.put(ADHERENT_API_BASE_URL + "/" + adherentId, adherent);
  }

  deleteAdherent(adherentId) {
    return axios.delete(ADHERENT_API_BASE_URL + "/" + adherentId);
  }
}

export default new AdherentService();
