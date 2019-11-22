import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PanicButton from '../Components/PanicButton';

export default function BlogPost({ match }) {
    const [pageData, setPageData] = useState(null);
    const weekdays = ['Sun', 'Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    useEffect(() => {
        if (!pageData) {
            const fetchData = async () => {
                const result = await axios.get(`https://arcsoutheasttest2019.wpcomstaging.com/wp-json/wp/v2/posts/${match.params.blogId}`);
                setPageData(result);
            };
            fetchData();
        }
    }, [match.params.blogId, pageData])

    const renderContent = (html) => {
        return { __html: html };
    }

    const renderDate = (date) => {
        const fullDate = new Date(date);
        return `${weekdays[fullDate.getDay()]} ${months[fullDate.getMonth()]} ${fullDate.getDate()}, ${fullDate.getFullYear()}`
    }

    return(
        <div className='blogpostpage'>
            <PanicButton/>
            {pageData ? (
                <div className='secondary-page-data'>
                    <h3 className='blog-post-title'>
                        {pageData.data.title.rendered}
                    </h3>
                    <div className='blog-post-date'>
                        {renderDate(pageData.data.date)}
                    </div>
                    <div
                        dangerouslySetInnerHTML={renderContent(pageData.data.content.rendered)}
                    />
                </div>
            ) : (
                <div className='homepage-data'>
                    Oops! There should be descriptive words here. Try refreshing the page.
                </div>
            )}
        </div>
    );
}
