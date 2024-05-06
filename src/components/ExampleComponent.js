import React from "react";

function ExampleComponent(props) {
  const { exampleAction, userState } = props;
  return (
    <div>
      <button onClick={() => {
        exampleAction();
      }}>get user data</button>
      <div>
        {userState.user ? <>
        <div>ID: {userState.user.id}</div>
        <div>First name: {userState.user.firstName}</div>
        <div>Last name: {userState.user.lastName}</div>
        </> : 'No user data'}
      </div>
    </div>
  );
}

export default ExampleComponent;
