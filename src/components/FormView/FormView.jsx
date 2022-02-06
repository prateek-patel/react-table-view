import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FormView = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addUser();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={props.handleChange}
          value={props.currentUser.email}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="username">
        <Form.Label>User Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your Name"
          onChange={props.handleChange}
          value={props.currentUser.username}
        ></Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" controlId="location">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          placeholder="Location"
          onChange={props.handleChange}
          value={props.currentUser.location}
        ></Form.Control>
      </Form.Group>

      <Form.Group className="mb-3" controlId="company">
        <Form.Label>Company</Form.Label>
        <Form.Control
          type="text"
          placeholder="Company"
          onChange={props.handleChange}
          value={props.currentUser.company}
        ></Form.Control>
      </Form.Group>

      <Button variant="success" type="submit" controlId="submitBtn">
        Submit
      </Button>

      <Button variant="primary" controlId="resetBtn" onClick={props.resetForm}>
        Reset
      </Button>
    </Form>
  );
};

export default FormView;
