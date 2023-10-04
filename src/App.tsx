import React, { useState } from "react";
import "./App.css";
import { Button, Input } from "./Components";

function App() {
  const initialValues = {
    firstName: "",
    secondName: "",
    age: 0,
  };
  const [input, setInput] = useState(initialValues);
  const display = () => console.log(input);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div className="App">
      <header className="App-header">
        <Input
          name="First Name"
          type="text"
          onChange={handleChange}
          placeholder="Enter your First name"
        />
        <Input
          name="Second Name"
          type="text"
          onChange={handleChange}
          placeholder="Enter your Second name"
        />
        <Input
          name="Your Age"
          type="number"
          onChange={handleChange}
          placeholder="Enter your age"
        />
        <Button onClick={display} name="Submit" />
      </header>
    </div>
  );
}

export default App;
