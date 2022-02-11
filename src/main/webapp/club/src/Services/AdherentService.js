import axios from "axios";

const Adherent_BASE_REST_API_URL = "http://localhost:8081/api/adherents";

class AdherentService {
  handleError = (error) => {
    if (error === undefined || error.response === undefined) {
      throw new Error("Server Error");
    } else {
      throw new Error(error.response.data.message);
    }
  };
  getHeader = () => {
    let config = {
      header: {
        "Cache-Control": "no-cache",
        "Accept-Language": "en",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    return config;
  };
  getAllAdherents() {
    return axios
      .get(Adherent_BASE_REST_API_URL, this.getHeader())
      .catch(this.handleError);
  }

  createAdherent(Adherent) {
    return axios
      .post(Adherent_BASE_REST_API_URL, Adherent, this.getHeader())
      .catch(this.handleError);
  }

  getAdherentById(AdherentId) {
    return axios
      .get(Adherent_BASE_REST_API_URL + "/" + AdherentId, this.getHeader())
      .catch(this.handleError);
  }

  updateAdherent(AdherentId, Adherent) {
    return axios
      .put(
        Adherent_BASE_REST_API_URL + "/" + AdherentId,
        Adherent,
        this.getHeader()
      )
      .catch(this.handleError);
  }

  deleteAdherent(AdherentId) {
    return axios
      .delete(Adherent_BASE_REST_API_URL + "/" + AdherentId, this.getHeader())
      .catch(this.handleError);
  }
}

export default new AdherentService();
