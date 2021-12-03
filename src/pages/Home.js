import React from 'react';
import { TableUsers } from '../components/home/TableUsers';
import { Header} from "../components/layouts/Header";

export const Home = ({auth, setAuth}) => {
    return (
        <div className="home__container">
          <Header setAuth={setAuth} auth={auth}/>
          <h2 className="home__title">Administracion de Usuarios</h2>
          <TableUsers />
        </div>
    )
}
