import React, { useState } from "react";
import Popup from "../popups/Popup";

const NewUserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [showMessagePopup, setShowMessagePopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const onAddNewUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 && age.trim().length === 0) {
      setPopupMessage("Usename and age fields cannot be empty!");
      setShowMessagePopup(true);
      return;
    } else if (userName.trim().length === 0) {
      setPopupMessage("Username cannot be empty!");
      setShowMessagePopup(true);
      return;
    } else if (age.trim().length === 0) {
      setPopupMessage("Age cannot be empty");
      setShowMessagePopup(true);
      return;
    }
      
    setShowMessagePopup(false);

    const newUser = {
        name: userName,
        age: age
    };

    props.invokeNewUser(newUser);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const onClickCancelPopupHandler = (check) => {
    setShowMessagePopup(check);
  };

  return (
    <div>
      <form style={{ padding: "15px" }} onSubmit={onAddNewUserHandler}>
        <label>Username</label>
        <br />
        <input type="text" onChange={userNameChangeHandler} />
        <br />
        <label>Age (Years)</label>
        <br />
        <input type="number" onChange={ageChangeHandler} />
        <br />
        <div>
          <button type="submit" className="button">
            Add User
          </button>
        </div>
      </form>
      {showMessagePopup && (
        <Popup
          onClickCancelPopup={onClickCancelPopupHandler}
          message={popupMessage}
        />
      )}
    </div>
  );
};

export default NewUserForm;
