import React, { PureComponent } from "react";

class User extends PureComponent {
  render() {
    console.log("User Rendered");

    return (
      <div>
        <h2>User Name: {this.props.name}</h2>
      </div>
    );
  }
}

export default User;