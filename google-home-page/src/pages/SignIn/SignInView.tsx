import React from "react";
import "./SignInView.css";
import Button from "../../components/Button/Index.tsx";
import Link from "../../components/Link/Index.tsx";

export default function SignInView() {
  return (
    <div className="login">
      <div className="login-content">
        <div className="login-header">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="Google"
            className="login-img"
          />
          <h1>Fazer Login</h1>
          <h1>Olá</h1>
          <p>Use sua conta do Google</p>
          <div className="login-header--email">testeemail@gmail.com</div>
        </div>
        <div className="login-form">
          <div className="login-form--email">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="E-mail e Telefone"
            />
            <Link title="Esqueceu seu e-mail?"></Link>
          </div>

          <div className="login-form--password">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Digite sua senha"
            />
            <div className="login-form--checkbox">
              <input type="checkbox" id="checkbox" name="checkbox" />
              <label htmlFor="checkbox">Mostrar senha</label>
            </div>
          </div>
        </div>
        <div className="login-infos">
          <p>
            Não está no seu computador? Use o modo visitante para fazer login
            com privacidade.
          </p>
          <Link title="Saiba mais sobre como usar o Modo visitante"></Link>
        </div>
        <div className="login-button">
          <Button title="Criar conta" classNameType="button-white" />
          <Button title="Tente de outro jeito" classNameType="button-white" />
          <Button title="Avançar" classNameType="button-blue" />
        </div>
      </div>
    </div>
  );
}
