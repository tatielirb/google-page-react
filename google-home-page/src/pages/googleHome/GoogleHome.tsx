import React from "react";
import { navTop, navBottomFirst, navBottomSecond } from "./data.ts";
import "./GoogleHome.css";
import Button from "../../components/Button/Index.tsx";
import Nav from "../../components/Nav/Index.tsx";


export default function GoogleHome() {
  return (
    <div className="google-home">
      <div className="google-home-nav-top">
        <Nav items={navTop}></Nav>
      </div>

      <div className="google-home-content-center">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <input type="text" />
        <div className="google-home-content--button">
          <Button title="Pesquisar Google" />
          <Button title="Estou com Sorte" />
        </div>
      </div>

      <div className="google-home-footer">
        <div className="google-home-footer--location">
          <p>Brasil</p>
        </div>
        <div className="google-home-footer--nav-bottom">
          <Nav items={navBottomFirst}></Nav>
          <Nav items={navBottomSecond}></Nav>
        </div>
      </div>
    </div>
  );
}
