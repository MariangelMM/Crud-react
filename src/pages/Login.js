import React from "react";
import { Form, Input, Button } from 'antd';
import { useHistory } from "react-router-dom";

export const Login = ({setAuth}) => {

  let history = useHistory();

  const onFinish = (values) => {
    localStorage.setItem("user", JSON.stringify({...values, isAuth: true}));
    history.push("/");
    setAuth({...values, isAuth: true})

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login__container">
      <div className="login__form">
        <p className="login__title">Iniciar Sesión</p>
        <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
    
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Nombre"
        name="nombre"
        rules={[
          {
            required: true,
            message: 'Ingrese su nombre',
          },
        ]}
      >
        <Input />
      </Form.Item>

     


      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Ingresar
        </Button>
      </Form.Item>
    </Form>
      </div>
    </div>
  );
};
