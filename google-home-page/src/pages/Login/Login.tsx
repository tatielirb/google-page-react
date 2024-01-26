import React from "react";
import Button from "../../components/Button/Index.tsx";

export default function Login() {
  return (
    <div className="login">
      <div className="login-header">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google" />
        <h3>Fazer Login</h3>
        <p>Use sua conta do Google</p>
      </div>
      <div className="login-form">
        <input type="text" name="" id="" />
        <a href="">Esqueceu seu e-mail?</a>
      </div>
      <div className="login-infos">
        <p>
          Não está no seu computador? Use o modo visitante para fazer login com
          privacidade.
        </p>
        <a href="">Saiba mais sobre como usar o Modo visitante</a>
      </div>
      <div className="login-button">
        <a href="">Criar conta</a>
        <Button title="Avançar" />
      </div>
    </div>
  );
}
