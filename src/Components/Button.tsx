import React from "react";

interface buttonProps {
  name: string;
  onClick: () => void;
}

class Button extends React.Component<buttonProps> {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>{this.props.name}</button>
      </div>
    );
  }
}

export default Button;
