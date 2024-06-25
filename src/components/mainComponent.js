import React, { useEffect, useState } from "react";
import { Table, Button, Input, Form } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

function MainComponent(props) {
  const { getUsers, userState, addUser, deleteUser, updateUser } = props;
  const [form] = Form.useForm();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const handleSubmit = (values) => {
    addUser(values);
    form.resetFields();
  };

  const handleDelete = (id) => {
    deleteUser(id);
  };

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <>
          <Button type="primary" icon={<EditOutlined />} style={{ marginRight: 8 }}>
            Edit
          </Button>
          <Button type="danger" icon={<DeleteOutlined />} onClick={() => handleDelete(record.id)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Form form={form} layout="inline" onFinish={handleSubmit} style={{ marginBottom: 16 }}>
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please input the name!' }]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Please input the email!' },
            { type: 'email', message: 'Please enter a valid email!' }
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add user
          </Button>
        </Form.Item>
      </Form>

      <Table columns={columns} dataSource={userState.users} rowKey="id" />
    </div>
  );
}

export default MainComponent;