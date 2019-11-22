import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

export default function HeaderButton({ text, path, additionalClassName=null }) {
    return(
        <NavLink to={path} className={`header-navlink-buttons dropdown ${additionalClassName}`}>
            {text}
        </NavLink>
    );
}
