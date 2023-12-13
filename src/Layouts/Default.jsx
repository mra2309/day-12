import React from "react";
import Navbar from "../Components/Navbar";

export default function Default(props) {
  return (
    <div>
      <Navbar />
      <div className="m-auto w-2/3 pt-4">{props.children}</div>
    </div>
  );
}
