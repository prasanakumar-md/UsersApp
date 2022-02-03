import React from "react";
import NewUserForm from "./NewUserForm";

const AddNewUser = (props) => {

    const newUserHandler = (newUser) => {
        props.invokeNewUser(newUser);
    }
  
  return (
    <NewUserForm invokeNewUser={newUserHandler} />
  );
};

export default AddNewUser;
