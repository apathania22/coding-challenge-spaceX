import React, { Component } from "react";

export class Description extends Component {
  render() {
    return (
      <div>
        {this.props.descrip}
        {this.props.country}
      </div>
    );
  }
}

export default Description;
