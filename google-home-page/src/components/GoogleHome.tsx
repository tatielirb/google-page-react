import React from "react";
import "./GoogleHome.css";

function GoogleHome() {
  return (
    <div className="google-home">
      <nav className="google-home-nav-top">
        <ul>
          <li>
            <a href="">Gmail</a>
          </li>
          <li>
            <a href="">Imagens</a>
          </li>
          <li>
            <a href="" className="google-home-nav-login">
              Fazer Login
            </a>
          </li>
        </ul>
      </nav>
      <div className="google-home-content-center">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <input type="text" />
        <div className="google-home-content--button">
          <button>Pesquisar Google</button>
          <button>Estou com Sorte</button>
        </div>
      </div>

      <div className="google-home-nav-bottom">
        <div className="google-home-nav-bottom--location">
          <p>Brasil</p>
        </div>

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

export default GoogleHome;
