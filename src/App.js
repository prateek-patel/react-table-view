import { Component } from "react";
import FormView from "./components/FormView/FormView";
import TableView from "./components/TableView";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      users: [],
      currentUser: {
        id: 1,
        email: "Arpit@hotmail.com",
        username: "arpit patel",
        location: "Dhamnod",
        company: "G-mart",
      },
    };
  }

  getNextId = (users) => {
    return users.length ? users[users.length - 1].id + 1 : 1;
  };

  addUser = () => {
    if (this.state.edit) {
      const temp_users = this.state.users;
      const userIndex = temp_users.findIndex(user => user.id === this.state.currentUser.id);
      temp_users.splice(userIndex, 1, this.state.currentUser);
      this.setState({ users: temp_users, edit: false }, () => {
        this.resetCurrentUser();
      });
    } else {
      this.setState(
        { users: [...this.state.users, this.state.currentUser] },
        () => {
          this.resetCurrentUser();
        }
      );
    }
  };

  resetCurrentUser = () => {
    this.setState({
      currentUser: {
        id: this.getNextId(this.state.users),
        email: "",
        username: "",
        location: "",
        company: "",
      },
    });
  }

  selectUser = (id) => {
    const modifyUser = this.state.users.find(user => user.id === id);
    this.setState({ currentUser: { ...modifyUser }, edit: true });
  }

  handleChange = (e) => {
    const currentUser = { ...this.state.currentUser }; // this avoided duplication of data
    currentUser[e.target.id] = e.target.value;
    this.setState({ currentUser });
  };

  showDetails = (user) => {
    this.setState({ currentUser: { ...user }, edit: false });
  };

  deleteUser = (id) => {
    const temp_users = this.state.users;
    const tempIndex = temp_users.findIndex(user => user.id === id);
    temp_users.splice(tempIndex, 1);
    this.setState({users: temp_users});
  }

  resetForm = () => {
    this.setState({
      currentUser: {
        id: this.getNextId(this.state.users),
        email: "",
        username: "",
        location: "",
        company: "",
      },
      edit: true,
    });
  };

  render() {
    return (
      <div>
        <FormView
          addUser={this.addUser}
          currentUser={this.state.currentUser}
          handleChange={this.handleChange}
          resetForm={this.resetForm}
          edit={this.state.edit}
        />
        <TableView
          data={this.state.users}
          showDetails={this.showDetails}
          editDetails={this.selectUser}
          deleteData={this.deleteUser}
        />
      </div>
    );
  }
}

export default App;
