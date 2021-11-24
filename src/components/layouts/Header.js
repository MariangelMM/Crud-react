import React from "react";
import { useHistory } from "react-router-dom";
import { Popover, Avatar, Button, Badge } from "antd";
import { UserOutlined, ExportOutlined } from "@ant-design/icons";

import "./layout.css";

export const Header = ({ auth, setAuth }) => {
  //hook de react-router que da acceso al objeto history y permite la navegación en la aplicación
  const history = useHistory();

  const handleLogOut = () => {
    localStorage.removeItem("user");
    setAuth(false);
    history.push("/login");
  };

  const content = (
    <Button type="link" className="header__btn-logout" onClick={handleLogOut}>
      <ExportOutlined />
      &nbsp;Cerrar Sesión
    </Button>
  );

  return (
    <div className="header__container">
      <Popover content={content} title={`${auth.name}@everis.com`}>
        <Badge dot={true}>
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            icon={<UserOutlined />}
            className="avatar-item"
          />
        </Badge>
      </Popover>
    </div>
  );
};