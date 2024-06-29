import React from "react";
import "./assets/css/style.css";
import { connect } from "react-redux";
import "../node_modules/antd/dist/antd.css";
import MainComponent from "./components/mainComponent";
import { addUser, getUsers, deleteUser, UpdateUser } from "./actions/userActions";

import 'antd/dist/antd.min.css'

function App(props) {
  return (
    <div>
      <MainComponent {...props} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = {
  getUsers,
  addUser,
  deleteUser,
  UpdateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
