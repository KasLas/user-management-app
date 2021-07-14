import React, { Fragment, useState } from "react";
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
    <Fragment>
      <AddUser onFormSubmit={addUserDataHandler} />
      <UserList users={usersData} />
    </Fragment>
  );
}

export default App;
