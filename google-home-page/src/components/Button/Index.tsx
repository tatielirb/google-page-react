import React from "react";
import "./Button.css";
import { buttonProps } from "types/Button";

export default function Button({
  title,
  classNameType,
  onClickProp,
}: buttonProps) {
  return (
    <button className={classNameType} onClick={onClickProp}>
      {title}
    </button>
  );
}
