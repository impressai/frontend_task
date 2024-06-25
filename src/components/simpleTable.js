import React from "react";

const SimpleTable = ({ dataSource }) => {
  return (
    <div className="table-container">
      {dataSource.length ? (
        <table className="user-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {dataSource.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No user data</p>
      )}
    </div>
  );
};

export default SimpleTable;