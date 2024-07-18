import { React, useState } from "react";
import { Button, Form, Input, Modal, Table } from "antd";
import Column from "antd/lib/table/Column";

const SimpleTable = ({ dataSource, onDelete, onEdit }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [form] = Form.useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = (id, updatedUser) => {
    form
      .validateFields()
      .then((values) => {
        console.log(values);
        onEdit(id, updatedUser);
        form.resetFields();
        setIsModalOpen(false);
        form.submit();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
    console.log(id, updatedUser);
  };
  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  // deleting a user
  const handleDelete = (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete this user?",
      onOk() {
        onDelete(id);
      },
    });
  };

  return (
    <div>
      {dataSource.length > 0 ? (
        <Table dataSource={dataSource} pagination={false} rowKey="id">
          <Column title="Id" dataIndex="id" key="id" />
          <Column title="Name" dataIndex="name" key="name" />
          <Column title="Email" dataIndex="email" key="email" />
          <Column
            title="Action"
            key="action"
            render={(data) => (
              <div key={data.id}>
                <Button
                  type="primary"
                  onClick={() => {
                    setId(data.id);
                    setName(data.name);
                    setEmail(data.email);
                    showModal();
                  }}
                  style={{ marginRight: "1rem" }}
                >
                  Edit
                </Button>

                <Button
                  type="primary"
                  danger
                  onClick={() => handleDelete(data.id)}
                >
                  Delete
                </Button>
              </div>
            )}
          />
        </Table>
      ) : (
        <p>No data</p>
      )}
      <Modal
        title="Edit user"
        open={isModalOpen}
        okText="Edit user"
        onOk={() => handleOk(id, { id, name, email })}
        onCancel={handleCancel}
      >
        <Form form={form} initialValues={{ id, name, email }}>
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
        </Form>
      </Modal>
    </div>
  );
};

export default SimpleTable;