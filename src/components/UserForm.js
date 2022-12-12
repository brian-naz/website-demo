import React, { useState } from "react";
import PopUp from "./PopUp";
import "./UserForm.css";

const UserForm = (props) => {
  const [enteredUserName, setUserName] = useState("");
  const [enteredPassword, setPassword] = useState("");
  const [enteredUserType, setUserType] = useState("");
  const [permissions, setPermissions] = useState("");
  const [addNewAdmins, setAddNewAdmins] = useState("");
  const [uploadRights, setUploadRights] = useState("");
  const [accessRights, setAccessRights] = useState("");
  const [error, setError] = useState();

  const nameChanger = (event) => {
    setUserName(event.target.value);
  };

  const passwordChanger = (event) => {
    setPassword(event.target.value);
  };
  const userTypeChanger = (event) => {
    setUserType(event.target.value);
  };

  const permissionHandler = (event) => {
    setPermissions(event.target.value);
  };

  const uploadPermissionHandler = (event) => {
    setUploadRights(event.target.value);
  };

  const addNewAdminHandler = (event) => {
    setAddNewAdmins(event.target.value);
  };

  const accessHandler = (event) => {
    setAccessRights(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newUser = {
      name: enteredUserName,
      password: enteredPassword,
      user_type: enteredUserType,
      permission: permissions,
      admin_rights: addNewAdmins,
      upload_rights: uploadRights,
      access_rights: accessRights,
    };
    if (
      enteredUserName.trim().length === 0 ||
      enteredPassword.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Username and Password cannot be empty",
      });
      return;
    }
    // if (enteredUserName === newUser.name) {
    //   setError({
    //     title: "Username already exists",
    //     message: "This username is already taken",
    //   });
    //   return;
    // }
    props.onSave(newUser);
    setUserName("");
    setPassword("");
    setUserType("");
    setPermissions("");
    setAddNewAdmins("");
    setUploadRights("");
    setAccessRights("");
  };

  const renderRadio = () => {
    return (
      <div className="new-user-input">
        <ul>
          <li>
            <label>
              <input type="checkbox" value="Yes" onChange={permissionHandler} />
              Permissions
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="Yes"
                onChange={addNewAdminHandler}
              />
              Add New Admins
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="Yes"
                onChange={uploadPermissionHandler}
              />
              Upload Rights
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" value="Yes" onChange={accessHandler} />
              Access Rights
            </label>
          </li>
        </ul>
      </div>
    );
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <PopUp
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={submitHandler}>
        <div className="new-user-controls">
          <div className="new-user-input">
            <label>Username</label>
            <input
              type="text"
              value={enteredUserName}
              onChange={nameChanger}
            ></input>
          </div>
          <br />
          <div className="new-user-input">
            <label>Password</label>
            <input
              type="password"
              value={enteredPassword}
              onChange={passwordChanger}
            ></input>
          </div>
          <br />
          <div className="new-user-input">
            <div className="new-user-dropdown">
              <label>User Type</label>
              <select
                value={enteredUserType}
                onChange={userTypeChanger}
                className="new-user-dropdown"
              >
                <option>--Select--</option>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
          </div>
          <div className="new-user-input">
            {enteredUserType === "Admin" ? renderRadio() : ""}
          </div>
        </div>
        <div>
          <button type="submit">Add User</button>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
