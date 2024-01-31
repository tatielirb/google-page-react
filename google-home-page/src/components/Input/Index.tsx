import React from "react";
import "./Input.css";
import { inputProps } from "../../types/Input.ts";

export default function Input({
  typeProp,
  placeholderProp,
  valueProp,
  onChangeProp = () => {},
  requiredProp,
}: inputProps) {
  return (
    <input
      type={typeProp}
      placeholder={placeholderProp}
      value={valueProp}
      onChange={(e) => onChangeProp(e.target.value)}
      required={requiredProp}
      className="input"
    />
  );
}
