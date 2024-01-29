import React from "react";
import { MenuItemProps } from "../../types/Nav.ts";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function MenuItem({
  title,
  link,
  classNameLink,
  isInternal = false,
}: MenuItemProps) {
  const renderLink = () => {
    if (isInternal) {
      return (
        <Router>
          <Link to={link} className={classNameLink}>
            {title}
          </Link>
        </Router>
      );
    } else {
      return (
        <a href={link} className={classNameLink}>
          {title}
        </a>
      );
    }
  };
  return <li>{renderLink()}</li>;
}
