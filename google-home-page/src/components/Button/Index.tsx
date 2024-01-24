import React from "react";
import "./Button.css";
import { buttonProps } from '../../types/Button.ts';

export default function Button({ title }: buttonProps) {
  return <button>{title}</button>;
}
