import React from "react";
import MenuItem from "./MenuItem";
import "./Nav.css";
import { NavProps } from "types/Nav";

export default function Nav({ items }: NavProps) {
  return (
    <nav>
      <ul>
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </ul>
    </nav>
  );
}
