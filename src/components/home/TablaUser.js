import React, { useState, useEffect } from "react";
import { Table, Space, Button, Popconfirm, message } from "antd";
import { get, deleteUser, post} from "../../api/config";
import { AddUser } from "./AddUser";

export const TablaUser = () => {
  const columns = [
    {
      title: "Nombres",
      dataIndex: "nombres",
      key: "nombres",
    },
    {
      title: "Apellidos",
      dataIndex: "apellidos",
      key: "apellidos",
    },
    {
      title: "Puesto",
      dataIndex: "puesto",
      key: "puesto",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Popconfirm
            title="¿Estas seguro de eliminar?"
            onConfirm={() => confirm(record.id)}
            onCancel={cancel}
            okText="Si"
            cancelText="No"
          >
            <Button type="primary" danger>
              Eliminar
            </Button>
          </Popconfirm>

          <Popconfirm
            title="¿Estas seguro de eliminar?"
            onConfirm={() => confirm(record.id)}
            onCancel={cancel}
            okText="Si"
            cancelText="No"
          >
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const confirm = async (id) => {
    try {
      const response = await deleteUser(id);
      if (response.status === 200) {
        message.success("usuario eliminado");
      }
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  function cancel(e) {
    console.log(e);
    message.error("Click on No");
  }

  const [data, setData] = useState("");

  const getUsers = async () => {
    const response = await get();
    setData(response);
  };


const addUser = async (user) => {
    const response = await post(user);
    if (response.status === 201) {
      message.success("usuario agregado");
    }
    getUsers();
}


  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
    <AddUser addUser={addUser}/>
      <br/>
      <Table dataSource={data} columns={columns} />
    </div>
  );
};
