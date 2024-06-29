import React, { useState, useEffect } from "react";
import '../assets/css/style.css';
import { Input, Button } from 'antd';

const InputHandler = ({ onSubmit, editMode = false, editUserData = {} }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  useEffect(() => {
    if (editMode && editUserData.id) {
      setName(editUserData.name);
      setEmail(editUserData.email);
    }
  }, [editMode, editUserData]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("enter valid email addresss")
      return
    }
    if (editMode) {
      onSubmit({ name, email, id: editUserData.id });
    } else {
      onSubmit({ name, email });
    }

    setName('');
    setEmail('');

  };

  return (
    <div className="header-box form line-break">
      <div className="formarrangement">
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <div className="button1 button2">

          <Button type="primary" onClick={handleSubmit}>
            {!!editMode ? "Edit user" : "Add user"}
          </Button>

        </div>
      </div>
    </div>
  );
};

export default InputHandler;
