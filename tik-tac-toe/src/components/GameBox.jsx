import React from "react";

export default function GameBox({ value, onClick }) {
  return (
    <div
      onClick={value === "" ? onClick : null}
      style={{
        width: "100px",
        height: "100px",
        outline: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: value === "" ? "pointer" : "default",
      }}
    >
      {value}
    </div>
  );
}
