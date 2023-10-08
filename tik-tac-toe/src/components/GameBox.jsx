import React from "react";

export default function GameBox(props) {
  const { value, onClick } = props;
  console.log(value)

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
        margin:"10px",
        fontSize: "70px"
      }}
    >
      {value}
    </div>
  );
}
