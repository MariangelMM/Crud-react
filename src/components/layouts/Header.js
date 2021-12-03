import React from "react";
import { useHistory} from "react-router-dom"
import { Popover, Badge, Avatar, Button } from 'antd';
import { UserOutlined ,ExportOutlined } from "@ant-design/icons"

export const Header =({auth, setAuth}) =>{

    const history= useHistory();

    const handleLogOut =() =>{
     localStorage.removeItem("user")
     setAuth(false);
     history.push("/login");
    };
    
    const content= ( 
        <Button type="link" className="header_btn_logout" onClick={handleLogOut}>
            <ExportOutlined />
           &nbsp;cerrar sesion
        </Button>
    );
    return (
        <div className="header__container">
        <Popover content={content} title={`${auth.nombre}@everis.com`}>
            <Badge dot={true}>
          <Avatar 
          src= "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          icon={<UserOutlined />}
          className="avatar-item"
          />
          </Badge>
        </Popover>,
        </div>
    );
};