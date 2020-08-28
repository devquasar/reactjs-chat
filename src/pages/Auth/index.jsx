import React from "react";
import { Block, Button } from "components";

import "./Auth.scss";

const Auth = () => (
  <section className="auth">
    <div className="auth__content">
      <div className="auth__top">
        <h2>Войти в аккаунтт</h2>
        <p>Пожалуйста, войдите в свой аккаунт </p>
      </div>
      <Block>
        <Button type="primary" size="large">
          This is Button!
        </Button>
      </Block>
    </div>
  </section>
);

export default Auth;
