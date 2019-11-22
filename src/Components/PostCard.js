import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

export default function PostCard({ title, date, excerpt, id }) {
    const setExcerpt = (html) => {
        return { __html: html };
    }

    return(
        <NavLink
            to={`/${title}/${id}`}
            className='blog-post-card'
        >
            <div className='blog-post-card-title'>{title}</div>
            <div>{date}</div>
            <div dangerouslySetInnerHTML={setExcerpt(excerpt)}/>
        </NavLink>
    );
}
