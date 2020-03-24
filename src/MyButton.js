import React, { Component } from "react";

export default class ImprovedButton extends Component {
   componentDidMount() {
    setTimeout(function() {
      alert("hello");
    }, 2000);
    window.addEventListener("beforeunload", ev => {
      ev.preventDefault();
      return (ev.returnValue = alert("Goodbye"));
    });
  }
  render() {
    return <button onClick={this.props.click}>{this.props.children}</button>;
  }
}
