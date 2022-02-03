import React from "react";

const UserDetails = (props) => {
  const userForRemoval = (userid) => {
    props.removeUser(userid)
  };

  return (
    <div style={{ borderStyle: "solid", width: "48rem", padding: "15px" }}>
      {props.users.map((user) => {
        return (
          <div key={user.id}>
            <button
              type="button"
              onClick={() => {
                userForRemoval(user.id);
              }}
            >
              {user.name} ({user.age} years old)
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default UserDetails;
