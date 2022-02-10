import React, { Component } from "react";
import AdherentService from "../../Services/AdherentService";

class ListAdherentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Adherents: [],
    };
    this.addAdherent = this.addAdherent.bind(this);
    this.editAdherent = this.editAdherent.bind(this);
    this.deleteAdherent = this.deleteAdherent.bind(this);
  }

  deleteAdherent(id) {
    AdherentService.deleteAdherent(id).then((res) => {
      this.setState({
        Adherents: this.state.Adherents.filter(
          (Adherent) => Adherent.id !== id
        ),
      });
    });
  }
  viewAdherent(id) {
    this.props.history.push(`/view-Adherent/${id}`);
  }
  editAdherent(id) {
    this.props.history.push(`/add-Adherent/${id}`);
  }

  componentDidMount() {
    AdherentService.getAdherents().then((res) => {
      this.setState({ Adherents: res.data });
    });
  }

  addAdherent() {
    this.props.history.push("/add-Adherent/_add");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Adherents List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addAdherent}>
            {" "}
            Add Adherent
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Adherent First Name</th>
                <th> Adherent Last Name</th>
                <th> Adherent Email Id</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.Adherents.map((Adherent) => (
                <tr key={Adherent.id_adherent}>
                  <td> {Adherent.nom} </td>
                  <td> {Adherent.prenom}</td>
                  <td> {Adherent.sexe}</td>
                  <td>
                    <button
                      onClick={() => this.editAdherent(Adherent.id)}
                      className="btn btn-info"
                    >
                      Update{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteAdherent(Adherent.id_adherent)}
                      className="btn btn-danger"
                    >
                      Delete{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewAdherent(Adherent.id_adherent)}
                      className="btn btn-info"
                    >
                      View{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListAdherentComponent;
