import React, { Component, StrictMode } from 'react'

export default class Class extends Component {
    state={
        name: "NYB Infotech"
    }
  render() {
    return (
      <StrictMode>
        <h2>Welcome to {this.state.name}</h2>
     </StrictMode>
    )
  }
}
