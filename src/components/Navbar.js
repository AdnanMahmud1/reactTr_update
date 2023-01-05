/* eslint-disable no-unused-vars */
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const activeStyle = {
        textDecoration: 'underline',
        color: 'red',
        fontWeight: 'bold',
    };

    const activeClassName = 'underline';

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/services"
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}
                    >
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/posts/js/react"
                        style={({ isActive }) => (isActive ? activeStyle : undefined)}
                    >
                        JavaScript
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
