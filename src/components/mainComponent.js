import React, { useEffect } from "react";
import InputHandler from "./commonInput";
import SimpleTable from "./simpleTable";

function MainComponent(props) {
  const { getUsers, userState, addUser,deleteUser,editUser } = props;

  const handleSubmit = ({ name, email }) => {
    addUser({ name, email });
  };

  const handleDelete=(id)=>{
    deleteUser(id)
  }

  const handleEdit=(id,updatedUser)=>{
    editUser(id,updatedUser)
  }

  useEffect(() => {
    getUsers();
  }, );

  return (
    <div id="main-container-wrapper">
      <InputHandler onSubmit={handleSubmit} />
      <SimpleTable dataSource={userState.users} onDelete={handleDelete} onEdit={handleEdit}/>
    </div>
  );
}

export default MainComponent;