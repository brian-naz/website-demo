import React, { useState } from "react";
import AddUser from "./components/AddUser";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);
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
          <td>
            {usermap.password}
          </td>
          <td>
            {usermap.user_type}
          </td>
          <td>
            {usermap.permission === `Yes` ? `Yes` : `No`}
          </td>
          <td>
            {usermap.admin_rights === `Yes` ? `Yes` : `No`}
          </td>
          <td>
            {usermap.upload_rights === `Yes` ? `Yes` : `No`}
          </td>
          <td>
            {usermap.access_rights === `Yes` ? `Yes` : `No`}
          </td>
          <button onClick={() => deleteUser(index)}>Delete</button>
        </tr>
      );
    });
  };

  const addUserHandler = (user) => {
    setUser((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  // return (
  //   <div className="App">
  //     {user.map((item, index) => {
  //       return <div key={index}>name: {item.name}</div>;
  //     })}
  //   </div>
  // );

  return (
    <div>
      <div className="input">
        <input
          type="text"
          placeholder="Search"
          value={searchUser}
          onChange={search}
        />
      </div>
      <div className="list">
        <div>
          <table>
            <thead>
              <tr>
                <th onClick={sorter}>
                  Name
                  {sortUser.sortUser === "name" ? "^" : null}{" "}
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
            <tbody> {renderList()} </tbody>
          </table>
        </div>
      </div>
      <div>
        <AddUser addUser={addUserHandler} />
      </div>
    </div>
  );
}

export default App;
