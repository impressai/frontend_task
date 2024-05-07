import React, { useEffect, useState } from "react";

function ExampleComponent(props) {
  const { getUsers, userState, addUser } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    addUser({ name, email });
  };
  useEffect(()=>{
    getUsers()
  },[])

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        /><br/>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <button onClick={handleSubmit}>Add user</button>
      <div>
        {userState.users.length ? (
          <>
            {userState.users.map((user, index) => {
              return (
                <div key={index}>
                  <div>Id: {user.id}</div>
                  <div>Name: {user.name}</div>
                  <div>Email: {user.email}</div>
                </div>
              );
            })}
          </>
        ) : (
          "No user data"
        )}
      </div>
    </div>
  );
}

export default ExampleComponent;
