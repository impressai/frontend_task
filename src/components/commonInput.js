import React, { useState } from "react";
import { Button, Input, Form } from "antd";

const InputHandler = ({ onSubmit, editMode = false }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [form] = Form.useForm();

  const handleSubmit = () => {
    if (!name || !email) return;
    onSubmit({ name, email });
    form.resetFields();
  };

  
  return (
    <div className="header-box ">
      <Form form={form} onFinish={handleSubmit}>
        {/* name input */}
        <Form.Item
          name="name"
          rules={[
            {
              type: "string",
            },
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input
            placeholder="Name"
            className="input-name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Item>

        {/* email input */}
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input
            placeholder="Email"
            className="input-email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Item>

        {/* submit button */}
        <Button type="primary" htmlType="submit">
          {!!editMode ? "Edit user" : "Add user"}
        </Button>
      </Form>
    </div>
  );
};

export default InputHandler;