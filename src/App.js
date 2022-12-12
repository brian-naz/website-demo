import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import AddUser from "./components/AddUser";
import "./App.css";

function App() {
  const user_list = [
    {
      name: "admin",
      password: "12345678",
      user_type: "Admin",
      permission: "Yes",
      admin_rights: "Yes",
      upload_rights: "Yes",
      access_rights: "Yes",
    },
    {
      name: "user",
      password: "12345678",
      user_type: "User",
      permission: "No",
      admin_rights: "No",
      upload_rights: "Yes",
      access_rights: "No",
    },
    {
      name: "abcuser",
      password: "12345678",
      user_type: "Admin",
      permission: "No",
      admin_rights: "No",
      upload_rights: "Yes",
      access_rights: "Yes",
    },
  ];

  const [user, setUser] = useState(user_list);
  const [loginUser, setLoginUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [sortUser, setSort] = useState({ setUser: "name", reversed: false });
  const [searchUser, setSearch] = useState("");

  const sorter = () => {
    setSort({ sortUser: "name", reversed: !sortUser.reversed });
    const userCopy = [...user];
    userCopy.sort((userA, userB) => {
      const nameA = `${userA.name}`;
      const nameB = `${userB.name}`;
      if (sortUser.reversed) {
        return nameB.localeCompare(nameA);
      }
      return nameA.localeCompare(nameB);
    });
    setUser(userCopy);
  };

  const search = (event) => {
    const found = user.filter((item) => {
      return `${item.name}`
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setUser(found);
    setSearch(event.target.value);
  };

  const deleteUser = (event) => {
    const updatedUser = [...user];
    updatedUser.splice(event, 1);
    setUser(updatedUser);
  };

  const renderList = () => {
    return user.map((usermap, index) => {
      return (
        <tr>
          <td key={index}>{usermap.name}</td>
          <td>{usermap.user_type}</td>
          <td>{usermap.permission === `Yes` ? `Yes` : `No`}</td>
        </tr>
      );
    });
  };

  const renderFullList = () => {
    return user.map((usermap, index) => {
      return (
        <tr>
          <td key={index}>{usermap.name}</td>
          <td>{usermap.password}</td>
          <td>{usermap.user_type}</td>
          <td>{usermap.permission === `Yes` ? `Yes` : `No`}</td>
          <td>{usermap.admin_rights === `Yes` ? `Yes` : `No`}</td>
          <td>{usermap.upload_rights === `Yes` ? `Yes` : `No`}</td>
          <td>{usermap.access_rights === `Yes` ? `Yes` : `No`}</td>
          <button onClick={() => deleteUser(index)}>Delete</button>
        </tr>
      );
    });
  };

  const renderFullTable = () => {
    return (
      <div>
        <div className="list">
          <div>
            <table>
              <thead>
                <tr>
                  <th onClick={sorter}>
                    Name
                    {sortUser.sortUser === "name" ? "" : null}{" "}
                  </th>
                  <th>Password</th>
                  <th>User Type</th>
                  <th>Permissions</th>
                  <th>Can Add</th>
                  <th>Can Upload</th>
                  <th>Can Access</th>
                  <th></th>
                </tr>
              </thead>
              <tbody> {renderFullList()} </tbody>
            </table>
          </div>
        </div>
        <div>
          <AddUser addUser={addUserHandler} />
        </div>
      </div>
    );
  };

  const renderTable = () => {
    return (
      <div>
        <div className="list">
          <div>
            <table>
              <thead>
                <tr>
                  <th onClick={sorter}>
                    Name
                    {sortUser.sortUser === "name" ? "" : null}{" "}
                  </th>
                  <th>User Type</th>
                  <th>Permissions</th>
                </tr>
              </thead>
              <tbody> {renderList()} </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const addUserHandler = (user) => {
    setUser((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  const adminUser = {
    username: "admin",
    password: "12345678",
  };

  const otherUser = {
    username: "user",
    password: "12345678",
  };

  const Login = (event) => {
    console.log(event);
    if (
      event.username === adminUser.username &&
      event.password === adminUser.password
    ) {
      console.log("Admin login");
      setLoginUser({ name: event.username, password: event.password });
    } else if (
      event.username === otherUser.username &&
      event.password === otherUser.password
    ) {
      console.log("Other User login");
      setLoginUser({ name: event.username, password: event.password });
    } else {
      setError("Details do not match");
      console.log("no");
    }
  };

  const LogOut = () => {
    setLoginUser({ username: "", password: "" });
    console.log("Logout");
  };

  return (
    <div>
      {loginUser.username !== "" ? (
        <div>
          {loginUser.username}
          <div className="input">
            <input
              type="text"
              placeholder="Search"
              value={searchUser}
              onChange={search}
            />
          </div>
          {loginUser.name === adminUser.username ? (
            <div>{renderFullTable()} {<Upload />}</div>
          ) : (
            <div>{renderTable()}</div>
          )}
          <div className="main">
            <button onClick={LogOut}>Logout</button>
          </div>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
