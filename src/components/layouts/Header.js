import React from "react";
import { useHistory } from "react-router-dom";
import { Popover, Avatar, Button, Badge } from "antd";
import { UserOutlined, ExportOutlined} from "@ant-design/icons";

import "./layout.css";

export const Header = ({ auth, setAuth }) => {
    
    const history = useHistory();
    
    const handleLogOut = () => {
       localStorage.removeItem("user");
       setAuth(false);
       history.push("/login");
    };
    
    const content = (
        <Button type= "Link" className="header__btn-logout" onClick={handleLogOut}>
          <ExportOutlined />
          &nbsp;Cerrar Sesión  
        </Button>
    );
    return (
      <div className="header-container">
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