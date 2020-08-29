import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Input } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  InfoCircleTwoTone,
} from "@ant-design/icons";

import { Button, Block } from "components";

class RegisterForm extends Component {
  render() {
    const success = false;
    const onFinish = (values) => {
      console.log("Received values of form: ", values);
    };
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
              onFinish={onFinish}
            >
              <Form.Item name="username" hasFeedback validateStatus="success">
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="E-mail"
                  size="large"
                />
              </Form.Item>
              <Form.Item name="username" hasFeedback validateStatus="success">
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Ваше имя"
                  size="large"
                />
              </Form.Item>
              <Form.Item name="password">
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Пароль"
                  size="large"
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
                <Button type="primary" size="large">
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
  }
}

export default RegisterForm;
