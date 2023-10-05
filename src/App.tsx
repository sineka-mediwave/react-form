import React, { Component } from "react";
import "./App.css";
import { Button, Input } from "./Components";

class App extends Component {
  state = {
    firstName: "",
    secondName: "",
    age: 0,
  };
  // const [input, setInput] = setState(initialValues);
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
    // this.setState({ firstName: e.target.value });
  };

  display = () => console.log(this.state);
  render(): React.ReactNode {
    return (
      <div className="App">
        <header className="App-header">
          <Input
            name="firstName"
            type="text"
            label="Enter Your First Name"
            onChange={this.handleChange}
            placeholder="Enter your First name"
          />
          <Input
            name="secondName"
            type="text"
            label="Enter Your Second Name"
            onChange={this.handleChange}
            placeholder="Enter your Second name"
          />
          <Input
            name="age"
            type="number"
            label="Enter Your Age"
            onChange={this.handleChange}
            placeholder="Enter your age"
          />
          <Button onClick={this.display} name="Submit" />
        </header>
      </div>
    );
  }
}

export default App;
