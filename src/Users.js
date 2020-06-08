import React, { Component } from "react";

export class Users extends Component {
  //   contentJsx = () => {
  //     if (this.props.userArray) {
  //       return <div>Props</div>;
  //     } else {
  //       return <div> No Props </div>;
  //     }
  //   };

  render() {
    // Ternary Content Variable
    let content =
      this.props.userArray && this.props.userArray.length > 0 ? (
        <React.Fragment>
          {this.props.userArray.map((user) => (
            <div className="col-12 col-md-6 card p-2">
              <h4>{user.userName}</h4>
              <p>{user.skill}</p>
              <button
                className="btn btn-danger"
                onClick={() => this.props.delete(user.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </React.Fragment>
      ) : (
        <div className="col-12 text-center">We got nothing</div>
      );

    return (
      <React.Fragment>
        <h2>Users</h2>
        <div className="container">
          <div className="row">{content}</div>
        </div>
        {/* {this.contentJsx()} */}
      </React.Fragment>
    );
  }
}

export default Users;
