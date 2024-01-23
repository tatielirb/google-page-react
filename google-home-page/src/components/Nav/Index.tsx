import React from "react";
import MenuItem from "./MenuItem.tsx";

interface NavProps {
  classNameType: string;
  items: { link: string; title: string; classNameLink?: string }[];
}

export default function Nav({ classNameType, items }: NavProps) {
  return (
    <nav className={classNameType}>
      <ul>
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </ul>
    </nav>
  );
}
