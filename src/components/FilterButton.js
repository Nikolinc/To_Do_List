import React from "react";

// eslint-disable-next-line no-unused-vars
export default  function FilterButton(props){
    return(
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>{props.name}</span>
          <span className="visually-hidden"> tasks</span>
        </button>
    );
}