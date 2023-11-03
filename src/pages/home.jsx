import React from "react";
import { Container, Button } from "react-bootstrap";
import SignUp from "./signUp";
import LogIn from "./logIn";
import "../styles/home.css";

const Home = () => {
  return (
    <Container>
      <h1>welcome</h1>
      <Button href="/login">
            LogIn
          </Button>
          <Button href="/signup">
            SignUp
          </Button>
    </Container>
  );
};

export default Home;
