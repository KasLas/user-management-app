import React from "react";

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
    alert("submitted");
  };

  return (
    <div>
      <form onSubmit={addUserHandler}>
        <label htmlFor="userName">Username</label>
        <input id="userName" type="text" />
        <label htmlFor="userAge">Age (years)</label>
        <input id="userAge" type="number" />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
