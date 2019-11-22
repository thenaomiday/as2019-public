import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

export default function PageButton({ text, path, styling=null, additionalClassName=null }) {
    return(
        <NavLink to={path} className={`page-button ${additionalClassName}`} style={styling}>
            {text}
        </NavLink>
    );
}
