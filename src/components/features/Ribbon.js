import React from "react";

// Core Components

function Ribbon({ name, changeGlow, icon, toggle }) {
  return (
    <>
      <div
        className="ribbon"
        style={{
          fontSize: toggle ? "1.75rem" : "1rem",
          color: toggle ? "#ffe333" : "grey",

          // position: "relative",
          minWidth: "15%",
          height: "15%",
          margin: "1.5rem 1rem 0 0",
          overflow: "hidden",
          position: "absolute",
          top: "0px",
          right: "0px",
          cursor: "pointer",
          zIndex: "100",
          // border: '2px solid yellow'
        }}
      >
        <div
          // name={name}
          onClick={(e) => {
            e.preventDefault();
            changeGlow(name);
          }}
        >
          {icon}
        </div>
      </div>
    </>
  );
}

export default Ribbon;
