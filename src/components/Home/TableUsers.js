import React, { useState, useEffect } from "react";
import { Table } from "antd";

import { get } from "../../api/config";

export const TableUsers = () => {
    const [data, setData] = useState([])

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
  ];
  const getUsers = async () => {
    const response = await get();
    setData(response)
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Table dataSource={data} columns={columns} />
    </div>
  );
};
