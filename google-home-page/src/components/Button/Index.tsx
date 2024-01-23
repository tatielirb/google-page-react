import React from "react";
import "./Button.css";

export default function Button({ title }: { title: string }) {
  return <button>{title}</button>;
}
