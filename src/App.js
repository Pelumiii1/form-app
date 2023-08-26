import React, { useRef } from "react";
import "./App.css";
import emailjs from "@emailjs/browser";

function App() {
  const form = useRef();

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_h9fm5p7",
        "template_oidd218",
        form.current,
        "EEVwSYA6R0m-_8toc"
      )
      .then(
        (result) => {
          console.log(result.text);
          // console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} ref={form}>
        <label>Full Name:</label>
        <input type="text" name="fullName" required />
        <label>Age:</label>
        <input type="number" name="age" required />
        <label>Address:</label>
        <input type="text" name="address" required />
        <label>State:</label>
        <input type="text" name="state" required />
        <label>City:</label>
        <input type="text" name="city" required />
        <label>Zip Code:</label>
        <input type="number" name="zipCode" required />
        <label>Phone Number:</label>
        <input type="number" name="phoneNumber" required />
        <label>Tracker Number:</label>
        <input type="number" name="trackerNumber" required />
        <div className="background__check">
          <label>Background Check:</label>
          <input
            type="checkbox"
            name="backgroundCheck"
            className="background__check__input"
          />
        </div>
        <div className="button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
