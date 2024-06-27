import { React } from "react";

const SimpleTable = ({ dataSource }) => {
  return (
    <div className="form">
      {dataSource.length ? (
        <>
          <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {dataSource.map((item,index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
        </>
      ) : (
        "No user data"
      )}
    </div>
  );
};

export default SimpleTable;
