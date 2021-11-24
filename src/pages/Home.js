import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div>
            Home
            <br />
            <Link to="/login">Ir a Login</Link>
        </div>
    )
}
