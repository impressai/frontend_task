import { React } from "react";
import { Table, Space, Button } from "antd";



const SimpleTable = ({ dataSource, onDelete, onEdit }) => {

  const handelDelete = (id) => {
    onDelete(id);


  }
  const handleEdit = (data) => {
    onEdit(data)
  }

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
      title: 'Action',
      key: 'action',
      render: (_, data) => (
        <Space size="middle">
          <Button onClick={() => {
            handelDelete(data.id)
          }} type="primary" danger>Delete</Button>
          <Button type="primary" onClick={() => handleEdit(data)}>Edit</Button>
        </Space>

      ),


    },

  ];
  return (
    <div className="form">
      {dataSource.length ? (
        <>
          <Table columns={columns} dataSource={dataSource} />
        </>
      ) : (
        "No user data"
      )}
    </div>
  );
};

export default SimpleTable;
