import React from "react";
import "./Popup.css";

const Popup = (props) => {
  const cancelClickHandler = () => {
    props.onClickCancelPopup(false);
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <p>{props.message}</p>
        <button type="button" onClick={cancelClickHandler}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Popup;
