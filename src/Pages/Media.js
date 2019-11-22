import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PanicButton from '../Components/PanicButton';

export default function Media() {
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('https://arcsoutheasttest2019.wpcomstaging.com/wp-json/wp/v2/pages?slug=media');
            setPageData(result);
        };
        fetchData();
    }, []) // empty array at end means there are no variables to watch for changes and rerun this code for

    const renderContent = (html) => {
        return { __html: html };
    }

    return(
        <div className='aboutpage'>
            <PanicButton/>
            <div className='secondary-page-title'>
                In the Media
            </div>
            {pageData ? (
                <div
                    dangerouslySetInnerHTML={renderContent(pageData.data[0].content.rendered)}
                    className='secondary-page-data'
                />
            ) : null}
        </div>
    );
}
