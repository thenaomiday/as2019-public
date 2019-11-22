import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from '../Components/PostCard';
import PanicButton from '../Components/PanicButton';

export default function BlogHome() {
    const [pageData, setPageData] = useState(null);
    const weekdays = ['Sun', 'Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('https://arcsoutheasttest2019.wpcomstaging.com/wp-json/wp/v2/posts');
            setPageData(result);
        };
        fetchData();
    }, []) // empty array at end means there are no variables to watch for changes and rerun this code for

    const renderContent = (html) => {
        const postList = [];
        html.forEach((post) => {
            const title = post.title.rendered;
            const fullDate = new Date(post.date);
            const date = `${weekdays[fullDate.getDay()]} ${months[fullDate.getMonth()]} ${fullDate.getDate()}, ${fullDate.getFullYear()}`
            const excerpt = post.excerpt.rendered;
            const id = post.id;
            postList.push(<PostCard key={id} title={title} date={date} excerpt={excerpt} id={id}/>)
        })
        return postList;
    }

    return(
        <div className='bloghomepage'>
            <PanicButton/>
            <div className='secondary-page-title'>
                Blog
            </div>
            {pageData ? (
                <div className='blog-homepage-data'>
                    {renderContent(pageData.data)}
                </div>
            ) : (
                <div className='homepage-data'>
                    Oops! There should be descriptive words here. Try refreshing the page.
                </div>
            )}
        </div>
    );
}
