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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const display = () => console.log(input);

  return (
    <div className="App">
      <header className="App-header">
        <Input
          name="firstName"
          type="text"
          label="Enter Your First Name"
          onChange={handleChange}
          placeholder="Enter your First name"
        />
        <Input
          name="secondName"
          type="text"
          label="Enter Your Second Name"
          onChange={handleChange}
          placeholder="Enter your Second name"
        />
        <Input
          name="age"
          type="number"
          label="Enter Your Age"
          onChange={handleChange}
          placeholder="Enter your age"
        />
        <Button onClick={display} name="Submit" />
      </header>
    </div>
  );
}

export default App;
