import React, { useEffect, useState } from "react";
import InputHandler from "./commonInput";
import SimpleTable from "./simpleTable";

function MainComponent(props) {
  const { getUsers, userState, addUser, deleteUser, updateUser } = props;
  const [editingUser, setEditingUser] = useState(null);

  const handleSubmit = ({ name, email }) => {
    if (editingUser) {
      updateUser(editingUser.id, { name, email });
      setEditingUser(null);
    } else {
      addUser({ name, email });
    }
  };

  const handleDelete = (id) => {
    deleteUser(id);
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div id="main-container-wrapper">
      <InputHandler onSubmit={handleSubmit} editMode={!!editingUser} initialValues={editingUser} />
      <SimpleTable dataSource={userState.users} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default MainComponent;