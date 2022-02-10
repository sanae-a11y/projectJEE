import { Component } from "react";
import { Link } from "react-router-dom";
import {
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Label,
  Input,
  Button,
} from "reactstrap";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      validate: {
        emailState: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  };

  validateEmail(e) {
    const emailRex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const { validate } = this.state;

    if (emailRex.test(e.target.value)) {
      validate.emailState = "has-success";
    } else {
      validate.emailState = "has-danger";
    }

    this.setState({ validate });
  }

  submitForm(e) {
    e.preventDefault();
    console.log(`Email: ${this.state.email}`);
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="Login">
        <h2>Se Connecter</h2>
        <Form className="form" onSubmit={(e) => this.submitForm(e)}>
          <FormGroup>
            <Label>Nom d'Utilisateur</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="example@example.com"
              valid={this.state.validate.emailState === "has-success"}
              invalid={this.state.validate.emailState === "has-danger"}
              value={email}
              onChange={(e) => {
                this.validateEmail(e);
                this.handleChange(e);
              }}
            />
            <FormFeedback>
              Oh oh ! Il semble qu'il y ait un problème avec votre e-mail.
              Veuillez saisir un e-mail correct.
            </FormFeedback>
            <FormFeedback valid>
              C'est un e-mail appétissant que vous avez là.
            </FormFeedback>
            <FormText>
              Votre nom d'utilisateur est probablement votre e-mail.
            </FormText>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Mot de Passe</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
              value={password}
              onChange={(e) => this.handleChange(e)}
            />
          </FormGroup>
          <Button className="valid">
            <Link to="/admin">Valider</Link>
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
