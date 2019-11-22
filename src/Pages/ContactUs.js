import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PanicButton from '../Components/PanicButton';

export default function ContactUs() {
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('https://arcsoutheasttest2019.wpcomstaging.com/wp-json/wp/v2/pages?slug=contact-us');
            setPageData(result);
        };
        fetchData();
    }, []) // empty array at end means there are no variables to watch for changes and rerun this code for

    const renderContent = (html) => {
        return { __html: html };
    }

    return(
        <div className='contactuspage'>
            <PanicButton/>
            <div className='secondary-page-title'>
                Contact Us
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
        </div>
    );
}
