import React, { Component } from "react";
import Users from "./Users";
import AddUser from "./AddUser";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          userName: "Aaron",
          id: 1,
        },
        {
          userName: "Jamie",
          id: 2,
        },
      ],
    };
  }

  addUser(userData) {
    this.setState({
      users: [...this.state.users, userData],
    });
  }

  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((user) => id !== user.id),
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Form State, Spread Syntax, Ternary Operator</h1>
        </div>
        <div className="container my-5">
          <AddUser add={this.addUser.bind(this)} />
        </div>
        <hr />
        <Users
          userArray={this.state.users}
          delete={this.deleteUser.bind(this)}
        />
      </div>
    );
  }
}

export default App;
