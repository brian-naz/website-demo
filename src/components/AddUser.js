import React, { useState } from "react";
import UserForm from "./UserForm";
import "./AddUser.css";

const AddUser = (props) => {
  const [isEdit, setEdit] = useState(false);

  const saveHandler = (prevUsers) => {
    const newUser = {
      ...prevUsers,
      index: Math.random().toString()
    };
    props.addUser(newUser);
    setEdit(false);
  };

  const startEditHandler = () => {
    setEdit(true);
  };

  const stopEditHandler = () => {
    setEdit(false);
  };

  return (
    <div className="new-user">
      {!isEdit && <button onClick={startEditHandler}>Add New User</button>}
      {isEdit && <UserForm onSave={saveHandler} onCancel={stopEditHandler} />}
    </div>
  );
};

export default AddUser;
