import React, { Component } from "react";
import { Table, ButtonGroup, Button } from "reactstrap";

class AdherentList extends Component {
  state = {
    isLoading: true,
    adherents: [],
  };

  async componentDidMount() {
    const response = await fetch("/api/adherents");
    const body = await response.json();
    this.setState({ adherents: body, isLoading: false });
  }

  async remove(id) {
    await fetch(`/adherents/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => {
      let updatedAdherents = [...this.state.adherents].filter(
        (i) => i.id !== id
      );
      this.setState({ adherents: updatedAdherents });
    });
  }

  render() {
    const { adherents, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <div className="App-intro">
            <h2>List des Membres</h2>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th>Password</th>
                  <th>Activités</th>
                </tr>
              </thead>
              <tbody>
                {adherents.map((adherent) => (
                  <tr>
                    <th scope="row">{adherent.id_adherant}</th>
                    <td key={adherent.id_adherant}>{adherent.nom}</td>
                    <td key={adherent.id_adherant}>{adherent.prenom}</td>
                    <td key={adherent.id_adherant}>{adherent.password}</td>
                    <td key={adherent.id_adherant}>{adherent.activites.nom}</td>
                    <td>
                      <ButtonGroup>
                        <Button
                          size="sm"
                          color="primary"
                          to={"/clients/" + adherent.id_adherent}
                        >
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          color="danger"
                          onClick={() => this.remove(adherent.id_adherent)}
                        >
                          Delete
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </header>
      </div>
    );
  }
}

export default AdherentList;
