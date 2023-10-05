import React, { Component } from "react";

interface inputProps {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
class Input extends Component<inputProps> {
  render() {
    return (
      <div className="inputDiv">
        <label>{this.props.label}</label>
        <input
          name={this.props.name}
          type={this.props.type}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default Input;
