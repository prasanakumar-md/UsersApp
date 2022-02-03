import React from "react";
import AddNewUser from "./AddNewUser";

const NewUser = (props) => {
  const newUserHandler = (newUser) => {
      const newAddedUser = {
          id:Math.random().toString(),
          ...newUser
      };

    props.invokeNewUser(newAddedUser);
  };

  return (
    <div style={{ borderStyle: "solid", width: "50rem" }}>
      <AddNewUser invokeNewUser={newUserHandler} />
    </div>
  );
};

export default NewUser;
