import { React } from "react";

const SimpleTable = ({ dataSource }) => {
  return (
    <div>
      {dataSource.length ? (
        <>
          {dataSource.map((item, index) => {
            return (
              <div key={index}>
                <div>Id: {item.id}</div>
                <div>Name: {item.name}</div>
                <div>Email: {item.email}</div>
              </div>
            );
          })}
        </>
      ) : (
        "No user data"
      )}
    </div>
  );
};

export default SimpleTable;
