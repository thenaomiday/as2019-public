import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageButton from '../Components/PageButton';
import PanicButton from '../Components/PanicButton';

export default function NeedAssistance() {
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('https://arcsoutheasttest2019.wpcomstaging.com/wp-json/wp/v2/pages?slug=need-assistance');
            setPageData(result);
        };
        fetchData();
    }, []) // empty array at end means there are no variables to watch for changes and rerun this code for

    const renderContent = (html) => {
        return { __html: html };
    }

    return(
        <div className='needassistancepage'>
            <PanicButton/>
            <div className='secondary-page-title'>
                Need Assistance
            </div>
            {pageData ? (
                <React.Fragment>
                    <div
                        dangerouslySetInnerHTML={renderContent(pageData.data[0].content.rendered)}
                        className='secondary-page-data'
                    />
                    <PageButton text='Find Clinics' path='/find-clinics' styling={{ display: `block`, margin: `50px auto auto auto`, width: `70%` }}/>
                </React.Fragment>
            ) : (
                <div className='homepage-data'>
                    Oops! There should be descriptive words here. Try refreshing the page.
                </div>
            )}
        </div>
    );
}
