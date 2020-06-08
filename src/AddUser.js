import React, { Component } from "react";

export class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      id: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.add({
      userName: this.state.userName,
      id: this.state.id,
    });
    this.setState({ userName: "", id: "" });
  }

  render() {
    return (
      <form className="mb-2" onSubmit={this.onSubmit.bind(this)}>
        {/* USER NAME INPUT */}
        <div className="form-group">
          <label htmlFor="name">User Name</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="user name"
            name="userName"
            value={this.state.userName}
            onChange={this.handleChange}
          />
        </div>
        {/* ID INPUT */}
        <div className="form-group">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            className="form-control"
            name="id"
            value={this.state.id}
            onChange={this.handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default AddUser;
