import React from "react";
import "./Link.css";
import { linkProps } from "../../types/Link.ts";

export default function Link({ title, link }: linkProps) {
  return <a href={link} className="links" >{title}</a>;
}
