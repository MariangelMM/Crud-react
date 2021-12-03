import { Form, Input, Button } from 'antd';

export const AddUser = ({addUser}) => {

  const onFinish = (values) => {
      console.log(values)
    addUser(values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
           layout="inline"
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
        label="Nombres"
        name="nombres"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Apellidos"
        name="apellidos"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Puesto"
        name="puesto"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
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
          Agregar
        </Button>
      </Form.Item>
    </Form>
  );
};
