import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [data, setdata] = useState({
    username : "",
    password: ""
  })

  const handleOnchange = (e) =>{
    const {name, value} = e.target
    setdata({...data, [name]:value})
  }
  const handleOnSubmit = (e) =>{
    e.preventDefault()
    console.log(data)
  }
  return (
    <Container>
      <h1>LOGIN TO IMMERSIVE EXPERIENCE</h1>
      <Form onSubmit={handleOnSubmit}>
        <FormGroup>
          <FormLabel>Username</FormLabel>
          <FormControl
            type="text"
            name="username"
            value={data.username}
            onChange={handleOnchange}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <FormControl
            type="password"
            name="password"
            value={data.password}
            onChange={handleOnchange}
            required
          />
        </FormGroup>
        <Button type="submit">Login</Button>
        <Link to ="/">Forgot Password ?</Link>
      </Form>
    </Container>
  );
};

export default LogIn;
