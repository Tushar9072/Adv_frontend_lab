import React from "react";
import B from "./B";

export default function A({ name, setName }) {
  return <B name={name} setName={setName} />;
}
