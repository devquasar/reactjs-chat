import React from "react";
import { Link } from "react-router-dom";
import { Form, Input } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  InfoCircleTwoTone,
} from "@ant-design/icons";

import { Button, Block } from "components";

const success = false;

const RegisterForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться </p>
      </div>
      <Block>
        {!success ? (
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onSubmit={handleSubmit}
          >
            <Form.Item
              hasFeedback
              validateStatus={
                !touched.email ? "" : errors.email ? "error" : "success"
              }
              help={!touched.email ? false : errors.email}
            >
              <Input
                id="email"
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="E-mail"
                size="large"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Ваше имя"
                size="large"
              />
            </Form.Item>
            <Form.Item
              hasFeedback
              validateStatus={
                !touched.password ? "" : errors.password ? "error" : "success"
              }
              help={!touched.password ? false : errors.password}
            >
              <Input
                id="password"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Пароль"
                size="large"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item name="repeat-password">
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Повторите пароль"
                size="large"
              />
            </Form.Item>

            <Form.Item>
              <Button onClick={handleSubmit} type="primary" size="large">
                Зарегистрироваться
              </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/login">
              Войти в аккаунт
            </Link>
          </Form>
        ) : (
          <div className="auth__success-block">
            <div>
              <InfoCircleTwoTone style={{ fontSize: "50px" }} />
            </div>
            <h2>Подтвердите свой аккаунт</h2>
            <p>
              На Вашу почту отправлено письмо с ссылкой на подтверждение
              аккаунта.
            </p>
          </div>
        )}
      </Block>
    </div>
  );
};

export default RegisterForm;
