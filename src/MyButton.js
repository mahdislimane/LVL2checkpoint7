import React, { Component } from "react";

export default class ImprovedButton extends Component {
  componentWillMount() {
    setTimeout(function() {
      alert("hello");
    }, 2000);
  }
  render() {
    return <button onClick={this.props.click}>{this.props.children}</button>;
  }
}
