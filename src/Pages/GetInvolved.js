import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PanicButton from '../Components/PanicButton';

export default function GetInvolved() {
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('https://arcsoutheasttest2019.wpcomstaging.com/wp-json/wp/v2/pages?slug=get-involved');
            setPageData(result);
        };
        fetchData();
    }, []) // empty array at end means there are no variables to watch for changes and rerun this code for

    const renderContent = (html) => {
        return { __html: html };
    }

    return(
        <div className='getinvolvedpage'>
            <PanicButton/>
            <div className='secondary-page-title'>
                Get Involved
            </div>
            {pageData ? (
                <div
                    dangerouslySetInnerHTML={renderContent(pageData.data[0].content.rendered)}
                    className='secondary-page-data'
                />
            ) : (
                <div className='homepage-data'>
                    Oops! There should be descriptive words here. Try refreshing the page.
                </div>
            )}
            <div style={{ paddingTop: 50, width: '100%', height: 600 }}>
                <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=events%40arc-southeast.org&amp;ctz=America%2FLos_Angeles&amp;color=%23009688&amp;showPrint=0&amp;showDate=1&amp;showTitle=0&amp;showNav=1&amp;showTabs=0&amp;showCalendars=0&amp;showTz=1" style={{borderWidth: 0, width: '100%', height: '100%', frameborder: 0, scrolling: "no"}}></iframe>
            </div>
        </div>
    );
}
