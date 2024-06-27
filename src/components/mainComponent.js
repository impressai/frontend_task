import React, { useEffect } from "react";
import InputHandler from "./commonInput";
import SimpleTable from "./simpleTable";

function MainComponent(props) {
  const { getUsers, userState, addUser } = props;

  const handleSubmit = ({ name, email }) => {
    addUser({ name, email });
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div id="main-container-wrapper" className="header-box">
      <InputHandler onSubmit={handleSubmit} />
      <SimpleTable dataSource={userState.users} />
    </div>
  );
}

export default MainComponent;
