import React from "react";
import {
  Grid,
  Form,
  Button,
  Header,
  Message,
  Icon,
  Segment,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

class Register extends React.Component {
  state = {};

  handleChange = (e) => {};

  render() {
    return (
      <Grid className="app" textAlign="center" verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="orange" textAlign="center">
            <Icon name="puzzle piece" color="orange" />
            Register for Flack
          </Header>

          <Form size="large">
            <Segment stacked>
              <Form.Input
                type="text"
                name="username"
                icon="user"
                iconPosition="left"
                placeholder="Username"
                onChange={this.handleChange}
                fluid
              />

              <Form.Input
                type="email"
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="E-Mail Address"
                onChange={this.handleChange}
                fluid
              />

              <Form.Input
                type="password"
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                onChange={this.handleChange}
                fluid
              />

              <Form.Input
                type="password"
                name="passwordConfirm"
                icon="repeat"
                iconPosition="left"
                placeholder="Confirm Password"
                onChange={this.handleChange}
                fluid
              />

              <Button color="orange" fluid size="large">
                Register
              </Button>
            </Segment>
          </Form>
          <Message>
            Already have an account? <Link to="/login">Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Register;
