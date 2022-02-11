import React, { Component } from "react";
import { Link } from "react-router-dom";
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
    await fetch(`/api/adherents/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      let updatedAdherents = [...this.state.adherents].filter(
        (i) => i.id_adherant !== id
      );
      console.log("Response" + res);
      this.setState({ adherents: updatedAdherents });
    });
  }

  render() {
    const { adherents, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }
    console.table("TTTTTTTTTTTTTT" + adherents);

    return (
      <div className="App">
        <header className="App-header">
          <div className="App-intro">
            <h2 style={{ marginLeft: "4rem", marginTop: "2rem" }}>
              List des Membres
            </h2>
            <div
              className="float-right"
              style={{ marginLeft: "4rem", marginTop: "2rem" }}
            >
              <Button color="secondary" tag={Link} to="/adherents/new">
                Ajouter Adhérent
              </Button>
            </div>
            <Table
              style={{
                marginLeft: "4rem",
                marginRight: "4rem",
                marginTop: "1rem",
              }}
            >
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
                        <Button size="sm" color="info">
                          <Link
                            to={`/adherents/${adherent.id_adherant}`}
                            key={adherent.id_adherant}
                          >
                            Modifier{" "}
                          </Link>
                        </Button>

                        <Button
                          size="sm"
                          color="danger"
                          onClick={() => this.remove(adherent.id_adherant)}
                        >
                          Spprimer
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
