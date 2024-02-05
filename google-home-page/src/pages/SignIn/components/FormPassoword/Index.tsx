import React from "react";
import Button from "components/Button/Index";
import Input from "components/Input/Index";
import { FormPasswordProp } from "types/FormPassoword";

export default function FormPassoword({ valueEmailInput, onBackClick }: FormPasswordProp) {
  return (
    <div className="login-step active">
      <div className="login-header">
        <h1>Olá!</h1>
        <div className="login-header--email">{valueEmailInput}</div>
      </div>
      <div className="login-form">
        <div className="login-form--password">
          <Input typeProp="password" placeholderProp="Digite sua senha"></Input>
          <div className="login-form--checkbox">
            <input type="checkbox" id="checkbox" name="checkbox" />
            <label htmlFor="checkbox">Mostrar senha</label>
          </div>
        </div>
      </div>
      <div className="login-button">
        <Button title="Tente de outro jeito" classNameType="button-white" />
        <Button
          title="Voltar"
          classNameType="button-blue"
          onClickProp={onBackClick}
        />
      </div>
    </div>
  );
}
