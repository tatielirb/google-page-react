import React from "react";

interface MenuItemProps {
  link: string;
  title: string;
  classNameLink?: string;
}

export default function MenuItem({
  title,
  link,
  classNameLink,
}: MenuItemProps) {
  return (
    <li>
      <a href={link} className={classNameLink}>
        {title}
      </a>
    </li>
  );
}
