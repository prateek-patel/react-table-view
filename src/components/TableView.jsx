import React from "react";
import Table from "react-bootstrap/Table";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Id</th>
        <th>Email</th>
        <th>User name</th>
        <th>Location</th>
        <th>Company</th>
        <th></th>
        <th>Actions</th>
        <th></th>
      </tr>
    </thead>
  );
};

const TableRow = (element, showDetails, editDetails, deleteData) => {
  return (
    <tr key={element.id}>
      <td>{element.id}</td>
      <td>{element.email}</td>
      <td>{element.username}</td>
      <td>{element.location}</td>
      <td>{element.company}</td>
      <td onClick={() => showDetails(element)}>Details</td> {/* arrow function stopped recursive change in props */}
      <td onClick={() => editDetails(element.id)}>Edit</td>
      <td onClick={() => deleteData(element.id)}>Delete</td>
    </tr>
  );
};

const TableData = (data, showDetails, editDetails, deleteData) => {
  return data.map((element) => TableRow(element, showDetails, editDetails, deleteData));
};

const TableView = (props) => {
  return (
    <Table striped bordered hover>
      {TableHeader()}
      <tbody>
        {TableData(props.data, props.showDetails, props.editDetails, props.deleteData)}
      </tbody>
    </Table>
  );
};

export default TableView;
