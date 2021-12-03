import React, { useState, useEffect } from "react";
import { Table, Space, Button,  Popconfirm, message } from "antd";
import {AddUser} from "./AddUser"

import { get,deleteHttp, post } from "../../api/config";

export const TableUsers = () => {
    const [data, setData] = useState([])

    const confirm = async (id) => {
     try{
       const response = await(deleteHttp(id))
       if(response.status === 200){
        message.success('Usuario eliminado');
       }      
       getUsers()
       }
        catch (error) {
      message.success('Usuario no eliminado');
       }
     }
    
    function cancel(e) {
      console.log(e);
      message.error('Click on No');
    }


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
      title: "puesto",
      dataIndex: "puesto",
      key: "puesto",
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
         

    <Popconfirm
    title="¿Estas seguro de eliminar este usuario?"
    onConfirm={() => confirm(record.id)}
    onCancel={cancel}
    okText="Si"
    cancelText="No"
  >
    <Button type="primary" danger>
     Eliminar
    </Button>
  </Popconfirm>

        </Space>
      ),
    },
  ];
  const getUsers = async () => {
    const response = await get();
    setData(response)
  };

  useEffect(() => {
    getUsers();
  }, []);

 

  const addUser = async (value) => {
    try{
      const response = await(post(value))
      console.log(response)
      if(response.status === 201){
       message.success('Usuario agregado');
      }      
      getUsers()
      }
       catch (error) {
     message.success('Usuario no agregado');
      }
    }

  return (
    <div>
      <AddUser addUser={addUser} />
      <br/>
      <Table dataSource={data} columns={columns} />
    </div>
  );
};
