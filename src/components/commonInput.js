import React, { useState } from "react";
import '../assets/css/style.css'

const InputHandler = ({ onSubmit, editMode = false }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
      alert("enter valid email addresss")
      return
    }
    onSubmit({ name, email });
  };

  return (
    <div className="header-box form line-break">
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button type="primary" onClick={handleSubmit}>
        {!!editMode ? "Edit user" : "Add user"}
      </button>
    </div>
  );
};

export default InputHandler;
