import NewUser from "./components/NewUser/NewUser";
import UserDetails from "./components/UserDetails/UserDetails";
import React, { useState } from "react";

const users = [
  { id: "1", name: "Prasana Kumar", age: "31" },
  { id: "2", name: "Renitha", age: "28" },
];

function App() {
  const [usersList, setUsersList] = useState(users);

  const newUserHandler = (newUser) => {
    setUsersList((prevUsersList) => {
      return [newUser, ...prevUsersList];
    });
  };

  const removeUserHandler = (userid) => {
    setUsersList(
      usersList.filter((user) => {
        return user.id !== userid;
      })
    );
  };

  return (
    <div>
      <NewUser invokeNewUser={newUserHandler} />
      <br />
      <UserDetails users={usersList} removeUser={removeUserHandler} />
    </div>
  );
}

export default App;
