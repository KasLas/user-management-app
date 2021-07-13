import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [usersData, setUsersData] = useState([]);

  const addUserDataHandler = (inputData) => {
    setUsersData((prevState) => {
      return [inputData, ...prevState];
    });
    console.log(usersData);
  };

  return (
    <div>
      <AddUser onFormSubmit={addUserDataHandler} />
      <UserList users={usersData} />
    </div>
  );
}

export default App;
