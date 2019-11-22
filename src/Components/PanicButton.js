import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

export default function PanicButton() {
    return(
        <a href='https://www.google.com' className='panic-button' title='Click to leave this website now!'>
            X
        </a>
    );
}
