import React from "react";
import "./Button.css";
import { buttonProps } from '../../types/Button.ts';

export default function Button({ title, classNameType }: buttonProps) {
  return <button className={ classNameType }>{title}</button>;
}
