import React from "react";
import "./GoogleHome.css";
import Button from "../../components/Button/Index.tsx";
import Nav from "../../components/Nav/Index.tsx";

const navTop = [
  {
    title: "Gmail",
    link: "#",
  },
  {
    title: "Gmail",
    link: "#",
  },
  {
    title: "Fazer Login",
    link: "#",
    classNameLink: "google-home-nav-login",
  },
];

const navBottonFirst = [
  {
    title: "Sobre",
    link: "#",
  },
  {
    title: "Publicidade",
    link: "#",
  },
  {
    title: "Negócios",
    link: "#",
  },
  {
    title: "Como Funciona a pesquisa",
    link: "#",
  },
];

const navBottonSecond = [
  {
    title: "Privacidade",
    link: "#",
  },
  {
    title: "Termos",
    link: "#",
  },
  {
    title: "Configuração",
    link: "#",
  }
];

export default function GoogleHome() {
  return (
    <div className="google-home">
      
      <Nav classNameType="google-home-nav-top" items={navTop}></Nav>
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

      <div className="google-home-nav-bottom">
        <div className="google-home-nav-bottom--location">
          <p>Brasil</p>
        </div>

        {/* <Nav classNameType="google-home-nav-top" items={navBottonFirst}></Nav>
        <Nav classNameType="google-home-nav-top" items={navBottonSecond}></Nav> */}
        <nav>
          <ul>
            <li>
              <a href="">Sobre</a>
            </li>
            <li>
              <a href="">Publicidade</a>
            </li>
            <li>
              <a href="">Negócios</a>
            </li>
            <li>
              <a href="">Como Funciona a pesquisa</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Privacidade</a>
            </li>
            <li>
              <a href="">Termos</a>
            </li>
            <li>
              <a href="">Configuração</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
