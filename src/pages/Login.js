import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import { UserOutlined } from "@ant-design/icons";


export const Login = ({ setAuth }) => {
  const history = useHistory();

  const onFinish = (values) => {
    localStorage.setItem("user", JSON.stringify({ ...values, isAuth: true }));
    history.push("/");
    setAuth({ ...values, isAuth: true });
    message.success(`Bienvenid@ ${values.name}`);
  };

  return (
    <div>
      <div className="login__container">
      <div className="login__form">
        <div className="login__title">Iniciar Sesión</div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Por favor, ingrese su nombre",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Ingrese su nombre"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Ingresar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
    </div>
  );
};
