import React, { useEffect, useState } from "react";
import InputHandler from "./commonInput";
import SimpleTable from "./simpleTable";

function MainComponent(props) {
  const { getUsers, userState, addUser, deleteUser, UpdateUser } = props;

  const [editRecord, seteditRecord] = useState({ editMode: false });

  const handleSubmit = ({ name, email, id }) => {

    if (id) {
      UpdateUser(id, { name, email });
      seteditRecord({ editMode: false })
    } else {
      addUser({ name, email });
    }


  };
  const handleDelete = (id) => {
    deleteUser(id);
    getUsers();

  };

  const handleEdit = (data) => {
    seteditRecord({ editMode: true, ...data })
  }


  useEffect(() => {
    getUsers();
  }, []);


  return (
    <div id="main-container-wrapper" className="header-box">
      <InputHandler onSubmit={handleSubmit} editMode={editRecord.editMode} editUserData={editRecord} />
      <SimpleTable dataSource={userState.users} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default MainComponent;
